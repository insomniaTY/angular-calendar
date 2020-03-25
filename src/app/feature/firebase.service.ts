import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';

import { Game } from './games.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  data: Observable<Game>;

  constructor(
    private firestore: AngularFirestore) {
  }

 getData() {
   return this.firestore.collection<Game>('games', ref => ref.where('date', '==', '20-03-2020')).get();

  }
}
