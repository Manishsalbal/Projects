import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminreset',
  templateUrl: './adminreset.component.html',
  styleUrls: ['./adminreset.component.css']
})
export class AdminresetComponent implements OnInit {

  adminResetData={
    name:"",
    password:""

  }
  passType: string = 'password';

  constructor(private app:AppserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  adminreset(adminresetdata:NgForm){
    this.app.adminreset(adminresetdata).subscribe();
    alert("Admin Reset Successfully")
    adminresetdata.reset();
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
