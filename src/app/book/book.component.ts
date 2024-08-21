import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { HttpClient } from '@angular/common/http';
import { confirmData } from '../confirmdata';
//import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
  template:''
 
})

export class BookComponent implements OnInit {
  message1: any;

  pickupSpot: string;
  destination: string;
  duration: number;
  fare: number;
 
  constructor (private router: Router, private service: BookingService,private bookingService: BookingService, private http: HttpClient ){}  
  ngOnInit(): void{

  }


  booked(){

    {{this.message1="Booked Successfully"}}
  }

}
