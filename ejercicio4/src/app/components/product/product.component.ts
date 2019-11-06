import { Component, OnInit, Optional } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

	public name: string;
	public price: number;
	public quantity: number;

	constructor() {}

}
