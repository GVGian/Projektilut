import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiasmademoComponent } from './kiasmademo/kiasmademo.component';
import { VideoComponent } from './video/video.component';
import { AlueetComponent } from './alueet/alueet.component';

const routes: Routes = [
  {
    path: 'video',
    component: VideoComponent
  },
  
  { path: 'kiasmademo', component: KiasmademoComponent },

  { path: 'alueet', component: AlueetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
