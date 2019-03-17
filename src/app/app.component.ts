import { Component } from '@angular/core';
import { IHotel } from './interfaces/hotel.interface';
import { hotels, stars } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'hw2';
  public hotels: IHotel[] = hotels;
  public searchText: string;
  public currentHotel: IHotel = this.hotels[0];
  public displayStars: number = 0;
  public activeStar: number;
  public stars: string[] = stars;
  public favHotels: IHotel[] = [];

  public selectHotel(id: number): void {
    this.currentHotel = this.hotels.find((el: IHotel) => el.id === id);
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public clickStars(index: number): void {
    this.activeStar = index;
    index > 0 ? this.displayStars = index + 1 : this.displayStars = 0;
  }

  public isActive(index: number): boolean {
    return this.activeStar === index;
  }

  public addHotelToFav(id: number): void {
    this.favHotels.push(this.hotels.find((el: IHotel) => el.id === id));
  }

  public removeHotelFromFav(id: number): void {
    this.favHotels = this.favHotels.filter((el: IHotel) => el.id !== id);
  }

}
