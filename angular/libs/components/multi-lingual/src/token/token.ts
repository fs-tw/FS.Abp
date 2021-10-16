import { InjectionToken } from "@angular/core";
import { MultiLingual } from '../models/models';

export let MULTI_LINGUAL_ENTITY_TYPE_STORE = new InjectionToken<MultiLingual.EntityTypeStore>('MULTI_LINGUAL_ENTITY_TYPE_STORE');