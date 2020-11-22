import { Component, Input } from '@angular/core';
import { personalSkill } from '../skills.class';

@Component({
	selector: 'skill-item',
	templateUrl: 'skillItm.component.html',
	styleUrls: ['skillItm.component.sass'],
})

export class skillOfField{
	@Input() skill: personalSkill;
}