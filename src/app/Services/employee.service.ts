import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'https://63cfa73c8a780ae6e679d32e.mockapi.io/emp/';
  private db = 'Employee';

  constructor( private httpClient:HttpClient ) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl + this.db);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(this.baseUrl + this.db, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}${this.db}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl}${this.db}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}${this.db}/${id}`)
  }
}
