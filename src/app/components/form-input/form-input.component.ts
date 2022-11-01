import { Component, Input, OnInit } from '@angular/core';
import { FormGroupDirective, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() palceholder: string = '';
  @Input() formControlName: string = '';
  form!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    console.log(this.getControl());
  }
  getControl() {
    return this.form.controls[this.formControlName] as FormControl;
  }
}
