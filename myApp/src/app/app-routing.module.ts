import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiasmademoComponent } from './kiasmademo/kiasmademo.component';
import { VideoComponent } from './video/video.component';
import { AlueetComponent } from './alueet/alueet.component';
import { HomehistoryComponent } from './homehistory/homehistory.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  {
    path: 'video',
    component: VideoComponent
  },
  
  { path: 'kiasmademo', component: KiasmademoComponent },

  { path: 'alueet', component: AlueetComponent },

  { path: 'homehistory', component: HomehistoryComponent },

  { path: 'footer', component: FooterComponent },

  { path: 'gallery', component: GalleryComponent },

  { path: 'restaurants', component: RestaurantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
