import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Data } from './data.model';

import { HttpClient } from '@angular/common/http';
import {Observable, pipe} from 'rxjs';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  data: Observable<Data>;
  constructor(
    private firestore: AngularFirestore) {}

 getData() {
    return this.firestore.collection('games').snapshotChanges();
 }
}
