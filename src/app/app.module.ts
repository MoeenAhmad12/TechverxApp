import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { TodaysMenuComponent } from './todays-menu/todays-menu.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInComponent,
    RegisterComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    TodaysMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
