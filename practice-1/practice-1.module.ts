import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Practice1RoutingModule } from './practice-1-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsPracticeComponent } from './forms-practice/forms-practice.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CusHighlighterDirective } from '../directve/cus-highlighter.directive';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { LifecyleComponent } from './lifecyle/lifecyle.component';
import { LifecylechildComponent } from './lifecylechild/lifecylechild.component';
import { QueryparamParentComponent } from './queryparam-parent/queryparam-parent.component';
import { QueryparamChildComponent } from './queryparam-child/queryparam-child.component';
import { ObervableComponent } from './obervable/obervable.component';
import { CrudComponent } from './crud/crud.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    FormsPracticeComponent,
    ReactiveForm1Component,
    FormBuilderComponent,
     CusHighlighterDirective,
     Parent1Component,
     Child1Component,
     LifecyleComponent,
     LifecylechildComponent,
     QueryparamParentComponent,
     QueryparamChildComponent,
     ObervableComponent,
     CrudComponent

  ],
  imports: [
    CommonModule,
    Practice1RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormsPracticeComponent, ReactiveForm1Component, FormBuilderComponent,DataBindingComponent,
  Parent1Component,
  Child1Component,
  LifecyleComponent,
  ObervableComponent,
  CrudComponent
  ]
})
export class Practice1Module { }
