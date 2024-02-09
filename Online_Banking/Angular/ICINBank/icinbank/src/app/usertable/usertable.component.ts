import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';
import * as XLSX from 'xlsx'; 
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../model/iuser';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements AfterViewInit {
 
  
  fileName= 'ExcelSheet.xlsx';  

  // allUser!: IUser[];
  dataSource !: MatTableDataSource<IUser>;   
  displayedColumns: string[] = ['id', 'username', 'email','loanamount','balance','savingbalance','withdrawamount','withdrawdate','recipientname','transferamount','transferdate'];
  @ViewChild(MatPaginator,{static:false}) paginator !: MatPaginator;  
 
 
  
  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private app:AppserviceService, private router:Router) { 
    this.app.getAllAccount().subscribe(Data =>{
    
      this.dataSource = new MatTableDataSource(Data);
      this.dataSource.paginator = this.paginator;  
     
     
    })
    
  }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
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



