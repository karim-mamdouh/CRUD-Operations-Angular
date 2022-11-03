//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CrudComponent } from './pages/crud/crud.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { CrudFormComponent } from './pages/crud/components/crud-form/crud-form.component';
import { CrudTableComponent } from './pages/crud/components/crud-table/crud-table.component';
import { TableRowComponent } from './pages/crud/components/table-row/table-row.component';
import { LoggedInGuard } from './guards/logged-in.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrudComponent,
    FormInputComponent,
    CrudFormComponent,
    CrudTableComponent,
    TableRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PaginatorModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
