import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
    confirmData: any = {
      pickupspot: '',
    destination: '',
    duration: '',
    fare: ''
  };
  constructor(private http: HttpClient) { }

   setConfirmData(pickupspot: string, destination: string, duration: string, fare: string) {
    this.confirmData.pickupspot = pickupspot;
    this.confirmData.destination = destination;
    this.confirmData.duration = duration;
    this.confirmData.fare = fare;
  }

  getConfirmData() {
    return this.confirmData;
  }

}
