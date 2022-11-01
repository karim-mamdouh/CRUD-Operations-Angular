import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CrudComponent } from './pages/crud/crud.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { CrudFormComponent } from './pages/components/crud-form/crud-form.component';
import { CrudTableComponent } from './pages/components/crud-table/crud-table.component';
import { TableRowComponent } from './pages/components/table-row/table-row.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
