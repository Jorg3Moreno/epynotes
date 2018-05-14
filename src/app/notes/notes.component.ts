import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {NotesModel} from './notes.model';
import {NotesService} from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})
export class NotesComponent {
  notes: NotesModel[];
  constructor(private matDialog: MatDialog, private noteService: NotesService) {
    this.noteService.getNotes().valueChanges()
      .subscribe((notes) => {
        this.notes = notes;
      });
  }

  public openCreateNoteDialog() {
    this.matDialog.open(NotesDialogComponent);
  }

  public editNote(note: NotesModel) {
    this.matDialog.open(NotesDialogComponent, {data: note});
  }

  public deleteNote(note: NotesModel) {
    this.noteService.removeNote(note);
  }
}

@Component({
  selector: 'app-notes-popup',
  templateUrl: './notes-dialog.component.html',
})
export class NotesDialogComponent implements OnInit {
  categories: string[] = ['Job', 'Personal'];
  note: NotesModel;

  constructor(@Inject(MAT_DIALOG_DATA)private data: NotesModel,
              private dialogRef: MatDialogRef<NotesDialogComponent>,
              private noteService: NotesService,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.note = this.data;
    } else {
      this.note = new NotesModel();
    }
  }

  // TODO: improve method, many duplicated code
  public saveNote() {
    console.log(this.note);
    if (this.note.id === undefined) {
      this.note.id = Date.now();
      this.noteService.createNote(this.note)
        .then(() => {
          this.dialogRef.close();
          this.snackBar.open('Note has been created', 'OK', {
            duration: 2000,
          });
        })
        .catch(() => {
          this.snackBar.open('An error has occurred', 'ERROR', {
            duration: 2000,
          });
        });
    } else {
      this.noteService.updateNote(this.note)
        .then(() => {
          this.dialogRef.close();
          this.snackBar.open('Note has been updated', 'OK', {
            duration: 2000,
          });
        })
        .catch(() => {
          this.snackBar.open('An error has occurred', 'ERROR', {
            duration: 2000,
          });
        });
    }
  }
}
