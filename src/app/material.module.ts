import {NgModule} from '@angular/core';

import {
  MatCardModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}