import { Component, OnInit, Input } from '@angular/core';
import { InfoService } from '../../services/info-service.service';


import { study, StudyField } from '../studies.class';

@Component({
	selector: 'studies-list',
	templateUrl: 'studiesList.component.html',
	styleUrls: ['studiesList.component.sass']
})

export class studiesList implements OnInit{
	@Input() actualArea: StudyField;
	studies: Array<study>;

	constructor(private infoS: InfoService){
	}

	ngOnInit(){
		this.studies = this.infoS.getStudiesByArea(this.actualArea.id);
	}

}