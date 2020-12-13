namespace Volo.Payment
{
    public class AbpPaymentPermissions
    {
        public const string GroupName = "AbpPayment";

        public static string[] GetAll()
        {
            return new[]
            {
                GroupName
            };
        }
    }
}