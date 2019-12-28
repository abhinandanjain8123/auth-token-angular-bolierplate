import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './login/signin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';


const routes: Routes = [
  { path: '**', component: SigninComponent },
  { path: 'signin/', component: SigninComponent },
  { path: 'register/', component: RegisterComponent }

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
