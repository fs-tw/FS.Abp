import { NgModule } from '@angular/core';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { SharedModule } from '../shared.module';

import { AddressWidget } from './widgets/address/address.widget';
import { EditorWidget } from './widgets/editor/editor.widget';
import { ImgWidget } from './widgets/img/img.widget';

export const SCHEMA_THIRDS_COMPONENTS = [EditorWidget, ImgWidget, AddressWidget];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  imports: [SharedModule, DelonFormModule.forRoot()],
  exports: [...SCHEMA_THIRDS_COMPONENTS],
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(EditorWidget.KEY, EditorWidget);
    widgetRegistry.register(ImgWidget.KEY, ImgWidget);
    widgetRegistry.register(AddressWidget.KEY, AddressWidget);
  }
}
