import { Injectable } from '@angular/core';

import { Project } from '../project-comp/project.class';
import { myProjects } from './info/projects.info';


import { SkillField, personalSkill } from '../skills-comp/skills.class';
import { Skills, skillsTypes } from './info/skills.info';


import { StudyField, study } from '../studies-comp/studies.class';
import { studiesAreas, studiesList } from './info/studies.info';
import { basicPersonalInfo, advancedPersonalInfo } from './info/personal.info';
import { cvInfo } from './info/cv.info';
import { mediaNet, mails } from './info/contact.info';


@Injectable()
export class InfoService {
	private basicMe: Object = basicPersonalInfo;
	private advancedMe: Object = advancedPersonalInfo;


	private projecstInfo: Array<Project> = myProjects;

	private skillsFields: Array<SkillField> = skillsTypes;
	private skillCollection: Array<personalSkill> = Skills;

	private learningAreas: Array<StudyField> = studiesAreas;
	private studiesDone: Array<study> = studiesList;


	private cv: Array<Object> = cvInfo;


	private mediaContactAdresseses: Array<Object> = mediaNet;
	private myMails: Array<Object> = mails;

	constructor(){}

	getProjectsInfo(){
		return this.projecstInfo;
	}


	getBasicPersonalInfo(){
		return this.basicMe;
	}


	getAdvancedPersonalInfo(){
		return this.advancedMe;
	}


	// SKILLS


	getSkillsCategories(){
		return this.skillsFields;
	}


	getSkillsById(catId){
		return this.skillCollection.filter((skill) => skill.skillField === catId);
	}	

	getAllSkills(){
		return this.skillCollection;
	}


	// STUDIES


	getStudiesAreas(){
		return this.learningAreas;
	}


	getStudiesByArea(catId){
		return this.studiesDone.filter((theStudy) => theStudy.studyFieldID === catId);
	}	

	getAllStudies(){
		return this.studiesDone;
	}

	getStudiesByID(studyID){
		return this.studiesDone.filter((theStudy) => theStudy.id === studyID);
	}


	// CV INFO

	getCVInfo(){
		return this.cv;
	}

	// CONTACT && MAILS

	getContactInfo(){
		return this.mediaContactAdresseses;
	}

	getMailsInfo(){
		return this.myMails;
	}
}