import { Routes } from '@angular/router';
import { Dashboard } from './componenti/dashboard/dashboard';
import { Login } from './componenti/login/login';
import { Registrazione } from './componenti/registrazione/registrazione';

export const routes: Routes = [
    {path:'', component: Dashboard},
    {path:'login', component: Login},
    {path:'registrazione', component: Registrazione},
];
