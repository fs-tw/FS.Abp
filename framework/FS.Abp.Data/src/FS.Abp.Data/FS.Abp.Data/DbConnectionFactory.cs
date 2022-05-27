using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using Volo.Abp.Data;

namespace FS.Abp.Data
{
    //https://weblog.west-wind.com/posts/2017/nov/27/working-around-the-lack-of-dynamic-dbproviderfactory-loading-in-net-core

    public enum DataAccessProviderTypes
    {
        SqlServer,
        SqLite,
        MySql,
        PostgreSql,
#if NETFULL
    OleDb,
    SqlServerCompact
#endif
    }

    public interface IDbConnectionFactory
    {
        Task<IDbConnection> CreateSqlConnectionAsync(string connectionName);

        Task<IDbConnection> CreateSqLiteConnectionAsync(string connectionName);

        Task<IDbConnection> CreateMySqlConnectionAsync(string connectionName);

        Task<IDbConnection> CreatePostgreSqlConnectionAsync(string connectionName);

#if NETFULL
        Task<IDbConnection> CreateOleDbConnection(string connectionName);

        Task<IDbConnection> CreateSqlServerCompactConnection(string connectionName);
#endif
    }

    public class DbConnectionFactory : IDbConnectionFactory, Volo.Abp.DependencyInjection.ISingletonDependency
    {
        private readonly IConnectionStringResolver connectionStringResolver;

        public DbConnectionFactory(
            IConnectionStringResolver connectionStringResolver)
        {
            this.connectionStringResolver=connectionStringResolver;
        }

        private async Task<string> GetConnectionStringAsync(string connectionName)
        {
            string connectionString = await connectionStringResolver.ResolveAsync(connectionName);

            if (connectionString == null)
            {
                throw new Exception(string.Format("Connection string {0} was not found", connectionName));
            }

            return connectionString;
        }

        public async Task<IDbConnection> CreateSqlConnectionAsync(string connectionName)
        {
            return CreateDbConnection(await GetConnectionStringAsync(connectionName), DataAccessProviderTypes.SqlServer);
        }

        public async Task<IDbConnection> CreateSqLiteConnectionAsync(string connectionName)
        {
            return CreateDbConnection(await GetConnectionStringAsync(connectionName), DataAccessProviderTypes.SqLite);
        }

        public async Task<IDbConnection> CreateMySqlConnectionAsync(string connectionName)
        {
            return CreateDbConnection(await GetConnectionStringAsync(connectionName), DataAccessProviderTypes.MySql);
        }

        public async Task<IDbConnection> CreatePostgreSqlConnectionAsync(string connectionName)
        {
            return CreateDbConnection(await GetConnectionStringAsync(connectionName), DataAccessProviderTypes.PostgreSql);
        }

#if NETFULL
        public IDbConnection CreateOleDbConnection(string connectionName)
        {
            return CreateDbConnection(GetConnectionString(connectionName), DataAccessProviderTypes.OleDb);
        }

        public IDbConnection CreateSqlServerCompactConnection(string connectionName)
        {
            return CreateDbConnection(GetConnectionString(connectionName), DataAccessProviderTypes.SqlServerCompact);
        }
#endif

        private IDbConnection CreateDbConnection(string connectionString, DataAccessProviderTypes providerType)
        {
            // Assume failure.
            DbConnection connection = null;

            // Create the DbProviderFactory and DbConnection.
            if (connectionString != null)
            {
                DbProviderFactory factory = DbProviderFactoryUtils.GetDbProviderFactory(providerType);

                connection = factory.CreateConnection();
                connection.ConnectionString = connectionString;
            }
            // Return the connection.
            return connection;
        }
    }

    internal static class DbProviderFactoryUtils
    {
        public static DbProviderFactory GetDbProviderFactory(DataAccessProviderTypes type)
        {
            if (type == DataAccessProviderTypes.SqlServer)
                return SqlClientFactory.Instance; // this library has a ref to SqlClient so this works

            if (type == DataAccessProviderTypes.SqLite)
            {
#if NETFULL
        return GetDbProviderFactory("System.Data.SQLite.SQLiteFactory", "System.Data.SQLite");
#else
                return GetDbProviderFactory("Microsoft.Data.Sqlite.SqliteFactory", "Microsoft.Data.Sqlite");
#endif
            }
            if (type == DataAccessProviderTypes.MySql)
                return GetDbProviderFactory("MySql.Data.MySqlClient.MySqlClientFactory", "MySql.Data");
            if (type == DataAccessProviderTypes.PostgreSql)
                return GetDbProviderFactory("Npgsql.NpgsqlFactory", "Npgsql");
#if NETFULL
    if (type == DataAccessProviderTypes.OleDb)
        return System.Data.OleDb.OleDbFactory.Instance;
    if (type == DataAccessProviderTypes.SqlServerCompact)
        return DbProviderFactories.GetFactory("System.Data.SqlServerCe.4.0");
#endif

            throw new NotSupportedException(string.Format("Unsupported Provider Factory", type.ToString()));
        }

