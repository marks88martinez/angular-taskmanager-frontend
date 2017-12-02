//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//componet imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import{ TaskServiceComponent } from "./navbar/task-search/task-search.component";

//service imports
import { TaskService } from './tasks/shared/task.service';

//module imports
import{AppRoutingModule}from'./app-routing.module';

//in module web api
import{ InMemoryWebApiModule }from"angular-in-memory-web-api";
import{InMemoryTaskDataService}from "./in-memory-task-data.sevice";


//rxjs operator
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";


//rxjs extensions
import "rxjs/add/Observable/of";
import 'rxjs/add/Observable/throw';
// jquery plugin
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
