import { Injectable } from '@angular/core';
import { Database, ref, set, get, child } from '@angular/fire/database';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealDBService {

  constructor(private db: Database ) {}

  addItem(key: string, item: any): Observable<void> {
    const itemsRef = ref(this.db, `items/${key}`);
    return from(set(itemsRef, item));
  }

  getItems(): Observable<any> {
    const dbRef = ref(this.db);
    return from(get(child(dbRef, 'items')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
        return snapshot.val();
      } else {
        return [];
      }
    }));
  }
}
