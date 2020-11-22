import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class sendMessageService {

	private headers = new HttpHeaders({'Content-Type': 'application/json'});
	private emailURL: string = 'https://formspree.io/purpureoslossilencios@hotmail.com';

	constructor(private http: HttpClient){}

	sendMessage(myMsg:Object): Observable<any> {
		console.log(myMsg, 'after service');
		return this.http.post(this.emailURL, myMsg, {headers: this.headers});
	}

}