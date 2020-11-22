import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info-service.service';


@Component({
	selector: 'more-about-jmchema',
  templateUrl: './more-me-comp.component.html',
  styleUrls: ['./more-me-comp.component.sass']
})

export class myRealLife implements OnInit{
	aboutMe: Object;
	infoAvailable: boolean;
	actualPhoto: string;
	photos: Array<string> = ['assets/ub1.jpg', 'assets/ub2.jpg', 'assets/ub3.jpg', 'assets/ub4.jpg'];
	welcomeHeaderImg: string;

	srcStamp: string;

	constructor(private infoS: InfoService){}


	ngOnInit(){
		this.srcStamp = (window.location.host == 'jomakar.github.io') ? 'portfolio/' : '';
		
		this.aboutMe = this.infoS.getAdvancedPersonalInfo();
		this.infoAvailable = (this.aboutMe !== undefined && this.aboutMe !== null) ? true : false;
		// console.log(this.aboutMe);
		(this.infoAvailable) ? this.chooseImg() : null;
	}

	chooseImg(){
		let randomNumberMe = Math.round(Math.random() * this.aboutMe['personalImgs'].length - 1);
		let randomNumberHeader = Math.round(Math.random() * this.photos.length - 1);
		// console.log(this.aboutMe, randomNumberMe);
		this.actualPhoto = (randomNumberMe !== -1 && randomNumberMe < this.aboutMe['personalImgs'].length && randomNumberMe % 1 == 0) ? this.aboutMe['personalImgs'][randomNumberMe] : this.aboutMe['personalImgs'][0];
		this.welcomeHeaderImg = (randomNumberHeader !== -1 && randomNumberHeader < this.photos.length && randomNumberHeader % 1 == 0) ? this.photos[randomNumberMe] : this.photos[0];
	}

}