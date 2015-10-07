requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'vendors/jquery'
    }
});

require(['modules/messages-umd'], function(messages) {
	messages.success('Success message');
	messages.error('Error message');
	messages.info('Info message');
	// messages.cleanBox(); // error, cleanBox is not a function
});