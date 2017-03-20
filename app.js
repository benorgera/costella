Order = require('./order.js'),
	$ = require('jquery');

let orders = [];
orders.push(new Order());

$('#navbar').on('click', function (e) {
	$('li').removeClass('active');
	$(e.target).addClass('active');
});

$('changeOrder').on('click')