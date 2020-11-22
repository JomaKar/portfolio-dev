import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'the-header',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.sass']
})
export class HeaderCompComponent {
	@ViewChild('navbarMenu') navbarMenu: ElementRef;

	dropDowned: boolean = false;

	constructor(private render: Renderer2, private wwS: WindowService){}

	displayMenu(){
		let wI = this.wwS.innerWidthOutput();
		if(wI < 845){
			(!this.dropDowned) ? this.render.addClass(this.navbarMenu.nativeElement, 'in') : this.render.removeClass(this.navbarMenu.nativeElement, 'in');
			this.dropDowned = !this.dropDowned;
		}
	}
}
