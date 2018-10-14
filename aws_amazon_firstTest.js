describe("Testing the amazon sign up page", function(){
		
	it("Entering the details to the fields", function(){
		
		browser.get("https://portal.aws.amazon.com/billing/signup#/start");
		
		element(by.model("credentials.email")).sendKeys("pinky@lightpink.com");
		element(by.model("credentials.password")).sendKeys("Utk@rsh09r");
		element(by.model("credentials.rePassword")).sendKeys("Utk@rsh09r");
		element(by.model("credentials.fullName")).sendKeys("Halla_Bol");
		element(by.linkText("Sign in to an existing AWS account")).click();
		
	});
});