"use strict";
class Order {
	constructor(items, settings) {
		this._items = items;
		this._settings = settings;
	}

	addItem(i) {
		items.push(i);
	}

	clearItems() {
		this._items = {};
	}


	clearSettings() {
		this._settings = {};
	}

	get items() {
		return this._items;
	}

	get settings() {
		return this._settings;
	}

	static getMagnitude(a, b) {
		return Math.pow(a * a + b * b, 0.5);
	}
}

class SiteOrder extends Order{
	constructor() {
		super('site', 'site');
	}
}

console.log(Order.getMagnitude(3, 4));

var o = new Order({i: 'jib'}, {settings: 'blah'});

var s = new SiteOrder();

console.log(SiteOrder.getMagnitude(3, 4));
console.log(s.items);

var tes = 'Hi';

var obj = {
	name: 'Blue',
	tes,
	age: '15'
}


console.log(o.items);
console.log(o);

o.clearSettings();

console.log(o.settings);