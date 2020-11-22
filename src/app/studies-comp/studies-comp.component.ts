import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info-service.service';


import { StudyField } from './studies.class';

@Component({	
	selector: 'studies-jmchema',
  templateUrl: './studies-comp.component.html',
  styleUrls: ['./studies-comp.component.sass']
})

export class myStudies implements OnInit{
	studiesAreas: Array<StudyField>;

	constructor(private infoS: InfoService){
	}

	ngOnInit(){
		this.studiesAreas = this.infoS.getStudiesAreas();
	}

}
