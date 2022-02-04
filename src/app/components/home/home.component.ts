import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  contain_register=false;
  contain_log=true;

   title ='example react form';

   public formLogin!:FormGroup 


 constructor( private formBuilder:FormBuilder) {
 }

 ngOnInit(): void {
   this.formLogin = this.formBuilder.group({
     name:['',
     [
       Validators.required,
       Validators.minLength(4),
     ],
   ]
   });
   

 }

 send(): any{
   if(this.formLogin.valid){
     console.log(this.formLogin!.value);
     this.onResetForm(); 
   }
   
 }

 onResetForm(){
   this.formLogin.reset();
 }

 res(){
   if(this.contain_register=true){
     this.contain_log=false;
   }
 }

}
