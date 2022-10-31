import { NgModule } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { AddnewcustomerComponent } from './addnewcustomer/addnewcustomer.component';
import { AngularLifeCycleComponent } from './angular-life-cycle/angular-life-cycle.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CustomercompoundComponent } from './customercompound/customercompound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { TriangleComponent } from './triangle/triangle.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'addnewcustomer', component: AddnewcustomerComponent },

  {
    path: 'dashboard', component: DashboardComponent,

    children: [{ path: 'calculator', component: CalculatorComponent },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'event-binding', component: EventBindingComponent },
    { path: 'two-way-binding', component: TwoWayBindingComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'rectangle', component: RectangleComponent },
    { path: 'triangle', component: TriangleComponent },
    { path: 'square', component: SquareComponent },
    { path: 'power', component: PowerComponent },
    { path: 'event-registration', component: EventregistrationComponent },
    { path: 'employee-registration', component: EmployeeregistrationComponent },
    { path: 'cart', component: CartComponent },
    { path: 'customercompound', component: CustomercompoundComponent},
    {path:'pipes',component:PipesComponent},
    {path:'cars',component:CarsComponent},
    {path:'star',component:StarComponent},
    {path:'gpay',component:GpayComponent},
    {path:'bank',component:BankComponent},
    {path:'angular-life-cycle',component:AngularLifeCycleComponent},
    {path:'mail',component:MailComponent},
    ]
    
    



  },

  { path: '', component: LoginComponent },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
