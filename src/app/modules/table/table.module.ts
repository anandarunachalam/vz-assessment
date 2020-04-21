import {NgModule} from '@angular/core';

import { VzDynamicTableComponent } from './vz-dynamic-table/vz-dynamic-table.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


export const timerRoutes: Routes = [
    {
        path: '',
        component: VzDynamicTableComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild( timerRoutes )
    ],    
    declarations: [
        VzDynamicTableComponent
        
    ]
})
export class TableModule { }
