import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCardsComponent } from './task-cards/task-cards.component';
import { TaskCardComponent } from './task-cards/task-card/task-card.component';
import { InputsComponent } from './inputs/inputs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskCardsComponent,
    TaskCardComponent,
    InputsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
