define([], function() {
	function success(message) {
		console.log('%c ' + message, 'color: #27ae60');
	}

	function error(message) {
		console.log('%c ' + message, 'background-color: #c0392b; color: #fff; padding: 10px; line-height: 45px;');
	}

	function info(message) {
		console.log('%c ' + message, 'background-color: #f1c40f; color: #fff; padding: 10px; line-height: 45px;');
	}

	return {
		'success': success,
		'error': error,
		'info': info
	};
});