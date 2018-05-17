import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';

@Injectable()
export class NotesService {

  constructor(private ngfireDB: AngularFireDatabase) {
  }

  public getNotes() {
    return this.ngfireDB.list('/notes/');
  }

  public getNote(id: number) {
    return this.ngfireDB.object(`/notes/${id}`);
  }

  public createNote(note) {
    return this.ngfireDB.database.ref(`/notes/${note.id}`).set(note);
  }

  public updateNote(note) {
    return this.ngfireDB.database.ref(`/notes/${note.id}`).set(note);
  }

  public removeNote(note) {
    return this.ngfireDB.database.ref(`/notes/${note.id}`).remove();
  }
}
