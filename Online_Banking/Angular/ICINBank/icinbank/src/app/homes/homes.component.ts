import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  passType: string = 'password';
  constructor(private app:AppserviceService,private router:Router) { }


  register(Data:NgForm){
    if((Data.value.username != null) && (Data.value.password != null) && (Data.value.email != null) && (Data.value.address != null) && (Data.value.phonenumber != null)){
      this.app.register(Data).subscribe(
 
        {
          next:(result: any) =>{
            console.log(result);
            Data.reset();
          },
          error:(err: any) =>{
            console.log(err);
            
          },
          complete:()=>{
            console.log('complete');
            Data.reset();
          }
        }
      )
      alert("Registration Done Successfully")
      this.router.navigate(["userlogin"])
    }
    else{
      alert("field cannot be empty")
      Data.reset();
    }
    

    
}


onSub(){
  this.router.navigate(["userlogin"])
}
  ngOnInit(): void {
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
