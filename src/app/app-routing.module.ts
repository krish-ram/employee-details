import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { GroupComponent } from './group/group.component';
import { GroupSearchComponent } from './group-search/group-search.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, },
    { path: '', redirectTo: '/user-search', pathMatch: 'full', canActivate: [AuthGuard] },
    {
        path: 'user-search', component: UserSearchComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            { path: 'user/:email', component: UserComponent }
        ]
    },
    {
        path: 'group-search', component: GroupSearchComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            { path: 'group/:name', component: GroupComponent }
        ]
    },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
