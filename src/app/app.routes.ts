import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {TestlinkComponent} from "./pages/testlink/testlink.component";

export const routes: Routes = [
  {
    path:'',
    title: 'Home',
    component: HomeComponent,
  },
];
