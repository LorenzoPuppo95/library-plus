import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AddBookComponent } from './components/add-book/add-book.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'homepage'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'detail'
    },
    {
        path: 'add-book',
        component: AddBookComponent,
        title: 'add-book'
    }
];