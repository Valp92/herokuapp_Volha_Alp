import { describe } from "mocha";
import { Browser, Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import assert from "assert";


describe('herokua', async () => {
let driver: WebDriver;

afterEach(async() => {
    driver.quit();
});

it('a - delete element', async () => {
driver = await new Builder().forBrowser(Browser.CHROME).build();
await driver.manage().window().maximize();
await driver.get("http://the-internet.herokuapp.com/add_remove_elements/");
await driver.findElement(By.xpath("//button[text()='Add Element']")).click();
await driver.findElement(By.xpath("//button[text()='Add Element']")).click();
await driver.findElement(By.xpath("//button[text()='Delete']")).click();
(await driver.findElements(By.xpath("//button[text()='Delete']"))).every;  ///как вызвать в консоли количество найденных элементов?
}
) 
}
)


it('b- checkboxex', async () => {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("http://the-internet.herokuapp.com/checkboxes");
    await driver.findElements(By.xpath('//*[contains(text(), "1")]/ancestor::div[@class="example"]'));
    //await driver.findElements(By.xpath('//*[contains(text(), "2")]/preciding-sibling::div[@class="example", [contains(text(), "checked")] ]'));  //не удалось проверить статус чекбокса
})


it('c -  dropdown', async () => {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("http://the-internet.herokuapp.com/dropdown");
    await driver.findElement(By.id('dropdown')).click();
    await driver.findElement(By.xpath('//*[contains(text(), "Option 1")]')).click();
    assert.equal(await (driver.findElement(By.xpath('//*[contains(text(), "Option 1")]'))).isSelected(),true);
    await driver.findElement(By.id('dropdown')).click();
    await driver.findElement(By.xpath('//*[contains(text(), "Option 2")]')).click();
    assert.equal(await (driver.findElement(By.xpath('//*[contains(text(), "Option 2")]'))).isSelected(),true);
}) 


it('l - iFrames', async () => {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("http://the-internet.herokuapp.com/frames");
    await driver.findElement(By.xpath('//*[contains(text(), "iFrame")]')).click();
    await driver.switchTo().frame(0);
    await driver.findElement(By.xpath('//*[text] = "Your content goes here.")]')).click;
    await driver.switchTo().defaultContent();
    }) 


    
