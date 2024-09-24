import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', component: LandingPageComponent},
  { path: 'project/:id', component: MainWindowComponent },
  { path: 'grid', component: GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
