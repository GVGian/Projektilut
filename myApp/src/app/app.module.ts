import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoComponent } from './video/video.component';
import { NavigationComponent } from './navigation/navigation.component';
import { KiasmademoComponent } from './kiasmademo/kiasmademo.component';
import { AlueetComponent } from './alueet/alueet.component';
import { HomehistoryComponent } from './homehistory/homehistory.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    NavigationComponent,
    KiasmademoComponent,
    AlueetComponent,
    HomehistoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
