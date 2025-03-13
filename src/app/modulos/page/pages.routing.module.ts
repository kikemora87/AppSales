import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { DashvendComponent } from './components/dashvend/dashvend.component';
import { MetaComponent } from './components/meta/meta.component';

const routes: Routes = [
  {
    path: "dasboardGen",
    component: DasboardComponent
  },
  {
    path: "dasboardVend",
    component: DashvendComponent
  },
  {
    path: "meta",
    component: MetaComponent
  },
  {
    path: '**',
    redirectTo: 'dasboardGen'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }