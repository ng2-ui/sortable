import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { Ng2SortableDirective } from './ng2-sortable.directive';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [Ng2SortableDirective],
  exports: [ Ng2SortableDirective ]
})
export class Ng2SortableModule {}

