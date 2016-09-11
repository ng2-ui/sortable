import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import { Ng2SortableDirective } from './ng2-sortable.directive';

export { Ng2SortableDirective };

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [Ng2SortableDirective],
  exports: [ Ng2SortableDirective ]
})
export class Ng2SortableModule {}

