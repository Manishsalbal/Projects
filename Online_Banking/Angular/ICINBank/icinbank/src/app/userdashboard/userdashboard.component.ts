import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {


  fileName= 'ExcelSheet.xlsx'; 

  Rc={
    username:"",
    password:""
  };

  d: any=[];
 
  
  flag: boolean=false;

  accounttype={
    tfaccount1:"",
    tfaccount2:"",
   
  }
 

  constructor(private app:AppserviceService, private router:Router) {
  
    this.Rc=this.app.getData();
    this.getDatas(this.Rc);

    }

  ngOnInit(): void {
    
  }
   
  getDatas(Rc:any){
    this.app.getUserData(Rc).subscribe(Data => {
        this.d=Data;
    })

  }


  addBalance(baldata:any,username:string){
    
    this.app.addBalance(baldata,username).subscribe();
    baldata="";
    alert("Balance added successfully");
    this.getDatas(this.Rc);
    
  }


  withdrawMoney(username:string, withdata:any){
    this.app.withdrawMoney(username,withdata).subscribe();
    withdata="";
    alert("Money withdraw successfully")
    this.getDatas(this.Rc);
    

  }


  transferMoney(username:string,trandata:any){
    this.app.transferMoney(username,trandata).subscribe();
    trandata="";
    alert("Money TransferState successfully");
    this.getDatas(this.Rc);
  }
   

  transferMoneyBetweenAccount(username:string,bdata:NgForm){

    this.app.transferMoneyBetweenAccount(username,bdata).subscribe();
    bdata.reset();
    alert("Money TransferState successfully");
    this.getDatas(this.Rc);
    
  }
  
  getAll(){
    this.flag=true;
  }

  chequerequests(username:string,chequerequestdata:NgForm){

    this.app.chequerequest(username,chequerequestdata).subscribe();
    alert("Applied for cheque book successfully")
    chequerequestdata.reset();
  }

  loanrequests(username:string, loanrequestdata:NgForm,){
   
    this.app.loanrequest(username,loanrequestdata).subscribe();
    alert("Loan Applied Successfully")
    loanrequestdata.reset();
  }


    exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

  
}

