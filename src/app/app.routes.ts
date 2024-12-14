import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { GuestHangarComponent } from './guest-hangar/guest-hangar.component';
import { StarshipsComponent } from './starships/starships.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'starships', component: StarshipsComponent},
    {path: 'guest', component: GuestHangarComponent},
    //{path: '', component: WeatherComponent, pathMatch: 'full'}
];
