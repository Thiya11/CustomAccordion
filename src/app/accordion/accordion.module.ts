import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogglePipe } from './pipes/toggle.pipe';
import { AccordionComponent } from './accordion.component';
import { AccordionContent } from './directives/accordion-content.directive';
import { AccordionTitle } from './directives/accordion-title.directive';
import { AccordionHeader } from './directives/accordion-header.directive';
import { AccordionItem } from './directives/accordion-item.directive';



@NgModule({
  declarations: [
    TogglePipe,
    AccordionComponent,
    AccordionContent,
    AccordionTitle,
    AccordionHeader,
    AccordionItem
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TogglePipe,
    AccordionComponent,
    AccordionHeader,
    AccordionTitle,
    AccordionItem,
    AccordionContent
  ]
})
export class AccordionModule { }
