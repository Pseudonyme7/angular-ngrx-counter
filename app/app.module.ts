import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({ 
    count: counterReducer
  })],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}