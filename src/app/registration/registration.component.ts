import { Component, OnInit } from '@angular/core';
import { UserRegistrationServiceService } from '../user-registration-service.service';
import { User } from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user:User=new User();
message:any
  constructor(private service:UserRegistrationServiceService) { }

  ngOnInit(): void {
  }

  registerNow(){
    let respo=this.service.doregistration(this.user);
    respo.subscribe((data:any)=>this.message=data);
  }

}
