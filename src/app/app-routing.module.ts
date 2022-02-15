import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ChannelComponent } from './components/channel/channel.component';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login/:channelId', component: LoginComponent },
  { path: 'channel/:channelId', component: ChannelComponent },
  { path: 'admin/:channelId', component: AdminComponent },
  { path: 'app-four-zero-four', component: FourZeroFourComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
