const timeout = 200000;

describe('Testing with puppeteer', () => {

  beforeAll(async () => {
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
    await page.goto(URL);
  });

  test('Page title', async () => {
    const title = await page.title();
    expect(title).toBe('Angular 10 - User Registration and Login Example');
  }, timeout);

  test('Correct registration', async () => {
    var elementHandle = await page.$('input[formcontrolname=firstName]');
    await elementHandle.type('Andrej', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=lastName]');
    await elementHandle.type('Karpathy', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=username]');
    await elementHandle.type('tesla_autopilot', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=password]');
    await elementHandle.type('elontweets', { delay: 10 });
    await elementHandle.press('Enter');
    await page.evaluate(async () => {
        await new Promise(function (resolve) {
            setTimeout(resolve, 1000)
        });
    });
    expect(await page.$eval('div[class="alert alert-dismissable alert-success container mt-4"] > span', e => e.textContent)).toEqual('Registration successful')
  }, timeout);

  test('Incorrect login', async () => {
    elementHandle = await page.$('input[formcontrolname=username]');
    await elementHandle.type('tesla_autopilot', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=password]');
    await elementHandle.type('elontwees', { delay: 10 });
    await elementHandle.press('Enter');
    await page.evaluate(async () => {
        await new Promise(function (resolve) {
            setTimeout(resolve, 1000)
        });
    });
    expect(await page.$eval('div[class="alert alert-danger alert-dismissable container mt-4"] > span', e => e.textContent)).toEqual('Username or password is incorrect')
  }, timeout);


  test('Correct login', async () => {
    await page.goto('http://localhost:4200/account/login');
    elementHandle = await page.$('input[formcontrolname=username]');
    await elementHandle.type('tesla_autopilot', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=password]');
    await elementHandle.type('elontweets', { delay: 10 });
    await elementHandle.press('Enter');
    await page.evaluate(async () => {
        await new Promise(function (resolve) {
            setTimeout(resolve, 1000)
        });
    });
    expect(await page.$eval('div[class="container"] > p', e => e.textContent)).toEqual("You're logged in with Angular 10!!")
    await page.click('body > app > nav > div > a:nth-child(3)')
  }, timeout);

  test('Already in USE username registration [should fail]', async () => {
    await page.goto(URL);
    var elementHandle = await page.$('input[formcontrolname=firstName]');
    await elementHandle.type('Elon', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=lastName]');
    await elementHandle.type('Musk', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=username]');
    await elementHandle.type('tesla_autopilot', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=password]');
    await elementHandle.type('hahahaha', { delay: 10 });
    await elementHandle.press('Enter');
    await page.evaluate(async () => {
        await new Promise(function (resolve) {
            setTimeout(resolve, 1000)
        });
    });
    expect(await page.$eval('div[class="alert alert-danger alert-dismissable container mt-4"] > span', e => e.textContent)).toEqual(`Username "tesla_autopilot" is already taken`)
  }, timeout);

  test('Empty name', async () => {
    await page.goto(URL);
    elementHandle = await page.$('input[formcontrolname=lastName]');
    await elementHandle.type('Thiel', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=username]');
    await elementHandle.type('impeterthiel', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=password]');
    await elementHandle.type('nosoypeter', { delay: 10 });
    await elementHandle.press('Enter');
    expect(await page.$$eval('div[class="invalid-feedback"]', nodes => nodes.map(n => n.innerText))).toEqual(['First Name is required']);
  }, timeout);

  test('Empty last name', async () => {
    await page.goto(URL);
    elementHandle = await page.$('input[formcontrolname=firstName]');
    await elementHandle.type('Peter', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=username]');
    await elementHandle.type('impeterthiel', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=password]');
    await elementHandle.type('nosoypeter', { delay: 10 });
    await elementHandle.press('Enter');
    expect(await page.$$eval('div[class="invalid-feedback"]', nodes => nodes.map(n => n.innerText))).toEqual(['Last Name is required']);
  }, timeout);

  test('Empty Username', async () => {
    await page.goto(URL);
    elementHandle = await page.$('input[formcontrolname=firstName]');
    await elementHandle.type('Peter', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=lastName]');
    await elementHandle.type('Thiel', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=password]');
    await elementHandle.type('nosoypeter', { delay: 10 });
    await elementHandle.press('Enter');
    expect(await page.$$eval('div[class="invalid-feedback"]', nodes => nodes.map(n => n.innerText))).toEqual(['Username is required']);
  }, timeout);

  test('Empty password', async () => {
    await page.goto(URL);
    elementHandle = await page.$('input[formcontrolname=lastName]');
    await elementHandle.type('Thiel', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=username]');
    await elementHandle.type('impeterthiel', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=firstName]');
    await elementHandle.type('Peter', { delay: 10 });
    await elementHandle.press('Enter');
    expect(await page.$$eval('div[class="invalid-feedback"]', nodes => nodes.map(n => n.innerText))).toEqual(['Password is required']);
  }, timeout);

  test('All empty', async () => {
    await page.goto(URL);
    await page.click('button[class="btn btn-primary"]');
    expect(await page.$$eval('div[class="invalid-feedback"]', nodes => nodes.map(n => n.innerText))).toEqual(['First Name is required', 'Last Name is required', 'Username is required', 'Password is required']);
    }, timeout);



  test('Short password', async () => {
    await page.goto(URL);
    var elementHandle = await page.$('input[formcontrolname=firstName]');
    await elementHandle.type('Andrej', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=lastName]');
    await elementHandle.type('Karpathy', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=username]');
    await elementHandle.type('tesla_autopilot', { delay: 10 });
    elementHandle = await page.$('input[formcontrolname=password]');
    await elementHandle.type('elon', { delay: 10 });
    await elementHandle.press('Enter');

    await page.click('button[class="btn btn-primary"]')
    expect(await page.$eval('div[class="invalid-feedback"]', e => e.textContent)).toEqual('Password must be at least 6 characters')
  }, timeout);

    
});
