import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
//import { SearchdeleteComponent } from './searchdelete/searchdelete.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { ConfirmComponent } from './confirm/confirm.component';
//import { BookingService } from './booking.service';

const routes:Routes=[

//{path:"",redirectTo:"register",pathMatch:"full"},
{path:"register",component:RegistrationComponent},
{path:"login",component:LoginComponent},
{path:"book",component:BookComponent},
{path:"confirm",component:ConfirmComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    BookComponent,
    ConfirmComponent,
  
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)],
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

