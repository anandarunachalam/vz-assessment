import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import { VzCountTimerOneComponent } from './vz-count-timer-one/vz-count-timer-one.component';
import { VzCountDownBlockComponent } from './components/vz-count-down-block/vz-count-down-block.component';
import { VzCountDownFormComponent } from './components/vz-count-down-form/vz-count-down-form.component';
import { VzCountDownStatusComponent } from './components/vz-count-down-status/vz-count-down-status.component';
import { VzCountDownTotalComponent } from './components/vz-count-down-total/vz-count-down-total.component';

export const timerRoutes: Routes = [
    {
        path: '',
        component: VzCountTimerOneComponent,
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
        VzCountTimerOneComponent,
        VzCountDownBlockComponent,
        VzCountDownFormComponent,
        VzCountDownStatusComponent,
        VzCountDownTotalComponent
        
    ]
})
export class TimerModule { }
