import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryparamChildComponent } from './queryparam-child/queryparam-child.component';
import { QueryparamParentComponent } from './queryparam-parent/queryparam-parent.component';

const routes: Routes = [{
  path: 'queryparent', component : QueryparamParentComponent,
  children:[{
    path :'querychild', component : QueryparamChildComponent
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Practice1RoutingModule { }
