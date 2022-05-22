import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { FormsModule } from '@angular/forms';
import {LocalStorageModule} from 'angular-2-local-storage';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LocalStorageModule.forRoot({
      storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
