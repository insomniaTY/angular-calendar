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
  getData() {
    const date = Timestamp.fromDate(new Date(2020, 2, 31))
    return this.fireStore
      .collection<Game>('games', ref =>
        ref.where('releaseDate', '==', date)
      ).get();
  }
}
