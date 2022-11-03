import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  createEmployee,
  createEmployeeWithID,
  Employee,
} from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss'],
})
export class CrudFormComponent implements OnInit {
  //Private variables
  private _activeId: number | null = null;
  //Event emitters
  @Output() addEmployee: EventEmitter<Employee> = new EventEmitter();
  @Output() updateEmployee: EventEmitter<Employee> = new EventEmitter();
  //Public variables
  showErrors: boolean = false;
  crudGroup = this._crudBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.minLength(11), Validators.maxLength(11)]],
  });

  get formControl() {
    return this.crudGroup.controls;
  }

  constructor(private _crudBuilder: FormBuilder) {}

  ngOnInit(): void {}

  handleSubmit() {
    if (this.crudGroup.status === 'INVALID') {
      this.showErrors = true;
    } else {
      if (this._activeId !== null) {
        this.updateEmployee.emit(
          createEmployeeWithID(
            this.crudGroup.value['firstName']!,
            this.crudGroup.value['lastName']!,
            this.crudGroup.value['phone']!,
            this._activeId
          )
        );
      } else {
        this.addEmployee.emit(
          createEmployee(
            this.crudGroup.value['firstName']!,
            this.crudGroup.value['lastName']!,
            this.crudGroup.value['phone']!
          )
        );
      }
      this.crudGroup.reset();
      this.showErrors = false;
      this._activeId = null;
    }
  }

  fillForm(emp: Employee): void {
    this.crudGroup.controls.firstName.setValue(emp.firstName);
    this.crudGroup.controls.lastName.setValue(emp.lastName);
    this.crudGroup.controls.phone.setValue(emp.phone);
    this._activeId = emp.id;
  }
}
