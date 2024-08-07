import {Routes} from '@angular/router';

import { ItemComponent } from './item/item.component';

export const routes : Routes =[
    {
        path: '',
        title: 'Home Page',
        component: ItemComponent,
    },
    {
        path: 'item',
        title: 'Item Page',
        //component: 'ItemComponent',
        component: ItemComponent,
    },
];