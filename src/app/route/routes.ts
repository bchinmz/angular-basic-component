import { PageAComponent } from "../contents/page-a/page-a.component";
import { PageBComponent } from "../contents/page-b/page-b.component";
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'page-one', component: PageAComponent },
    { path: 'page-two', component: PageBComponent },
    { path: '**', component: PageAComponent }
];