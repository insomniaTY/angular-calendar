import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Game } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  data: Observable<Game>;

  constructor(
    private firestore: AngularFirestore) {
  }

  getData() {
    return this.firestore.collection<Game>('games').get();
  }
}
