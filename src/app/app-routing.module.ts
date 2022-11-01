import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { CrudComponent } from './pages/crud/crud.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'crud', component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
