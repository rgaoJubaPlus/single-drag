import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import {PortalModule} from '@angular/cdk/portal';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { PlaceComponent } from './place/place.component';
import { SearchComponent } from './search/search.component';
import {CoreModule} from './core/core.module'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,PortalModule,BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, CoreModule,MatCheckboxModule, MatRadioModule, DragDropModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
