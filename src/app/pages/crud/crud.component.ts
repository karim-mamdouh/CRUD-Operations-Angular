import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { ApiService } from 'src/app/services/api.service';
import { CrudFormComponent } from './components/crud-form/crud-form.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  @ViewChild(CrudFormComponent) crudForm = {} as CrudFormComponent;
  headers: Array<string> = [
    'ID',
    'First Name',
    'Last Name',
    'Phone',
    'Actions',
  ];
  crudData: Array<Employee> = [];

  constructor(private _apiService: ApiService, private _router: Router) {}

  ngOnInit(): void {
    this._apiService.getEmployees().subscribe((res) => {
      this.crudData = res;
    });
  }
  logout(): void {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
  removeEmployee(id: number): void {
    this.crudData = this.crudData.filter((emp) => emp.id !== id);
    this._apiService.deleteEmployee(id).subscribe();
  }
  modifyEmployee(id: number): void {
    let emp = this.crudData.find((emp) => emp.id === id)!;
    if (!emp) {
      throw new Error('Not found');
    }
    this.crudForm.fillForm(emp);
  }
  addEmployee(emp: Employee): void {
    this.crudData.push(emp);
    this._apiService.addEmployee(emp).subscribe();
  }
  updateEmployee(emp: Employee): void {
    let index = this.crudData.findIndex((employee) => employee.id === emp.id);
    if (index === -1) {
      throw new Error('Not found');
    }
    this.crudData[index] = { ...emp };
    this._apiService.updateEmployee(emp).subscribe();
  }
}
