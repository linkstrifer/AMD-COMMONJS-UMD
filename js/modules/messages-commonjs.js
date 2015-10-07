var $ = require('jquery');
var $box = $('.info-box');

function cleanBox() {
	$box.text('').removeClass(function (index, css) {return (css.match (/(^|\s)is-\S+/g) || []).join(' ');});
}

function success(message) {
	cleanBox();
	$box.text(message);
	console.log('%c ' + message, 'color: #27ae60');
}

function error(message) {
	cleanBox();
	$box.text(message).addClass('is-error');
	console.log('%c ' + message, 'background-color: #c0392b; color: #fff; padding: 10px; line-height: 45px;');
}

function info(message) {
	cleanBox();
	$box.text(message).addClass('is-info');
	console.log('%c ' + message, 'background-color: #f1c40f; color: #fff; padding: 10px; line-height: 45px;');
}

module.exports = {
	'success': success,
	'error': error,
	'info': info
};