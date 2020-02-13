describe('contact test', function () {
    var env = 'http://localhost:3333';
    beforeEach(() => {
        browser.driver.get(env + '/contact/');
    });
    describe('The contact form displays with all fields', () => {
        it('Check that the form displays', () => {
            const sc = browser.driver.findElement(by.css('#second-content')).getText();
            expect(sc).toContain('Get in Touch');
            expect(sc).toContain("Tell us a little bit about what you're working on. We'll be in touch to tell you about the next steps toward accomplishing your goals!");
            const cf = browser.driver.findElement(by.css('#second-content')).getText();
            expect(cf).toContain('Full Name*');
            expect(cf).toContain('E-mail*');
            expect(cf).toContain('Phone');
            expect(cf).toContain('What are you working on?');
        });
    });

    describe('User is able to successfully submit a contact form & view the successful submission animation', () => {
        it('Check that the form fades and appears the animation', function () {
            browser.driver.sleep(3000);
            browser.driver.findElement(by.css('input[name=name]')).sendKeys('Tester');
            browser.driver.findElement(by.css('input[name=email]')).sendKeys('Test@openforge.io');
            browser.driver.findElement(by.css('input[name=phone]')).sendKeys('3333333333');
            browser.driver.findElement(by.css('input[name=message]')).sendKeys('Testing');
            browser.driver.findElement(by.css('button[type=submit]')).click();
            browser.driver.sleep(9000);
            const img = browser.driver.findElement(by.css('#fimage')).getAttribute('alt');
            expect(img).toContain('Map page graphic');
        });
    });
});