exports.config = {
		
		//directConnect: true,
		
		
		seleniumAddress: 'http://localhost:4444/wd/hub',
		
		// Capabilities to be passed to the webdriver instance.
		capabilities: {
		    'browserName': 'chrome'
		  },
		
		  framework: 'jasmine2',
		  specs: ['dropdown.js'],
		  
		// Options to be passed to Jasmine.
		  jasmineNodeOpts: {
		    defaultTimeoutInterval: 90000
		  }
};