import {Routes} from '@angular/router';

import { ItemComponent } from './item/item.component';
import { InfoComponent } from './pages/info/info.component';
import { TargetComponent } from './pages/target/target.component';
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
    {
        path: 'source',
        title: 'Source Page',

        component: InfoComponent
    },
    {
        path: 'target',
        title: 'Target Page',

        component: TargetComponent
    }
];