
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { study } from '../studies.class';

@Component({
	
	selector: 'study-item',
	templateUrl: 'studyItm.component.html',
	styleUrls: ['studyItm.component.sass']
})

export class studyItem{
	@Input() myStudy: study;

	blankLinkOn: boolean = false;

	constructor(private router: Router){}

	goToStudy(e, id){
		e.preventDefault();
		// console.log(e.toElement.href, e.toElement.title);
		if(this.blankLinkOn)
			{
				(!e.toElement.href) ? window.open(e.toElement.title) : window.open(e.toElement.href);
			} 
			else 
			{
				this.router.navigate(['/studies', id]);
			}
		this.blankLinkOn = false;
	}

}