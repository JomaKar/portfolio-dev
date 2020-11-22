import { Injectable } from '@angular/core';

@Injectable()
export class WindowService{

	outerWidthOutput(){
		return window.innerWidth;
	}

	innerWidthOutput(){
		return window.outerWidth;
	}

}