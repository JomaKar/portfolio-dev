import { Component, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import { sendMessageService } from '../services/send-message.service';
import { InfoService } from '../services/info-service.service';

@Component({
  selector: 'contact-element',
  templateUrl: './contact-comp.component.html',
  styleUrls: ['./contact-comp.component.sass']
})
export class ContactCompComponent implements OnInit {
	myMessage: {[key: string]: any} = {};
	@ViewChild('modalPackage') modalPackage: ElementRef;
	@ViewChild('modal') modal: ElementRef;

	myMediaInfo: Array<{[key: string]: any}> = [];
	myMailsInfo: Array<{[key: string]: any}> = [];

	constructor(
		private sendS: sendMessageService, 
		private infoS: InfoService, 
		private render: Renderer2){
	}

	ngOnInit(){
		this.myMediaInfo = this.infoS.getContactInfo();
		this.myMailsInfo = this.infoS.getMailsInfo();
	}

	onSubmit(e){
		e.preventDefault();
		this.sendS.sendMessage(this.myMessage)
			.subscribe(res =>  (res.json()['success'] === 'email sent') ?  this.successOnMessage() : (console.log('we don\'t know what happen. check it out:', res.json() ), this.failOnMessage()) );
	}

	successOnMessage(){
		this.render.addClass(this.modalPackage.nativeElement, 'showing');
		this.render.removeClass(this.modal.nativeElement, 'noScss');
		this.render.addClass(this.modal.nativeElement, 'scss');
	}

	failOnMessage(){
		this.render.addClass(this.modalPackage.nativeElement, 'showing');
		this.render.removeClass(this.modal.nativeElement, 'scss');
		this.render.addClass(this.modal.nativeElement, 'noScss');
	}

	outOfModal(){
		this.render.removeClass(this.modalPackage.nativeElement, 'showing');
	}

}