import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
	selector: '[locatingOnGrid]'
})

export class  ThreeGridLocatorDirective implements OnInit{
	@Input() locatingOnGrid: number;
	firstCycle: boolean = true;
	leftSide: boolean = false;
	centerSide: boolean = false;
	rightSide: boolean = false;
	baseDivider: number = 3;

	constructor(private elR: ElementRef, private rend: Renderer2){}

	ngOnInit(){
		(this.firstCycle) ? this.isOnFirstCycle(this.locatingOnGrid) : this.defineSide(this.locatingOnGrid);
	}

	isOnFirstCycle(num){
		// console.log(num, 'onDir');
		this.firstCycle = (num < 3) ? true : false;
		if(num === 0){ this.leftSide = true; }else if(num === 1){ this.centerSide = true; }else if(num === 2){ this.rightSide = true; }
		
		this.insertIntoColumn();
	}

	defineSide(num){
		let result = num/this.baseDivider;
		if(result % 1 === 0){ this.leftSide = true; }else if((result - 1) % 1 === 0){ this.centerSide = true; }else if((result + 1) % 1 === 0){ this.rightSide = true;}
		this.insertIntoColumn();
	}


	insertIntoColumn(){
		let leftColumn = document.getElementsByClassName('leftOnGrid'),
		centerColumn = document.getElementsByClassName('centerOnGrid'),
		rightColumn = document.getElementsByClassName('rightOnGrid');

		if(this.leftSide){
			leftColumn['innerHTML'] += this.elR.nativeElement;
		}else if(this.centerSide){
			centerColumn['innerHTML'] += this.elR.nativeElement;
		}else if(this.rightSide){
			rightColumn['innerHTML'] += this.elR.nativeElement;
		}
	}

}