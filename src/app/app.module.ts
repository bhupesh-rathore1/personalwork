import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CustomStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
