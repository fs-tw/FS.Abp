import { Component, ChangeDetectionStrategy, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { I18NService, LangType } from '@fs/theme.ng-alain-ms/core';

@Component({
  selector: 'langs',
  templateUrl: './langs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangsComponent {
  /** Placement of pop menu */
  @Input() placement = 'bottomRight';

  /** Whether to display language text */
  @Input() @InputBoolean() showLangText = false;

  get langs() {
    return this.i18n.getLangs();
  }

  get curLangCode() {
    return this.settings.layout.lang;
  }

  get text() {
    return this.i18n.text;
  }

  constructor(
    private settings: SettingsService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  change(lang: LangType) {
    this.i18n.use(lang);
    this.settings.setLayout('lang', lang);
    setTimeout(() => this.doc.location.reload());
  }
}
