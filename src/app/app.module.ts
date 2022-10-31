import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TriangleComponent } from './triangle/triangle.component';
import { SquareComponent } from './square/square.component';
import { PowerComponent } from './power/power.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { CartComponent } from './cart/cart.component';
import { CustomercompoundComponent } from './customercompound/customercompound.component';
import { AddnewcustomerComponent } from './addnewcustomer/addnewcustomer.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { PercentagePipe } from './percentage.pipe';
import { CarsComponent } from './cars/cars.component';
import { StarComponent } from './star/star.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { AngularLifeCycleComponent } from './angular-life-cycle/angular-life-cycle.component';
import {HttpClientModule} from '@angular/common/http';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    TriangleComponent,
    SquareComponent,
    PowerComponent,
    EventregistrationComponent,
    EmployeeregistrationComponent,
    CartComponent,
    CustomercompoundComponent,
    AddnewcustomerComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    PercentagePipe,
    CarsComponent,
    StarComponent,
    GpayComponent,
    BankComponent,
    AngularLifeCycleComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
