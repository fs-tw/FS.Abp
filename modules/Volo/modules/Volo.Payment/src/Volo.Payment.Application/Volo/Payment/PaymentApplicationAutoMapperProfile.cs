using AutoMapper;
using Volo.Payment.Requests;

namespace Volo.Payment
{
    public class PaymentApplicationAutoMapperProfile : Profile
    {
        public PaymentApplicationAutoMapperProfile()
        {
            CreateMap<PaymentRequestProduct, PaymentRequestProductDto>();

            CreateMap<PaymentRequest, PaymentRequestWithDetailsDto>();
        }
    }
}