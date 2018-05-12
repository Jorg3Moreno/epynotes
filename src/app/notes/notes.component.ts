import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
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
}

@Component({
  selector: 'app-notes-popup',
  templateUrl: './notes-dialog.component.html',
})
export class NotesDialogComponent implements OnInit {
  categories: string[] = ['Job', 'Personal'];
  note: NotesModel;

  constructor(private dialogRef: MatDialogRef<NotesDialogComponent>,
              private noteService: NotesService,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.note = new NotesModel();
  }

  public saveNote() {
    console.log(this.note);
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
  }
}
