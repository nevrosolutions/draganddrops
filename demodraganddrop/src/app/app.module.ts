import { MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDragAndDropComponent } from './basic-drag-and-drop/basic-drag-and-drop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReorderinglistComponent } from './reorderinglist/reorderinglist.component';
import { TransferringitembetweenlistComponent } from './transferringitembetweenlist/transferringitembetweenlist.component';
import { TransferringitembetweenlistcustomizedComponent } from './transferringitembetweenlistcustomized/transferringitembetweenlistcustomized.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDragAndDropComponent,
    DashboardComponent,
    ReorderinglistComponent,
    TransferringitembetweenlistComponent,
    TransferringitembetweenlistcustomizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
