import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatListModule, MatTabsModule,
  MatInputModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatProgressBarModule,
  MatToolbarModule, MatExpansionModule, MatStepperModule, MatMenuModule} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent} from './login/login.component';
import { HomeComponent} from './home/home.component';
import 'hammerjs';
import {HomeModule} from './home/home.module';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ApercuComponent } from './apercu/apercu.component';
import { SvgTextComponent } from './apercu/svg-text/svg-text.component';
import { UploadFormComponent } from './administrateur/upload-form/upload-form.component';
import { FileDropDirective } from './administrateur/file-drop.directive';
import { AnnotateurService} from './shared/annotateur.service';
import { ProjetService} from './shared/projet.service';
import { FichierComponent } from './administrateur/fichier/fichier.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    AdministrateurComponent,
    ApercuComponent,
    SvgTextComponent,
    UploadFormComponent,
    FileDropDirective,
    FichierComponent,

  ],
  imports: [
    AppRoutingModule, LoginRoutingModule, HomeModule,
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule,
    MatCardModule, MatGridListModule, MatInputModule, MatListModule, MatAutocompleteModule, MatDatepickerModule, MatProgressBarModule,
    FormsModule,  ReactiveFormsModule, MatExpansionModule, MatStepperModule, MatMenuModule,
    MatNativeDateModule, MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, HttpModule, // imports firebase/auth, only needed for auth features
    AngularFirestoreModule // imports firebase/firestore, only needed for database features
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [ AnnotateurService, ProjetService ]
})
export class AppModule {
}
