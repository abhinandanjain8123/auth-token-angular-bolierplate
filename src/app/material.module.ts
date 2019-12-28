import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule
} from '@angular/material';

const modules = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class MaterialModule { }
