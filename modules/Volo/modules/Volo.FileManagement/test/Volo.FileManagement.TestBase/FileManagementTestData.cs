using System;
using Volo.Abp.DependencyInjection;

namespace Volo.FileManagement
{
    public class FileManagementTestData : ISingletonDependency
    {
        public Guid Directory1Id  { get; } = Guid.NewGuid(); // File and directory exist
        public Guid Directory2Id  { get; } = Guid.NewGuid(); // File and directory exist
        public Guid Directory3Id  { get; } = Guid.NewGuid(); // Directory 3 has only file
        public Guid Directory4Id  { get; } = Guid.NewGuid(); // Directory 4 has nothing
        
        public string Directory1Name { get; } = "Directory 1"; 
        public string Directory2Name { get; } = "Directory 2"; 
        public string Directory3Name { get; } = "Directory 3"; 
        public string Directory4Name { get; } = "Directory 4"; 
        
        public Guid? Directory1_ParentId => null; // At the root
        public Guid? Directory2_ParentId => Directory1Id;
        public Guid? Directory3_ParentId => Directory2Id;
        public Guid? Directory4_ParentId => Directory2Id;
        
        public Guid File1Id { get; } = Guid.NewGuid();
        public Guid File2Id { get; } = Guid.NewGuid();
        public Guid File3Id { get; } = Guid.NewGuid();
        public Guid File4Id { get; } = Guid.NewGuid();
        public Guid File5Id { get; } = Guid.NewGuid();

        public Guid? File1_DirectoryId => null; // At the root
        public Guid? File2_DirectoryId => Directory1Id;
        public Guid? File3_DirectoryId => Directory2Id;
        public Guid? File4_DirectoryId => Directory3Id;
        public Guid? File5_DirectoryId => Directory3Id;

        public string File1Name { get; } = "README.md";
        public string File2Name { get; } = "Best-Practises.md";
        public string File3Name { get; } = "Repositories.md";
        public string File4Name { get; } = "Contributions.md";
        public string File5Name { get; } = "Fundamentals.md";
    }
}