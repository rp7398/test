import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about-us/about-us';
import { ServiceComponent } from './pages/service/service';
import { ProcessComponent } from './pages/process/process';
import { IndustriesComponent } from './pages/industries/industries';
import { ContactComponent } from './pages/contact/contact';
import { ItSupport } from './pages/service/it-support/it-support';
import { CloudComponent } from './pages/service/cloud/cloud';
import { Website } from './pages/service/website/website';
import { Cybersecurity } from './pages/service/cybersecurity/cybersecurity';
import { Networking } from './pages/service/networking/networking';
import { WeathersComponent } from './home/weathers/weathers';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service/it-support', component: ItSupport},
  { path: 'service/cloud', component: CloudComponent },
  { path: 'service/website', component: Website },
  { path: 'service/cybersecurity', component: Cybersecurity },
  { path: 'service/networking', component: Networking },
  { path: 'weathers', component: WeathersComponent }
];
