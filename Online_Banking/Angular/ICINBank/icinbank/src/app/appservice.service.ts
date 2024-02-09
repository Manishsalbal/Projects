import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from './model/iuser';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
 

  Rd: any=[];
 
 
  constructor(private http: HttpClient) { }

  API = 'http://localhost:9196'

  public register(Data:any){
    return this.http.post(this.API + '/register',Data.value);
  }

  public getUserData(userlogData:any){
    return this.http.get(this.API + '/byname/'+ userlogData.username +'/'+ userlogData.password)
  }

  receivedData(userlogData:any){
      this.Rd=userlogData;
  }

  getData(){
    return this.Rd;
  }

  public addBalance(baldata:any,username:string){
    return this.http.put(this.API + '/add/'+username,baldata.value)
  }

  public withdrawMoney(username:string, withdata:any){
    return this.http.put(this.API + '/withdraw/'+username,withdata.value)
  }

  public transferMoney(username:string, trandata:any){
    return this.http.put(this.API + '/transfer/'+username,trandata.value)
  }

  public transferMoneyBetweenAccount(username: string,bdata:any){
    return this.http.put(this.API + '/betweenaccount/'+username,bdata.value)
  }

  public chequerequest(username:string, chequerequestdata:any){
    return this.http.put(this.API + '/chequerequest/'+username,chequerequestdata.value)
    
  }

  public userReset(userresetdata:any){
    return this.http.put(this.API + '/reset',userresetdata.value)
  }


  public getAdmin(){
    return this.http.get(this.API + '/admin')
  }

  public adminreset(adminresetdata:any){
    return this.http.put(this.API + '/admin/reset',adminresetdata.value)
  }

  public getAllAccount() : Observable<IUser[]>{
    return this.http.get<IUser[]>(this.API + '/allaccount')
  }

  public status(username:string, statusdata:any){
    return this.http.put(this.API + '/status/'+username,statusdata.value)
  }

  public loanrequest(username: string, loanrequestdata:any){
      return this.http.put(this.API + '/loanrequest/'+username,loanrequestdata.value)
  }

  public loanByAdmin(username: string, loanrequestdata:any){
      return this.http.put(this.API + '/loanbyadmin/'+username,loanrequestdata.value)
  }

  public chequeByAdmin(username:string, chequerequestdata:any){
      return this.http.put(this.API + '/chequebyadmin/'+username,chequerequestdata.value) 
  }

  
}


