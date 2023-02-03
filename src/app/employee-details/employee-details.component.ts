import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Model/Employee.model';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!:number;
  employee!: Employee;

  constructor(private router : ActivatedRoute, private empService : EmployeeService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.employee = new Employee();
    this.empService.getEmployeeById(this.id).subscribe(res => {
      this.employee = res;
    })
  }

}
