import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserGroupComponent } from './user/user-group/user-group.component';
import { UserDetailsService } from './user-details.service';
import { UserSearchComponent } from './user-search/user-search.component';
import { GroupComponent } from './group/group.component';
import { GroupSearchComponent } from './group-search/group-search.component';
import { GroupDetailsService } from './group-details.service';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    GroupComponent,
    UserInfoComponent,
    UserGroupComponent,
    ErrorPageComponent,
    UserSearchComponent,
    GroupSearchComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    FormsModule,
    Ng2AutoCompleteModule,
    AppRoutingModule,
    AccordionModule,
    FieldsetModule,
    BrowserAnimationsModule
  ],
  providers: [UserDetailsService, GroupDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
