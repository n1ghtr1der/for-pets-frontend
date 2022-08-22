import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class ForPetsRoutingModule { }