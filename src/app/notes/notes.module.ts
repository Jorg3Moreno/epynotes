import {NgModule} from '@angular/core';
import {NotesComponent, NotesDialogComponent} from './notes.component';
import {NotesService} from './notes.service';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule, MatSnackBarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NotesComponent,
    NotesDialogComponent
  ],
  entryComponents: [
    NotesComponent,
    NotesDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    NotesService
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
