import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {ShellComponent} from "./components/shell/shell.component";
import {StructureComponent} from "./components/structure/structure.component";
import {FilesComponent} from "./components/files/files.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {LanguagesComponent} from "./components/languages/languages.component";
import {CertificationsComponent} from "./components/certifications/certifications.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {CoverComponent} from "./components/cover/cover.component";
import {EducationComponent} from "./components/education/education.component";
import {AboutDialogComponent, TopbarComponent} from "./components/topbar/topbar.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDivider} from "@angular/material/divider";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {CdkTree, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle} from "@angular/cdk/tree";
import {MatIcon} from "@angular/material/icon";
import {MatCard} from "@angular/material/card";
import {
  MatAccordion, MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatChip} from "@angular/material/chips";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatList, MatListItem} from "@angular/material/list";

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
    RouterOutlet,
    BrowserAnimationsModule,
    MatMenu,
    MatDivider,
    MatMenuItem,
    MatToolbar,
    MatMenuTrigger,
    MatButton,
    FormsModule,
    CdkTree,
    CdkTreeNode,
    MatIcon,
    MatIconButton,
    CdkTreeNodeToggle,
    CdkTreeNodePadding,
    CdkTreeNodeDef,
    MatCard,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatChip,
    MatAnchor,
    MatProgressBar,
    MatExpansionModule,
    MatList,
    MatListItem
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
