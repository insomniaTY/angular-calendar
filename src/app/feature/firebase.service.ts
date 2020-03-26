import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Game } from './games.model';
import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  data: Observable<Game>;

  constructor(
    private fireStore: AngularFirestore) {
  }
  getData(date: Date) {
    const timestamp = Timestamp.fromDate(date);
    console.log(timestamp);
    return this.fireStore
      .collection<Game>('games'
        , ref =>
        ref.where('releaseDate', '==', timestamp)
      ).get();
  }
}
