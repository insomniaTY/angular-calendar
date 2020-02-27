import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Calendar} from '@fullcalendar/core/Calendar';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPath = '/days';
  CalendarRef: AngularFireList<Calendar> = null;

  constructor(private db: AngularFireDatabase) {
    this.CalendarRef = db.list(this.dbPath);
  }

  getValue() {
    return this.CalendarRef = this.db.list(this.dbPath);
  }
}
