import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { VoterComponent } from './voter/voter.component';
import { UserComponent } from './user/user.component';

import { TxtSummaryPipe } from './txt-summary/txt-summary.pipe';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TxtSummaryPipe,
    LikeComponent,
    VoterComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }