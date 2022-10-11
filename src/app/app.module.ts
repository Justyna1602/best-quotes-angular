import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { FromComponent } from './from/from.component';
import { ButtonComponent } from './button/button.component';
import { VotesButtonComponent } from './votes-button/votes-button.component';
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    FromComponent,
    ButtonComponent,
    VotesButtonComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
