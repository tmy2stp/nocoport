import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { ProjectMenuComponent } from './project-menu/project-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { GridComponent } from './grid/grid.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingPageComponent,
    HeaderComponent,
    ProjectMenuComponent,
    FooterComponent,
    MainWindowComponent,
    ClickOutsideDirective,
    GridComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
