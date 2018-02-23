import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

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
    BrowserModule,
    TableModule,
    FormsModule,
    Ng2AutoCompleteModule
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
