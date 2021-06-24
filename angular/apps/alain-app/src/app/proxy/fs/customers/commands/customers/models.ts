import type { CustomerCreateDto, CustomerPrimaryKeyDto, CustomerUpdateDto } from '../../dtos/models';

export interface CreateCommand {
  input: CustomerCreateDto;
}

export interface UpdateCommand {
  id: CustomerPrimaryKeyDto;
  input: CustomerUpdateDto;
}