        public static DbProviderFactory GetDbProviderFactory(string providerName)
        {
#if NETFULL
    return DbProviderFactories.GetFactory(providerName);
#else
            var providername = providerName.ToLower();

            if (providerName == "system.data.sqlclient")
                return GetDbProviderFactory(DataAccessProviderTypes.SqlServer);
            if (providerName == "system.data.sqlite" || providerName == "microsoft.data.sqlite")
                return GetDbProviderFactory(DataAccessProviderTypes.SqLite);
            if (providerName == "mysql.data.mysqlclient" || providername == "mysql.data")
                return GetDbProviderFactory(DataAccessProviderTypes.MySql);
            if (providerName == "npgsql")
                return GetDbProviderFactory(DataAccessProviderTypes.PostgreSql);

            throw new NotSupportedException(string.Format("Unsupported Provider Factory", providerName));
#endif
        }

        public static DbProviderFactory GetDbProviderFactory(string dbProviderFactoryTypename, string assemblyName)
        {
            var instance = GetStaticProperty(dbProviderFactoryTypename, "Instance");
            if (instance == null)
            {
                var a = LoadAssembly(assemblyName);
                if (a != null)
                    instance = GetStaticProperty(dbProviderFactoryTypename, "Instance");
            }

            if (instance == null)
                throw new InvalidOperationException(string.Format("Unable to retrieve DbProvider Factory Form", dbProviderFactoryTypename));

            return instance as DbProviderFactory;
        }

        #region Reflection Utilities
        //https://github.com/RickStrahl/Westwind.Utilities/blob/master/Westwind.Utilities/Utilities/ReflectionUtils.cs

        /// <summary>
        /// Retrieves a value from  a static property by specifying a type full name and property
        /// </summary>
        /// <param name="typeName">Full type name (namespace.class)</param>
        /// <param name="property">Property to get value from</param>
        /// <returns></returns>
        public static object GetStaticProperty(string typeName, string property)
        {
            Type type = GetTypeFromName(typeName);
            if (type == null)
                return null;

            return GetStaticProperty(type, property);
        }

        /// <summary>
        /// Returns a static property from a given type
        /// </summary>
        /// <param name="type">Type instance for the static property</param>
        /// <param name="property">Property name as a string</param>
        /// <returns></returns>
        public static object GetStaticProperty(Type type, string property)
        {
            object result = null;
            try
            {
                result = type.InvokeMember(property, BindingFlags.Static | BindingFlags.Public | BindingFlags.GetField | BindingFlags.GetProperty, null, type, null);
            }
            catch
            {
                return null;
            }

            return result;
        }

        /// <summary>
        /// Helper routine that looks up a type name and tries to retrieve the
        /// full type reference using GetType() and if not found looking 
        /// in the actively executing assemblies and optionally loading
        /// the specified assembly name.
        /// </summary>
        /// <param name="typeName">type to load</param>
        /// <param name="assemblyName">
        /// Optional assembly name to load from if type cannot be loaded initially. 
        /// Use for lazy loading of assemblies without taking a type dependency.
        /// </param>
        /// <returns>null</returns>
        public static Type GetTypeFromName(string typeName, string assemblyName)
        {
            var type = Type.GetType(typeName, false);
            if (type != null)
                return type;

            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            // try to find manually
            foreach (Assembly asm in assemblies)
            {
                type = asm.GetType(typeName, false);

                if (type != null)
                    break;
            }
            if (type != null)
                return type;

            // see if we can load the assembly
            if (!string.IsNullOrEmpty(assemblyName))
            {
                var a = LoadAssembly(assemblyName);
                if (a != null)
                {
                    type = Type.GetType(typeName, false);
                    if (type != null)
                        return type;
                }
            }

            return null;
        }

        /// <summary>
        /// Overload for backwards compatibility which only tries to load
        /// assemblies that are already loaded in memory.
        /// </summary>
        /// <param name="typeName"></param>
        /// <returns></returns>        
        public static Type GetTypeFromName(string typeName)
        {
            return GetTypeFromName(typeName, null);
        }

        /// <summary>
        /// Try to load an assembly into the application's app domain.
        /// Loads by name first then checks for filename
        /// </summary>
        /// <param name="assemblyName">Assembly name or full path</param>
        /// <returns>null on failure</returns>
        public static Assembly LoadAssembly(string assemblyName)
        {
            Assembly assembly = null;
            try
            {
                assembly = Assembly.Load(assemblyName);
            }
            catch { }

            if (assembly != null)
                return assembly;

            if (File.Exists(assemblyName))
            {
                assembly = Assembly.LoadFrom(assemblyName);
                if (assembly != null)
                    return assembly;
            }
            return null;
        }
        #endregion Reflection Utilities
    }
}