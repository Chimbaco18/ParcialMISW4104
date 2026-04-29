import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserModule } from './user/users.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  UserModule],
  providers: [
    provideClientHydration(withEventReplay()
  )],
  bootstrap: [AppComponent],
})
export class AppModule {}
