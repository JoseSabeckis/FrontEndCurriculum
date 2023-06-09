import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { LogoComponent } from './components/logo/logo.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardsoftComponent } from './components/hardsoft/hardsoft.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor/interceptor.service';
import { CommonModule } from '@angular/common';
import { UpdExperienciaComponent } from './components/experiencia/modify/upd-experiencia/upd-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/editar/edit-experiencia/edit-experiencia.component';
import { RouterModule } from '@angular/router';
import { NuevaEducacionComponent } from './components/educacion/new-edu/nueva-educacion/nueva-educacion.component';
import { EditEducacionComponent } from './components/educacion/editar/edit-educacion/edit-educacion.component';
import { NewHardsoftComponent } from './components/hardsoft/new-hardsoft/new-hardsoft/new-hardsoft.component';
import { EditHardComponent } from './components/hardsoft/edit-hard/edit-hard/edit-hard.component';
import { EditAcercaComponent } from './components/acerca-de/edit/edit-acerca/edit-acerca.component';
import { EditPersonaComponent } from './components/persona/edit-persona/edit-persona.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialComponent,
    LogoComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardsoftComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UpdExperienciaComponent,
    EditExperienciaComponent,
    NuevaEducacionComponent,
    EditEducacionComponent,
    NewHardsoftComponent,
    EditHardComponent,
    EditAcercaComponent,
    EditPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
