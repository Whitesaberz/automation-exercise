const { Builder, Capabilities } = require("selenium-webdriver");

require("chromedriver");

const { addMovie, crossOffMovie, deleteMovie, revealMessage } = require("../addMovie");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
    await driver.quit();
});

test("Add a movie", async () => {
    await addMovie(driver);
    await driver.sleep(2000);
});
test("Cross off movie", async () => {
    await crossOffMovie(driver);
    await driver.sleep(2000);
});
test("Delete a movie", async () => {
    await deleteMovie(driver);
    await driver.sleep(2000);
});
test("message is revealed", async () => {
    await revealMessage(driver);
    await driver.sleep(1000);
});
