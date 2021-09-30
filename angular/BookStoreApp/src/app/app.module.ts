import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
import { UserService } from './services/userauth/user.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { BookService } from './services/bookdata/book.service';
import { CartService } from './services/cartdata/cart.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    CoreModule,
    HomeModule,
   SharedModule,
   FeatureModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  RouterModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44321"],
        disallowedRoutes: [],
      },
    }),
    NgbModule,
    
  ],
  providers: [UserService,BookService,AuthGuard,CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
