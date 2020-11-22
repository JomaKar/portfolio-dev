import { Component, Input, OnInit } from '@angular/core';

import { InfoService } from '../../services/info-service.service';

import { personalSkill } from '../skills.class';


@Component({
	selector: 'skill-list',
	templateUrl: 'skillList.component.html',
	styleUrls: ['skillList.component.sass']
})

export class skillListByField implements OnInit{

	@Input() fieldId: number;
	skillsOntheField: Array<personalSkill> = [];

	constructor(private infoS: InfoService){}

	ngOnInit(){
		this.skillsOntheField = this.infoS.getSkillsById(this.fieldId);
	}

}