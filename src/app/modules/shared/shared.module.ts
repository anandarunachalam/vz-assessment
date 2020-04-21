import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'; 

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatSelectModule,
        MatGridListModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule
        
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatSelectModule,
        MatGridListModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule
        
    ]
})
export class SharedModule {
}
