import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  addEmployeeForm!: FormGroup;

  constructor( private empServices : EmployeeService, private router : Router ) { }

  ngOnInit(): void {
    this.addEmployeeForm = new FormGroup({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      Designation : new FormControl('')
    });
  }
  clearForm(){
    this.addEmployeeForm.reset();
  }
  onSubmit(){
    console.log(this.addEmployeeForm.value);
    this.empServices.createEmployee(this.addEmployeeForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/employees']);
    })
    this.clearForm();
  }
}
