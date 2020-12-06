/**
 * Part of the code comes from https://github.com/KillerCodeMonkey/ngx-quill/
 */
import { DOCUMENT, isPlatformServer } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

declare var Quill: any;
import { Delta } from 'quill-delta';
import { ModalHelper } from '@delon/theme';
import ImageResize from 'quill-image-resize-module';

export interface CustomOption {
  import: string;
  whitelist: Array<any>;
}

import { InputBoolean, InputNumber } from '@delon/util';
import { ImgComponent } from '../img/img.component';

Quill.register('modules/imageResize', ImageResize);
['align', 'background', 'color', 'direction', 'font'].forEach((type) => Quill.register(Quill.import('attributors/style/' + type), true));
const Size = Quill.import('attributors/style/size');
const VALUES = {
  // NOTICE: Should be sync modify `@ql-sizes` in `styles/fix/_quill.less`
  size: ['10px', '12px', '14px', '16px', '18px', '20px', '24px'],
};
Size.whitelist = VALUES.size;
Quill.register(Size, true);

// @dynamic
@Component({
  selector: 'editor',
  template: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EditorComponent),
      multi: true,
    },
  ],
  host: {
    '[class.quill-editor]': 'true',
  },
  preserveWhitespaces: false,
})
export class EditorComponent implements AfterViewInit, ControlValueAccessor, OnChanges, OnDestroy, Validator {
  quill: any;
  editorElem: HTMLElement;
  emptyArray: any[] = [];
  content: any;
  selectionChangeEvent: any;
  textChangeEvent: any;
  _mode: 'full' | 'simple';

  @Input()
  set mode(value: 'full' | 'simple') {
    this._mode = value;
    const handlers = {
      image: (state: boolean) => this.image(state),
    };
    if (value === 'full') {
      this.modules = {
        imageResize: {},
        toolbar: {
          handlers,
          container: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            // [{ direction: 'rtl' }], // text direction

            [{ size: VALUES.size }], // custom dropdown
            [{ header: [1, 2, 3, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            // [{ font: [] }],
            [{ align: [] }],

            ['clean'], // remove formatting button

            ['link', 'image', 'video'], // link and image, video
          ],
        },
      };
    } else {
      this.modules = {
        imageResize: {},
        toolbar: {
          handlers,
          container: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'], // toggled buttons
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ header: [1, 2, 3, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ align: [] }],
            ['clean'], // remove formatting button
            ['link', 'image', 'video'], // link and image, video
          ],
        },
      };
    }
  }
  private image(status) {
    this.modalHelper
      .create(
        ImgComponent,
        {
          opt: {
            multiple: true,
            i: { orderby: 0, cat_id: 0, ps: 20 },
          },
        },
        {
          size: 1000,
          modalOptions: {
            nzClosable: false,
          },
        },
      )
      .subscribe((res: any[]) => {
        // delete
        const range = this.quill.getSelection(true);
        this.quill.updateContents(new Delta().retain(range.index).delete(range.length));
        // install all images
        for (const ii of res) {
          this.quill.updateContents(new Delta().retain(range.index).delete(range.length).insert({ image: ii.mp }, { alt: ii.title }));
        }
      });
  }

  @Input() format: 'object' | 'html' | 'text' | 'json' = 'html';
  @Input() theme: string;
  @Input() modules: { [index: string]: any };
  @Input() @InputBoolean() readOnly: boolean;
  @Input() placeholder = '';
  @Input() @InputNumber() maxLength: number;
  @Input() @InputNumber() minLength: number;
  @Input() @InputBoolean() required: boolean;
  @Input() formats: string[];
  @Input() style: any = { height: '250px' };
  @Input() @InputBoolean() strict = true;
  @Input() scrollingContainer: HTMLElement | string;
  @Input() bounds: HTMLElement | string;
  @Input() customOptions: CustomOption[] = [];

  @Output() readonly editorCreated = new EventEmitter();
  @Output() readonly contentChanged = new EventEmitter();
  @Output() readonly selectionChanged = new EventEmitter();

  @Input()
  valueGetter = (quillEditor: any, editorElement: HTMLElement): any => {
    let html: string | null = editorElement.children[0].innerHTML;
    if (html === '<p><br></p>' || html === '<div><br><div>') {
      html = null;
    }
    let modelValue = html;

    if (this.format === 'text') {
      modelValue = quillEditor.getText();
    } else if (this.format === 'object') {
      modelValue = quillEditor.getContents();
    } else if (this.format === 'json') {
      try {
        modelValue = JSON.stringify(quillEditor.getContents());
      } catch (e) {
        modelValue = quillEditor.getText();
      }
    }

    return modelValue;
  };

