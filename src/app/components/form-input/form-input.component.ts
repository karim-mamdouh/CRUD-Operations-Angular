import { Component, Input, OnInit } from '@angular/core';
import { FormGroupDirective, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() type!: string;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() palceholder?: string;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    if (!this.type || !this.label || !this.controlName) {
      throw new Error('Check inputs initialaization');
    }
  }
}
