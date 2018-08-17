import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  declarations: [Page1Component, Page2Component]
})
export class Module2Module { }
