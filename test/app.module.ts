import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2SortableModule }  from 'ng2-ui-sortable';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2SortableModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }