import { makeAutoObservable } from "mobx";

export default class BookingStore{
    constructor(){
        this._bookings = [];
        this._orders = [];
        makeAutoObservable(this);
    }

    setBookings(bookings){
        this._bookings = bookings;
    }

    setOrders(orders){
        this._orders = orders;
    }


    get bookings(){
        return this._bookings;
    }

    get orders(){
        return this._orders;
    }

}
