import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private pickupSpot: string;
  private destination: string;
  private duration: number;

  setPickupSpot(value: string) {
    this.pickupSpot = value;
  }

  setDestination(value: string) {
    this.destination = value;
  }

  setDuration(value: string) {
    this.duration = parseInt(value, 10);
  }

  getPickupSpot() {
    return this.pickupSpot;
  }

  getDestination() {
    return this.destination;
  }

  getFare() {
    return this.duration * 10;
  }
}