import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss']
})
export class FavoritComponent {

  @Input()
  public favHotels: IHotel[];

  @Output()
  public removeHotelFav: EventEmitter<number> = new EventEmitter();

  public removeHotel(id: number): void {
    this.removeHotelFav.emit(id);
  }
}
