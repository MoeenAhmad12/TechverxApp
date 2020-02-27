import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PlatterComponent } from './platter/platter.component';
import { SaladComponent } from './salad/salad.component';
import { DealsComponent } from './deals/deals.component';
import { SixInchComponent } from './six-inch/six-inch.component';
import { FootLongComponent } from './foot-long/foot-long.component';
import { ComboComponent } from './combo/combo.component';


const routes: Routes = [
  
  {path:'register/login',component:LogInComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'platter',component:PlatterComponent},
  {path:'salad',component:SaladComponent},
  {path:'deals',component:DealsComponent},
  {path:'sixinch',component:SixInchComponent},
  {path:'footlong',component:FootLongComponent},
  {path:'combo',component:ComboComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
