import { Component, OnInit  } from '@angular/core';
import { BookingService } from '../booking.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface ConfirmData {
  pickupspot: string;
  duration: number;
  destination: string;
  fare: number;
}
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css',
  template:  `
 <form >
  <div>
    <label>Pickup Spot: <input type="text"> {{ confirmData.pickupspot }}</label>
    <label>Duration: <input type="text"> {{ confirmData.duration }}</label>
    <label>Destination: <input type="text"> {{ confirmData.destination }}</label>
    <label>Fare: <input type="text"> {{ confirmData.fare }}</label>
    <button (click)="booked()" type="button">Confirm</button>
  </div>
</form>
`
  
})
export class ConfirmComponent implements OnInit {
 
  confirmData: ConfirmData[];
  constructor ( private route: ActivatedRoute,  private service: BookingService, private bookingService: BookingService, private http: HttpClient){}
  
  
  message1:string;
  ngOnInit(): void {
    
  }

  getData(){
    this.http.get('http://localhost:8084/api/confirm', {
      params: {
        pickupspot: 'string',
        destination: 'string',
        duration: 'number'
      }
    }).subscribe(response => {
      this.confirmData = response as ConfirmData[];;
    });
  }
  booked(){

    {{this.message1="Booked Successfully"}}
  }
  }
  
  

