import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {

  constructor(private http:HttpClient) { }

  public doregistration(user:any){
    return this.http.post("http://localhost:8084/register",user,{responseType:'text' as 'json'})
  }

  public getusers(){
    return this.http.get("http://localhost:8084/getAllusers")
  }
  public getusersbyemail(email:any){
    return this.http.get("http://localhost:8084/findbyemail/"+email)
  }

  public deleteuser(id:any){
    return this.http.delete("http://localhost:8084/cancel/"+id)
  }

}
