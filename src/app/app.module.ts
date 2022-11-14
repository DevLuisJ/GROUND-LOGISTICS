import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignDriverComponent } from './modules/attend_services/attendServices/assign-driver/assign-driver.component';
import { LoadExpenseComponent } from './modules/attend_services/attendServices/load-expense/load-expense.component';
import { LoadServiceComponent } from './modules/attend_services/attendServices/load-service/load-service.component';
import { StatusComponent } from './modules/attend_services/attendServices/status/status.component';
import { HeaderComponent } from './extras/templates/header/header.component';
import { NavbarComponent } from './extras/templates/navbar/navbar.component';
import { FooterComponent } from './extras/templates/footer/footer.component';
import { HomeComponent } from './extras/pages/home/home.component';
import { PageNotFoundComponent } from './extras/pages/page-not-found/page-not-found.component';
import { ContactoComponent } from './extras/pages/contacto/contacto.component';
import { ServiciosComponent } from './extras/pages/servicios/servicios.component';
import{HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AssignDriverComponent,
    LoadExpenseComponent,
    LoadServiceComponent,
    StatusComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactoComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
