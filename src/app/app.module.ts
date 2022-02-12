import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store/root-store.module';
import { FormErrorMessageService } from './services/form-error-message.service';
import { SessionStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RootStoreModule,
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument()
  ],
  providers: [FormErrorMessageService, SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
