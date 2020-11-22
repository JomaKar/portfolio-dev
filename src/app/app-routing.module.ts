import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';


import { PortfolioHome } from './home-comp/home-comp.component';
import { mySkills } from './skills-comp/skills-comp.component';
import { myStudies } from './studies-comp/studies-comp.component';
import { CvCompComponent } from './cv-comp/cv-comp.component';
import { myRealLife } from './more-me-comp/more-me-comp.component';
import { studyElement } from './studies-comp/studyElementComp/studyElement.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';

const routes: Routes = [
	{ path: '', component: PortfolioHome, pathMatch: 'full' },
	{ path: 'projects', component:  PortfolioHome},
	{ path: 'skills', component:  mySkills},
	{ path: 'studies', component: myStudies},
	{ path: 'studies', component: myStudies, children: [
			{ path: ':id', component: studyElement}
		]
	},
	{ path: 'cv', component: CvCompComponent},
	{ path: 'moreAboutMe', component: myRealLife},
	{ path: 'contact', component: ContactCompComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRouterModule{}