import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';
import { RegularGridItemHeightService } from '../services/regular-grid-item-height.service';

@Directive({
	selector: '[itemHeightGallery]'
})

export class GridDirectiveDirective implements OnInit{
	@Input() itemHeightGallery: number;
	generalHeight: number

	constructor(
		private elR: ElementRef,
		private ren: Renderer2, 
		private itmHeightService: RegularGridItemHeightService) {
		itmHeightService.storgingHeight$.subscribe(data => this.generalHeight = data);
	}

	@HostListener('window:resize') resize(){
		if(this.itemHeightGallery == 0) this.sendHeight();
		this.sizer();
	}

	ngOnInit(){
		if(this.itemHeightGallery == 0) this.sendHeight();
		this.sizer();
	}

	sendHeight(){
		let width = this.elR.nativeElement.clientWidth;
		let fullHeight = width * 0.66791045;
		this.generalHeight = fullHeight;
		this.itmHeightService.extendingHeight(fullHeight);
	}

	sizer(){
		this.itmHeightService.storgingHeight$.subscribe(data =>  {
			this.generalHeight = data;
		});
		this.ren.setStyle(this.elR.nativeElement, 'height', `${this.generalHeight}px`);
	}

}