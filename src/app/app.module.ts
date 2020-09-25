import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'map', component: MapComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MapComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
