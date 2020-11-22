import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.class';

@Component({
	selector: 'projects-itm',
    templateUrl: 'projectItem.component.html',
    styleUrls: ['projectItem.component.sass']
})

export class projectItem implements OnInit{
	@Input() theProject: Project;
	projectsInvolvedAsTxt: string = '';
	srcStamp: string;

	ngOnInit(){
		this.srcStamp = (window.location.host == 'jomakar.github.io') ? 'portfolio/' : '';
		
		this.theProject.techs.forEach((e, i) => {
			(i < this.theProject.techs.length - 1) ? this.projectsInvolvedAsTxt += `${e}, `: this.projectsInvolvedAsTxt += e;
		});
	}
}