import { CodesDto } from './codes-dto';

export class CodesSettingDto extends CodesDto {
  settings: Array<{ name: string; value: string }>;

  constructor(initialValues: Partial<CodesSettingDto> = {}) {
    super(initialValues);
  }
}