  @Input()
  valueSetter = (quillEditor: any, value: any, format: 'object' | 'html' | 'json'): any => {
    if (this.format === 'html') {
      return quillEditor.clipboard.convert(value);
    } else if (this.format === 'json') {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }

    return value;
  };

  onModelChange = (value: any) => { };
  onModelTouched = () => { };

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private doc: any,
    @Inject(PLATFORM_ID) private platformId: {},
    private renderer: Renderer2,
    private zone: NgZone,
    private modalHelper: ModalHelper,
  ) { }

  ngAfterViewInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    if (this._mode == null) {
      this.mode = 'full';
    }

    const modules: any = this.modules;

    this.elementRef.nativeElement.insertAdjacentHTML('beforeend', '<div quill-editor-element></div>');
    this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');

    if (this.style) {
      Object.keys(this.style).forEach((key: string) => {
        this.renderer.setStyle(this.editorElem, key, this.style[key]);
      });
    }

    this.customOptions.forEach((customOption) => {
      const newCustomOption = Quill.import(customOption.import);
      newCustomOption.whitelist = customOption.whitelist;
      Quill.register(newCustomOption, true);
    });

    this.quill = new Quill(this.editorElem, {
      modules,
      placeholder: this.placeholder,
      readOnly: this.readOnly || false,
      theme: this.theme || 'snow',
      formats: this.formats,
      bounds: this.bounds ? (this.bounds === 'self' ? this.editorElem : this.bounds) : this.doc.body,
      strict: this.strict,
      scrollingContainer: this.scrollingContainer,
    });

    if (this.content) {
      if (this.format === 'object') {
        this.quill.setContents(this.content, 'silent');
      } else if (this.format === 'text') {
        this.quill.setText(this.content, 'silent');
      } else if (this.format === 'json') {
        try {
          this.quill.setContents(JSON.parse(this.content), 'silent');
        } catch (e) {
          this.quill.setText(this.content, 'silent');
        }
      } else {
        const contents = this.quill.clipboard.convert(this.content);
        this.quill.setContents(contents, 'silent');
      }

      this.quill.history.clear();
    }

    this.editorCreated.emit(this.quill);

    // mark model as touched if editor lost focus
    this.selectionChangeEvent = this.quill.on('selection-change', (range: any, oldRange: any, source: string) => {
      this.zone.run(() => {
        this.selectionChanged.emit({
          editor: this.quill,
          range,
          oldRange,
          source,
        });

        if (!range) {
          this.onModelTouched();
        }
      });
    });

    // update model if text changes
    this.textChangeEvent = this.quill.on('text-change', (delta: any, oldDelta: any, source: string) => {
      const text = this.quill.getText();
      const content = this.quill.getContents();

      let html: string | null = this.editorElem.children[0].innerHTML;
      if (html === '<p><br></p>' || html === '<div><br><div>') {
        html = null;
      }

      this.zone.run(() => {
        this.onModelChange(this.valueGetter(this.quill, this.editorElem));

        this.contentChanged.emit({
          editor: this.quill,
          html,
          text,
          content,
          delta,
          oldDelta,
          source,
        });
      });
    });
  }

  ngOnDestroy() {
    if (this.selectionChangeEvent) {
      this.selectionChangeEvent.removeListener('selection-change');
    }
    if (this.textChangeEvent) {
      this.textChangeEvent.removeListener('text-change');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.quill) {
      return;
    }
    if (changes.readOnly) {
      this.quill.enable(!changes.readOnly.currentValue);
    }
    if (changes.placeholder) {
      this.quill.root.dataset.placeholder = changes.placeholder.currentValue;
    }
  }

  writeValue(currentValue: any) {
    this.content = currentValue;

    if (this.quill) {
      if (currentValue) {
        if (this.format === 'text') {
          this.quill.setText(currentValue);
        } else {
          this.quill.setContents(this.valueSetter(this.quill, this.content, this.format));
        }
        return;
      }
      this.quill.setText('');
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onModelTouched = fn;
  }

  validate() {
    if (!this.quill) {
      return null;
    }

    const err: {
      minLengthError?: { given: number; minLength: number };
      maxLengthError?: { given: number; maxLength: number };
      requiredError?: { empty: boolean };
    } = {};
    let valid = true;

    const textLength = this.quill.getText().trim().length;

    if (this.minLength && textLength && textLength < this.minLength) {
      err.minLengthError = {
        given: textLength,
        minLength: this.minLength,
      };

      valid = false;
    }

    if (this.maxLength && textLength > this.maxLength) {
      err.maxLengthError = {
        given: textLength,
        maxLength: this.maxLength,
      };

      valid = false;
    }

    if (this.required && !textLength) {
      err.requiredError = {
        empty: true,
      };

      valid = false;
    }

    return valid ? null : err;
  }
}
