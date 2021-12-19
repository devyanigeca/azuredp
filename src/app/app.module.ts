import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebbaComponent } from './debba/debba.component';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule} from '@angular/material';
import {MaterialExampleModule} from '../material.module';


const routes: Routes = [

  { path: 'debba', component: DebbaComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    DebbaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MaterialExampleModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
