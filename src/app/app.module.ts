import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserGroupComponent } from './user/user-group/user-group.component';
import { UserDetailsService } from './user-details.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    GroupComponent,
    UserInfoComponent,
    UserGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
