import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WrappingComponent } from './wrapping/wrapping.component';

const routes: Routes = [
  {path: 'welcome' , component: WelcomeComponent},
  {path: 'scoring' , component: WrappingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
