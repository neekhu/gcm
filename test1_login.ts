describe('Login Page', function() {
it ('should allow successful login', function() {
			browser.ignoreSynchronization = true;
			browser.get(browser.params.glob.loginURL);
			
			element(by.xpath('//button[contains(text(), "Alle akzeptieren")]')).click();
			browser.driver.sleep(2000);
			browser.driver.findElement(by.css("span[class='bold-menu-text ng-tns-c119-0']")).click();
			browser.driver.sleep(7000);
			browser.switchTo().frame(browser.driver.findElement(by.id('iframeDialog')));
			element(by.id('mat-input-1')).sendKeys(browser.params.glob.username);
			element(by.id('mat-input-2')).sendKeys(browser.params.glob.wrongpassword);
			browser.driver.sleep(2000);
			element(by.xpath('//button[contains(text(), "Anmelden")]')).click();
			browser.driver.sleep(2000);
			browser.driver.sleep(7000);
			element(by.xpath('//p[contains(text(), "Bitte überprüfen Sie Ihre Eingaben und probieren Sie es erneut")]')).click();

			browser.driver.sleep(2000);
			element(by.id('mat-input-1')).sendKeys(protractor.Key.CONTROL,'a');
			element(by.id('mat-input-1')).sendKeys(protractor.Key.BACK_SPACE);

			browser.driver.sleep(1000);
			element(by.id('mat-input-2')).sendKeys(protractor.Key.CONTROL,'a');
			element(by.id('mat-input-2')).sendKeys(protractor.Key.BACK_SPACE);
			browser.driver.sleep(2000);

			element(by.id('mat-input-1')).sendKeys(browser.params.glob.wrongusername);
			browser.driver.sleep(1000);
			element(by.id('mat-input-2')).sendKeys(browser.params.glob.password);
			browser.driver.sleep(2000);
			element(by.xpath('//button[contains(text(), "Anmelden")]')).click();
			browser.driver.sleep(2000);
			browser.driver.sleep(7000);
			element(by.xpath('//p[contains(text(), "Bitte überprüfen Sie Ihre Eingaben und probieren Sie es erneut")]')).click();

			browser.driver.sleep(2000);
			element(by.id('mat-input-1')).sendKeys(protractor.Key.CONTROL,'a');
			element(by.id('mat-input-1')).sendKeys(protractor.Key.BACK_SPACE);

			browser.driver.sleep(1000);
			element(by.id('mat-input-2')).sendKeys(protractor.Key.CONTROL,'a');
			element(by.id('mat-input-2')).sendKeys(protractor.Key.BACK_SPACE);
			browser.driver.sleep(2000);

			element(by.id('mat-input-1')).sendKeys(browser.params.glob.username);
			browser.driver.sleep(1000);
			element(by.id('mat-input-2')).sendKeys(browser.params.glob.password);
			browser.driver.sleep(2000);
			element(by.xpath('//button[contains(text(), "Anmelden")]')).click();
			browser.driver.sleep(2000);
			browser.driver.sleep(7000);			
			
			browser.switchTo().defaultContent();

			browser.driver.findElement(by.css("a[class='menu-link user-profile-dropdown-toggle ng-tns-c119-0'")).click();
			browser.driver.sleep(7000);
			
			browser.driver.sleep(2000);			
			browser.driver.sleep(7000);

			//"Mein Profil" option exists:
			browser.driver.findElement(by.css("a[routerlink='my-profile'"));
			
			//Click on Logout:
			browser.driver.findElement(by.css("a[angularticsaction='Open log-out iframe'")).click();

			browser.driver.sleep(2000);
			
			expect(browser.getCurrentUrl()).toEqual(browser.params.glob.logoutURL);
			
			browser.driver.sleep(3000);			
	});
});