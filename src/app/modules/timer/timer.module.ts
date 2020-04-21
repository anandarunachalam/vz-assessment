import {NgModule} from '@angular/core';
import { VzCountTimerOneComponent } from './vz-count-timer-one/vz-count-timer-one.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


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
        VzCountTimerOneComponent
        
    ]
})
export class TimerModule { }
