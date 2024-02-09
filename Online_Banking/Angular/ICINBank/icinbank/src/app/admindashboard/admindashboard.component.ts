import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import * as XLSX from 'xlsx'; 
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../model/iuser';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements AfterViewInit {
 
  allaccount: any=[];
  

  fileName= 'ExcelSheet.xlsx'; 
  dataSource !: MatTableDataSource<IUser>;
  displayedColumns: string[] = ['id', 'username', 'accountstatus','#','#1','#2'];
  

  @ViewChild(MatPaginator,{static:false}) paginator !: MatPaginator; 


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private app:AppserviceService, private router:Router) {
      this.get();
   }
 

  get(){
    this.app.getAllAccount().subscribe(Data =>{
      this.dataSource = new MatTableDataSource(Data);
      this.dataSource.paginator = this.paginator;  
    })
  }
 

  statuss(username:string, statusdata:NgForm){
    this.app.status(username,statusdata).subscribe();
    statusdata.reset();
    alert("Account status change successfully")
    this.get();
  }


  loanByAdmin(username: string,loanrequestdata: NgForm){
    this.app.loanByAdmin(username,loanrequestdata).subscribe();
    loanrequestdata.reset();
    alert("Loan Request Apporved")
    this.get();

  }

  chequeByAdmin(username: string,chequerequestdata: NgForm){
    this.app.chequeByAdmin(username,chequerequestdata).subscribe();
    chequerequestdata.reset();
    alert("Cheque Request Apporved")
    this.get();
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
