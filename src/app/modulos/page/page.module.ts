import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './pages.routing.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class PageModule { }
