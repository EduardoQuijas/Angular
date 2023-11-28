import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,

    
    AuthModule.forRoot({
      domain: 'dev-3cxj38vhyi3j1okx.us.auth0.com',
      clientId: 'GqXuo0xee7uMO3Z3iZyWyPM6hq8cYsIN',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}