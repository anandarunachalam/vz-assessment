import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '../landing/pages/landing/landing.page';
import {CommonModule} from '@angular/common';


export const appRoutes: Routes = [
    {
        path: 'landing',
        loadChildren: () => import('../../modules/landing/landing.module').then(m => m.LandingModule)        
    },
    {
        path: 'banner',
        loadChildren: () => import('../banner/banner.module').then(m => m.BannerModule)
        
    },
    {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
        
    },
    {
        path: 'table',
        loadChildren: () => import('../table/table.module').then(m => m.TableModule)
        
    },
    {
        path: 'timer',
        loadChildren: () => import('../timer/timer.module').then(m => m.TimerModule)
        
    },
    {
        path: 'timer-sibling',
        loadChildren: () => import('../timer-sibling/timer-sibling.module').then(m => m.TimerSiblingModule)
        
    },    
    { path: '**', redirectTo: 'landing' }
];

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule,
        HttpClientModule
    ],
    providers: [
    ]
})
export class CoreModule {
}