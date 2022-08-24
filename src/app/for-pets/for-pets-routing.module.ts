import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InformationPageComponent } from './information-page/information-page.component';

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'registration', component: RegistrationPageComponent},
    {path: 'search', component: InformationPageComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class ForPetsRoutingModule { }