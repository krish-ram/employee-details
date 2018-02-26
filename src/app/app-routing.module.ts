import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { GroupComponent } from './group/group.component';
import { GroupSearchComponent } from './group-search/group-search.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/user-search', pathMatch: 'full' },
    {
        path: 'user-search', component: UserSearchComponent,
        children: [
            { path: 'user/:email', component: UserComponent }
        ]
    },
    {
        path: 'group-search', component: GroupSearchComponent,
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
