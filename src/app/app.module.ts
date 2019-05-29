import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DominioListaComponent } from './dominio-lista/dominio-lista.component';
import { DominioService} from './dominio.service';
@NgModule({
  declarations: [
    AppComponent,
    DominioListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DominioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
