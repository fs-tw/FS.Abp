import { CodesDto } from './codes-dto';

export class CodesWithDetailsDto extends CodesDto {
  codeList: any[];
  definition: any;
  children: any[];
  parent: any;

  constructor(initialValues: Partial<CodesWithDetailsDto> = {}) {
    super(initialValues);
  }
}
