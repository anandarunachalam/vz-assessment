import {NgModule} from '@angular/core';
import {ProductsPage} from '../products/pages/products/products.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import { SortPipe } from './pipes/vz-product-sort.pipe';
import { VzProductListComponent } from './components/vz-product-list/vz-product-list.component';
import { RmsShowService } from './services/vz-product-list.service';

export const productsRoutes: Routes = [
    {
        path: 'pro',
        component: ProductsPage,
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
        RouterModule.forChild( productsRoutes )
    ],
    providers: [RmsShowService],
    declarations: [
        ProductsPage,
        VzProductListComponent,
        SortPipe
    ]
})
export class ProductsModule { }
