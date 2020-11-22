import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[locatingOnThreeGrid]'
})

export class  ThreeGridPaddingHelperDirective implements OnInit{

	@Input() locatingOnThreeGrid: number;
	
	firstCycle: boolean = true;
	
	leftSide: boolean = false;
	centerSide: boolean = false;
	rightSide: boolean = false;

	baseDivider: number = 3;

	constructor(private elR: ElementRef, private rend: Renderer2){}

	ngOnInit(){
		(this.firstCycle) ? this.isOnFirstCycle(this.locatingOnThreeGrid) : this.defineSide(this.locatingOnThreeGrid);
	}

	isOnFirstCycle(num){
		this.firstCycle = (num < 3) ? true : false;
		if(num === 0){ this.leftSide = true; }else if(num === 1){ this.centerSide = true; }else if(num === 2){ this.rightSide = true; }
		
		this.addingPadding();
	}

	defineSide(num){
		let result = num/this.baseDivider;
		if(result % 1 === 0){ this.leftSide = true; }else if((result - 1) % 1 === 0){ this.centerSide = true; }else if((result + 1) % 1 === 0){ this.rightSide = true;}
		this.addingPadding();
	}


	addingPadding(){
		if(this.leftSide){
			this.rend.addClass(this.elR.nativeElement, 'leftOnGrid');
		}else if(this.centerSide){
			this.rend.addClass(this.elR.nativeElement, 'centerOnGrid');
		}else if(this.rightSide){
			this.rend.addClass(this.elR.nativeElement, 'rightOnGrid');
		}
	}

}