describe("Testing Dropdwon at https://demos.telerik.com/kendo-ui/dropdownlist/angular", function(){
	
	it("Selecting dropdwon", function(){
		browser.driver;
		browser.driver.manage().window().maximize();
		browser.get("https://demos.telerik.com/kendo-ui/dropdownlist/angular");
		
		browser.sleep(6000);
		
		element.all(by.css(".demo-section k-content > select  option")).then(function(items){
			console.log("Total values in Dropdown is : "+items.length);
		});		
		
		
	});
});