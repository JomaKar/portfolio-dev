import { Component, OnInit } from '@angular/core';

import { InfoService } from '../services/info-service.service';

import { SkillField } from './skills.class';

@Component({
	selector: 'skills-jmchema',
  templateUrl: './skills-comp.component.html',
  styleUrls: ['./skills-comp.component.sass']
})

export class mySkills implements OnInit{
	skillCategories: Array<SkillField> = [];
	constructor(private infoS: InfoService){}

	ngOnInit(){
		this.skillCategories = this.infoS.getSkillsCategories();
	}
}