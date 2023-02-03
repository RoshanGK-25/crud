import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Model/Employee.model';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor( private EmpService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.EmpService.getEmployeeList().subscribe(res => {
      console.log(res)
      this.employees = res;
    })
  }
  employeeDetail(id:number){
    this.router.navigate(['employee-details', id]);
  }
  employeeUpdate(id:number){
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id:number){
    this.EmpService.deleteEmployee(id).subscribe(res => {
      console.log(res);
      this.getEmployees();
    })
  }

}
