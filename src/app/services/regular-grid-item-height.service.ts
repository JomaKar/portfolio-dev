import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RegularGridItemHeightService {

	storingHeight = new Subject<number>();
	storgingHeight$ = this.storingHeight.asObservable();


	extendingHeight(height: number){
		this.storingHeight.next(height);
	}

}