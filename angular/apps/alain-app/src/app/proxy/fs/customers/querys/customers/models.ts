import type { CustomerGetListDto, CustomerPrimaryKeyDto } from '../../dtos/models';

export interface FindQuery {
  id: CustomerPrimaryKeyDto;
}

export interface Query {
  input: CustomerGetListDto;
}
