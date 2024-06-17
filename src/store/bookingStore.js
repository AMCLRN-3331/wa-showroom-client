import { makeAutoObservable } from "mobx";

export default class BookingStore{
    constructor(){
        this._bookings = [];
        makeAutoObservable(this);
    }

    setBookings(bookings){
        this._bookings = bookings;
    }


    get bookings(){
        return this._bookings;
    }

}
