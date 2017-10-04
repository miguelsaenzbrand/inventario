import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from "../config/firebase.config";
import { HeaderComponent } from './header/header.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { DetalleObjetoComponent } from './objetos/detalle-objeto/detalle-objeto.component';
import { EditarObjetoComponent } from './objetos/editar-objeto/editar-objeto.component';
import { ListaObjetoComponent } from './objetos/lista-objeto/lista-objeto.component';
import { StartObjetoComponent } from './objetos/start-objeto/start-objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjetosComponent,
    DetalleObjetoComponent,
    EditarObjetoComponent,
    ListaObjetoComponent,
    StartObjetoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
