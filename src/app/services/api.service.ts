import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseURL = 'http://localhost:3000/';
  constructor(private _http: HttpClient) {}

  login(email: string, password: string): Observable<Array<Object>> {
    return this._http.get<Array<Object>>(
      this._baseURL + `users?email=${email}&password=${password}`
    );
  }
  addEmployee(emp: Employee): Observable<Employee> {
    return this._http.post<Employee>(
      this._baseURL + 'employees',
      JSON.stringify(emp),
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
  }
  getEmployees(): Observable<Array<Employee>> {
    return this._http.get<Array<Employee>>(this._baseURL + 'employees');
  }
  deleteEmployee(id: number): Observable<Object> {
    return this._http.delete<Object>(this._baseURL + `employees/${id}`);
  }
  updateEmployee(emp: Employee): Observable<Employee> {
    return this._http.put<Employee>(
      this._baseURL + `employees/${emp.id}`,
      JSON.stringify(emp),
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
  }
}
