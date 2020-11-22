import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info-service.service';

@Component({
  selector: 'cv-jmchema',
  templateUrl: './cv-comp.component.html',
  styleUrls: ['./cv-comp.component.sass']
})
export class CvCompComponent implements OnInit {
	cvInfo: {[key: string]: any} = {};
	infoAvailable: boolean;
	srcStamp: string;

	constructor(private infoSer: InfoService){}

	ngOnInit(){
		this.srcStamp = (window.location.host == 'jomakar.github.io') ? 'portfolio/' : '';

		this.cvInfo = this.infoSer.getCVInfo();
		this.cvInfo.forEach(infoBlock => {
			infoBlock.works = infoBlock.works.reverse()
		});
		this.infoAvailable = (this.cvInfo !== undefined && this.cvInfo !== null) ? true : false;
		console.log(this.cvInfo);
	}


	downloadCV(){
		window.open(this.srcStamp + 'assets/CVProgramming.en.pdf', '_blank');
	}

}


