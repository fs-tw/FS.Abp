import { InjectionToken } from "@angular/core";
import { EntityService } from '@fs-tw/components/multi-lingual/proxy';

export let MULTI_LINGUAL_CONFIG_OPTIONS = new InjectionToken<EntityService>('MULTI_LINGUAL_CONFIG_OPTIONS');