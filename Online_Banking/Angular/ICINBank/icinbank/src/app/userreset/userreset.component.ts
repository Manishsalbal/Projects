import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userreset',
  templateUrl: './userreset.component.html',
  styleUrls: ['./userreset.component.css']
})
export class UserresetComponent implements OnInit {

  passType: string = 'password';
  userResetData={
    username:"",
    password:"",
    email:"",
    address:"",
    phonenumber:""
  }
  constructor(private app:AppserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  userReset(userresetdata:NgForm){
    if((userresetdata.value.username != null) && (userresetdata.value.password != null) && (userresetdata.value.email != null) && (userresetdata.value.address != null) && (userresetdata.value.phonenumber != null)){
      this.app.userReset(userresetdata).subscribe();
      userresetdata.reset();
      alert("Reset account successfully")
      this.router.navigate(["userlogin"])
    }
    else{
      alert("field cannot be empty")
    }
    
  }

  changePasswordType(){
    if(this.passType== 'password'){
    this.passType= 'text';
    }
    else{
   
    this.passType='password';
    }
    }

}
