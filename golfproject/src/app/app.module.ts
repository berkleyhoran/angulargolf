import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GolfCardComponent } from './golf-card/golf-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { namefixer } from './numberpipe';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { GolfinfoComponent } from './golfinfo/golfinfo.component';
import { ScoreComponent } from './score/score.component';
import { TotalComponent } from './total/total.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WrappingComponent } from './wrapping/wrapping.component';

@NgModule({
  declarations: [
    AppComponent,
    GolfCardComponent,
    GolfinfoComponent,
    ScoreComponent,
    TotalComponent,
    namefixer,
    WelcomeComponent,
    WrappingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
