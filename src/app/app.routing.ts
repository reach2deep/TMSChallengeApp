import { AuthGuard } from './core/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
    { path: '', component: HomePageComponent, canActivate: [AuthGuard]  },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);