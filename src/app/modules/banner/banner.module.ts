import {NgModule} from '@angular/core';
import { VzFloatingBannerComponent } from '../banner/vz-floating-banner/vz-floating-banner.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

export const bannerRoutes: Routes = [
    {
        path: '',
        component: VzFloatingBannerComponent,
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
        RouterModule.forChild( bannerRoutes )
    ],
    declarations: [
        VzFloatingBannerComponent
    ]
})
export class BannerModule { }
