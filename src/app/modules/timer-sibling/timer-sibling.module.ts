import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import { VzsCountDownBlockComponent } from './components/vzs-count-down-block/vzs-count-down-block.component';
import { VzsCountDownFormComponent } from './components/vzs-count-down-form/vzs-count-down-form.component';
import { VzsCountDownStatusComponent } from './components/vzs-count-down-status/vzs-count-down-status.component';
import { VzsCountDownTotalComponent } from './components/vzs-count-down-total/vzs-count-down-total.component';
import { VzCountTimerTwoComponent } from './container/vz-count-timer-two/vz-count-timer-two.component';

export const timerRoutes: Routes = [
    {
        path: '',
        component: VzCountTimerTwoComponent,
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
        VzsCountDownBlockComponent,
        VzsCountDownFormComponent,
        VzsCountDownStatusComponent,
        VzsCountDownTotalComponent,
        VzCountTimerTwoComponent
        
    ]
})
export class TimerSiblingModule { }
