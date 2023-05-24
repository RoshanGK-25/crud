import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Model/Employee.model';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number;
  employee : Employee = new Employee();
  updateEmployeeForm! : FormGroup; 
  constructor(private empService : EmployeeService, private ActiveRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    // this.updateEmployeeForm = new FormGroup({
    //   firstname : new FormControl(""),
    //   lastname : new FormControl(""),
    //   email: new FormControl(""),
    //   phone: new FormControl(""),
    //   Designation: new FormControl("")
    // });
    
    this.id = this.ActiveRouter.snapshot.params['id'];
    console.log(this.id);
    this.empService.getEmployeeById(this.id).subscribe( res => { 
      console.log(res);
      this.employee = res;
    },error => console.log(error));
  }
  OnSubmit(){
    this.empService.updateEmployee(this.id, this.employee).subscribe( res =>{
      console.log(res);
      this.goToEmployeeList();
    },error => console.log(error));
  }
   goToEmployeeList(){
    this.empService.getEmployeeList().subscribe(res =>{
      console.log(res);
      this.router.navigate(['employees']);
    });
   } 
}