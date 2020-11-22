import { Component, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import { InfoService } from '../../services/info-service.service';
import { ActivatedRoute, Router } from '@angular/router';

import { study } from '../studies.class';

@Component({
	selector: 'study-element',
	templateUrl: 'studyElement.component.html',
	styleUrls: ['studyElement.component.sass']
})

export class studyElement implements OnInit{
	@ViewChild('certificateElement') certificateElement: ElementRef;
	actualStudy: study;
	certificateToAvailable: boolean = false;
	srcStamp: string;

	constructor(private aRoute: ActivatedRoute, private infoS: InfoService, private router: Router, private render: Renderer2){
	}

	ngOnInit(){
		this.srcStamp = (window.location.host == 'jomakar.github.io') ? 'portfolio/' : '';
		this.aRoute.params.subscribe((param) => this.actualStudy = this.infoS.getStudiesByID(+param['id'])[0]);
		this.certificateToAvailable = (this.actualStudy.certificateAvailable > 0) ? true : false;
	}

	goBack(){
		this.router.navigate(['/studies', '']);
	}

	showCertificate(){
		this.render.addClass(this.certificateElement.nativeElement, 'visibleCertificate');
	}

	hideCertificate(){
		this.render.removeClass(this.certificateElement.nativeElement, 'visibleCertificate');
	}


}