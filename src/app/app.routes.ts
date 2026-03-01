import { Routes } from '@angular/router';
import { Dashboard } from './componenti/dashboard/dashboard';
import { Login } from './componenti/login/login';
import { Registrazione } from './componenti/registrazione/registrazione';
import { Pagina1 } from './componenti/pagina1/pagina1';
import { Pagina2 } from './componenti/pagina2/pagina2';
import { Pagina3 } from './componenti/pagina3/pagina3';
import { authGuard } from './service/auth/auth-guard';

export const routes: Routes = [
    {path: '', component: Dashboard, canActivate: [authGuard],children: [
        {path: '', redirectTo: 'pagina1', pathMatch: 'full'},
        {path: 'pagina1', component: Pagina1},
        {path: 'pagina2', component: Pagina2},
        {path: 'pagina3', component: Pagina3 },
        {path: 'login', component: Login },
        {path:'registrazione', component: Registrazione},
    ]},
    
];
