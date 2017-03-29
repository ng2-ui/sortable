import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { NguiSortableDirective } from './sortable.directive';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [NguiSortableDirective],
  exports: [ NguiSortableDirective ]
})
export class NguiSortableModule {}

