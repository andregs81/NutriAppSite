import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[AGSDateUS]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateUsDirective,
      multi: true
    }
  ]
})

export class DateUsDirective implements ControlValueAccessor {
  onChange: any;
  onTouched: any;
  private innerValue: any = '';

  constructor(private el: ElementRef) {}

  writeValue(value: any): void {
    if (value) {
      this.el.nativeElement.value = value.substring(0,10);
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('blur', ['$event'])
    onblur($event: any) {
      const valor = $event.target.value;
      this.onChange(valor);
    }

}
