import { Component, OnInit } from '@angular/core';

import { InfoService } from '../services/info-service.service';

@Component({
	selector: 'home-jmchema',
  templateUrl: 'home-comp.component.html',
  styleUrls: ['./home-comp.component.sass']
})

export class PortfolioHome implements OnInit{
	welcomeTitle: string = 'Welcome to my portfolio!';
	welcomeHeaderImg: string = 'assets/uT.JPG';
	welcomeText: string = 'Welcome to my portfolio. Here you will find some projects where I\'ve worked on as well as some more information about me.';

	srcStamp: string;

	myInfo: Object;
	infoAvailable: boolean;
	actualPhoto: string;

	constructor(private infoSer: InfoService){}

	ngOnInit(){
		this.srcStamp = (window.location.host == 'jomakar.github.io') ? 'portfolio/' : '';
		this.myInfo = this.infoSer.getBasicPersonalInfo();
		this.infoAvailable = (this.myInfo !== undefined && this.myInfo !== null) ? true : false;
		(this.infoAvailable) ? this.chooseImg() : null;
	}

	chooseImg(){
		let randomNumber = Math.round(Math.random() * this.myInfo['myImgs'].length - 1);
		this.actualPhoto = (randomNumber !== -1 && randomNumber <= this.myInfo['myImgs'].length - 1) ? this.myInfo['myImgs'][randomNumber] : this.myInfo['myImgs'][0];
	}

}