describe('Search Page', function() {
it ('should allow Search functionality', function() {
			browser.ignoreSynchronization = true;
			browser.get(browser.params.glob.openURL);
						
			//Accept cookies:
			element(by.xpath('//button[contains(text(), "Alle akzeptieren")]')).click();
			browser.driver.sleep(2000);
			browser.driver.sleep(3000);
			
			//Click on "Suchseite":
			element(by.xpath('//span[contains(text(), "Suchseite")][2]')).click();

			expect(browser.getCurrentUrl()).toEqual(browser.params.glob.searchURL);
			browser.driver.sleep(2000);			

			//Div element for filtering exists, having search options inside:
			expect(browser.driver.findElement(by.css('div[class="filter"]')).getText()).
				toContain('Online Termine buchbar' && 'Videosprechstunde' && 'Info' && 'Barrierefreiheit' && 'SUCHEN');

			//Span element exists, having text insde "Auf der linken Seite kannst Du die Arztsuche starten.":
			expect(browser.driver.findElement(by.css('span[translate="search.no.input.given.label"]')).getText()).
				toContain('AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.');

			//Name field exists:
			element(by.id('search-query-typeahead')).click();

			//Location input field exists:
			element(by.id('search-location-typeahead')).click();
			
			//Div element for sorting, having sorting options inside:
			expect(browser.driver.findElement(by.css('div[class="container sort-container"]')).getText()).
				toContain('Beste Ergebnisse' && 'Alphabetisch nach Arztname' && ' Entfernung ' && 'Umkreis');

			//Type in a name to search for:
			element(by.id('search-query-typeahead')).sendKeys(browser.params.glob.name1);

			//Some suggestions pop off
			browser.driver.sleep(2000);						
			expect(browser.driver.findElement(by.css('div[class="title-category ng-star-inserted"]')).getText()).
				toContain('NAME DES ARZTES');

			//Delete the value of name:
			element(by.id('search-query-typeahead')).sendKeys(protractor.Key.CONTROL,'a');
			element(by.id('search-query-typeahead')).sendKeys(protractor.Key.BACK_SPACE);

			//Type another name, second time:
			element(by.id('search-query-typeahead')).sendKeys(browser.params.glob.name2);

			//Some suggestions pop off
			browser.driver.sleep(2000);						
			expect(browser.driver.findElement(by.css('div[class="title-category ng-star-inserted"]')).getText()).
				toContain('NAME DES ARZTES');

			//Delete the value of name:
			element(by.id('search-query-typeahead')).sendKeys(protractor.Key.CONTROL,'a');
			element(by.id('search-query-typeahead')).sendKeys(protractor.Key.BACK_SPACE)
			
			//Type another name, third time:
			element(by.id('search-query-typeahead')).sendKeys(browser.params.glob.name3);

			//No suggestions pop off
			browser.driver.sleep(2000);						
			//expect(element(by.xpath('//div[contains(text(), "Suchen")]')).isPresent()).toBe(false);
			expect(element(by.binding('NAME DES ARZTES')).isPresent()).toBe(false);			

			//Delete the value of name:
			element(by.id('search-query-typeahead')).sendKeys(protractor.Key.CONTROL,'a');
			element(by.id('search-query-typeahead')).sendKeys(protractor.Key.BACK_SPACE);

			//Type the name you typed the first time:
			element(by.id('search-query-typeahead')).sendKeys(browser.params.glob.name1);

			//Some suggestions pop off
			browser.driver.sleep(2000);						
			expect(browser.driver.findElement(by.css('div[class="title-category ng-star-inserted"]')).getText()).
				toContain('NAME DES ARZTES');
			
			//Click the search button:
			element(by.xpath('//button[contains(text(), "Suchen")]')).click();
			browser.driver.sleep(2000);						

			//Profile image in search results exists:
			element(by.xpath('//app-physician-card[@class="ng-star-inserted"]/div[@class="card physician-card"]/div[@class="card-header d-flex"]/div[@class="physician-picture"]/app-avatar[@class="small-size"]/div[@class="avatar-image small-size"]/img[@class="avatar__element ng-star-inserted"]')).click();

			//Profile name in search results exists:
			element(by.xpath('//h3[@class="physician-name align-self-center"]')).click();

			//Profile button in search results exists:
			expect(browser.driver.findElement(by.css('span[class="btn-text"]')).getText()).toContain('PROFIL');

			//Profile address in search results exists:
			element(by.xpath('//span[@class="description-text text-alignment-center text-break physician-address"]/span[@class="ng-star-inserted"]')).click();

			//Profile description in search results exists:
			element(by.xpath('//div[@class="d-flex flex-row ng-star-inserted"]/span[@class="description-text text-alignment-center text-break"]')).click();
			
			//Bookability possible:
			element(by.xpath('//span[contains(text(), "Online-Termine")]')).click();
			
			//Online appointment exist:
			expect(browser.driver.findElement(by.css('div[class="calendar-cell calendar-cell-mask justify-content-center align-items-center ng-star-inserted"]')).getText()).
				toContain('9:00');

			//Scroll to the bottom:
			browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');

			browser.driver.sleep(2000);						
			//Show more results button available
			expect(browser.driver.findElement(by.css('a[class="load-more-link"]')).getText()).
				toContain('MEHR ANZEIGEN');
				
			//Scroll to the top:
			browser.executeScript('window.scrollTo(0,0)');

			//Type in a location to search for:
			element(by.id('search-location-typeahead')).sendKeys(browser.params.glob.location);

			browser.driver.sleep(2000);						
			//Select the second item of the suggestions dropdown:
			element(by.xpath('//button[@class="dropdown-item ng-star-inserted"][2]')).click();
			
			//Click the search button:
			element(by.xpath('//button[contains(text(), "Suchen")]')).click();

			browser.driver.sleep(2000);						
			//Validate that Granate, Beate exists:

			//Show more results button available
			expect(browser.driver.findElement(by.css('span[class="description-text text-alignment-center text-break physician-address"] > span[class="ng-star-inserted"]')).getText()).
				toContain("13,44");
			
			//Check the Online Bookable Checkbox:
			browser.driver.sleep(2000);						
			
			browser.driver.findElement(by.css('div[class="custom-control custom-checkbox"]')).click();

			browser.driver.sleep(2000);						
			
			//Click the search button:
			element(by.xpath('//button[contains(text(), "Suchen")]')).click();
			browser.driver.sleep(2000);						

			//Scroll to the bottom:
			browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');

			browser.driver.sleep(1000);						
			//Check the Video Conference Checkbox:
			browser.driver.findElement(by.css('div[class="custom-control custom-checkbox d-flex video-label text-alignment-center"]')).click();
			browser.driver.sleep(2000);						

			//Delete the value of name:
			element(by.id('search-query-typeahead')).sendKeys(protractor.Key.CONTROL,'a');
			element(by.id('search-query-typeahead')).sendKeys(protractor.Key.BACK_SPACE);

			browser.driver.sleep(2000);						
			
			//Click the search button:
			element(by.xpath('//button[contains(text(), "Suchen")]')).click();
			browser.driver.sleep(2000);						
			
			browser.driver.sleep(1000);						
			//Uncheck the Video Conference Checkbox:
			browser.driver.findElement(by.css('div[class="custom-control custom-checkbox d-flex video-label text-alignment-center"]')).click();
			browser.driver.sleep(2000);						
			
			browser.driver.sleep(2000);						
			//Check "Barrier-Free" Checkbox:
			browser.driver.findElement(by.css('div[class="row filter-section ng-star-inserted"]')).click();
			browser.driver.sleep(3000);						
			
			//Click the search button:
			element(by.xpath('//button[contains(text(), "Suchen")]')).click();
			browser.driver.sleep(3000);						

			//Check alphabetical order:
			element(by.xpath('//div[@class="container sort-container"]/div[@class="row sort-section"][2]/div[@class="col-sm-12"]/div[@class="custom-control custom-radio"]')).click();
			browser.driver.sleep(3000);						

			//Check distance sort order:
			element(by.xpath('//div[@class="container sort-container"]/div[@class="row sort-section"][3]/div[@class="col-sm-12"]/div[@class="custom-control custom-radio"]')).click();
			browser.driver.sleep(3000);						
			
			//Press the slider:
			
			//element(by.xpath('//span[@class="ng5-slider-span ng5-slider-pointer ng5-slider-pointer-min"]')).mouseDown();
			browser.driver.sleep(2000);	
			
			//Move the sliderto the right:
			//element(by.xpath('//span[@class="ng5-slider-span ng5-slider-pointer ng5-slider-pointer-min"]')).moveToElement(element(by.xpath('//span[@class="ng5-slider-ticks"]/span["ng5-slider-tick ng-star-inserted"][4]')));
			browser.driver.sleep(2000);	
			
			
			//ng5-slider-ticks
			//move from: 
			
			//move to:
			//ng5-slider-inner-tooltip ng-star-inserted
			
			//element1=element(by.xpath('//span[@class="ng5-slider-span ng5-slider-pointer ng5-slider-pointer-min"]'))
			//element2=element(by.xpath('//span[@class="ng5-slider-ticks"]/span["ng5-slider-tick ng-star-inserted"][4]'))
			
			//browser.actions().mouseDown(element1).mouseMove(element2).mouseUp().perform();
			
			browser.driver.sleep(3000);			
	})
});