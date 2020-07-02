import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './components/shell/shell.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {FormsModule} from '@angular/forms';
import { StructureComponent } from './components/structure/structure.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FilesComponent } from './components/files/files.component';
import { SkillsComponent } from './components/skills/skills.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LanguagesComponent } from './components/languages/languages.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ExperienceComponent } from './components/experience/experience.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CoverComponent } from './components/cover/cover.component';
import { EducationComponent } from './components/education/education.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {AboutDialogComponent, TopbarComponent} from './components/topbar/topbar.component';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    StructureComponent,
    FilesComponent,
    SkillsComponent,
    LanguagesComponent,
    CertificationsComponent,
    ExperienceComponent,
    CoverComponent,
    EducationComponent,
    TopbarComponent,
    AboutDialogComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CdkTreeModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatChipsModule,
        MatMenuModule,
        MatListModule,
        MatDialogModule
    ],
  providers: [],
  entryComponents: [
    AboutDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
