import { InjectionToken } from "@angular/core";
import { ImagePicker } from '../models/models';

export let IMAGE_PICKER_TOKEN = new InjectionToken<ImagePicker.ImagePickerToken>('IMAGE_PICKER_TOKEN');