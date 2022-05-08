import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadersComponent } from './components/headers/headers.component';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { BebidasComponent } from './produtos/bebidas/bebidas.component';
import { ComidasComponent } from './produtos/comidas/comidas.component';
import { PorcoesComponent } from './produtos/porcoes/porcoes.component';
import { MiniHeaderComponent } from './components/mini-header/mini-header.component';

import { ContentComponent } from './pages/content/content.component';
import { ItemPaiTesteComponent } from './components/item-pai-teste/item-pai-teste.component';




const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path: 'sobre', component: AboutComponent
  }, 
 
  {
    path: 'pedido', component: PedidosComponent
  },
  {
    path: 'usuario', component: UsersComponent
  },
   {
    path: 'comidas', component: ComidasComponent
  },
  {
    path: 'bebidas', component: BebidasComponent
  },
  {
    path: 'porcoes', component: PorcoesComponent
  },



];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadersComponent,

    AboutComponent,
    HomeComponent,
    CarrouselComponent,   
    UsersComponent,
    PedidosComponent,
    BebidasComponent,
    ComidasComponent,
    PorcoesComponent,
    MiniHeaderComponent,
  
    ContentComponent,
       ItemPaiTesteComponent


   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }






