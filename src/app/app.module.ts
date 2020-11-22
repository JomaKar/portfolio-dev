import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';
import { CvCompComponent } from './cv-comp/cv-comp.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { PortfolioHome } from './home-comp/home-comp.component';
import { myRealLife } from './more-me-comp/more-me-comp.component';
import { myProjects } from './project-comp/project-comp.component';
import { projectItem } from './project-comp/projectItm/projectItem.component';
import { mySkills } from './skills-comp/skills-comp.component';
import { skillListByField } from './skills-comp/skillList/skillList.component';
import { skillOfField } from './skills-comp/skillList/skillItm.component';
import { myStudies } from './studies-comp/studies-comp.component';
import { studyElement } from './studies-comp/studyElementComp/studyElement.component';
import { studiesList } from './studies-comp/studiesList/studiesList.component';
import { studyItem } from './studies-comp/studiesList/studyItm.component';
import { GridDirectiveDirective } from './directives/grid-directive.directive';
import { ThreeGridLocatorDirective } from './directives/three-grid-locator.directive';
import { ThreeGridPaddingHelperDirective } from './directives/three-grid-padding-helper.directive';


// Pipes

import { SafePipe } from './pipes/urlSanitizer.pipe';
import { SafeHTML } from './pipes/htmlSanitizer.pipe';

// Icons

import { basicLevelIcon } from './icons/basicLevel.icon';
import { basicMediumLevelIcon } from './icons/basicMediumLevel.icon';
import { mediumLevelIcon } from './icons/mediumLevel.icon';
import { mediumHeightLevelIcon } from './icons/mediumHeightLevel.icon';
import { heightLevelIcon } from './icons/heightLevel.icon';



import {WindowService} from './services/window.service';
import {InfoService} from './services/info-service.service';
import {RegularGridItemHeightService} from './services/regular-grid-item-height.service';
import { sendMessageService } from './services/send-message.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactCompComponent,
    CvCompComponent,
    HeaderCompComponent,
    PortfolioHome,
    myRealLife,
    myProjects,
    projectItem,
    mySkills,
    skillListByField,
    skillOfField,
    myStudies,
    studyElement,
    studiesList,
    studyItem,
    GridDirectiveDirective,
    ThreeGridLocatorDirective,
    ThreeGridPaddingHelperDirective,
    // PIPES
    SafePipe,
    SafeHTML,
    // ICONS
    basicLevelIcon,
    basicMediumLevelIcon,
    mediumLevelIcon,
    mediumHeightLevelIcon,
    heightLevelIcon
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WindowService,
    InfoService,
    RegularGridItemHeightService,
    sendMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
