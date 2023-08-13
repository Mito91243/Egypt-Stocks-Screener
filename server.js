import fs from "fs";
import puppeteer from "puppeteer";

async function Get_Stocks_EG() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "true",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-egypt/market-movers-all-stocks/"
  );

  // Wait and click on first result
  // Click the button to load more content
  await page.click(".loadButton-SFwfC2e0");
  await page.waitForTimeout(4000);
  await page.click(".loadButton-SFwfC2e0");
  await page.waitForTimeout(4000);

  const extractedData = await page.evaluate(() => {
    //Create Empty Array to push Data into
    const data = [];

    //Get All Table ROWS
    const tableRows = document.querySelectorAll("tbody > tr");

    // Loop through each row and extract data from elements within <td> cells
    tableRows.forEach((row) => {
      //Get all TD cells inside each row
      const cells = row.querySelectorAll("td");
      //Query each td as you like in celldata object
      const celldata = {
        Name: cells[0].querySelector("span > sup").textContent,
        Ticker: cells[0].querySelector("span > a").textContent,
        Price: cells[1].textContent,
        Percent: cells[2].textContent,
        Price_Chg: cells[3].querySelector("span").textContent,
        Rating: cells[4].textContent,
        Volume: cells[5].textContent,
        // Add more properties as needed
      };

      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  //console.log(extractedData);
  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync("./data/Stocks_EG.json", jsonData, "utf8");
    console.log("Data written to Stocks_EG.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function Get_Stocks_KSA() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "true",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-ksa/market-movers-all-stocks/"
  );

  // Wait and click on first result
  // Click the button to load more content
  await page.click(".loadButton-SFwfC2e0");
  await page.waitForTimeout(4000);
  await page.click(".loadButton-SFwfC2e0");
  await page.waitForTimeout(4000);

  const extractedData = await page.evaluate(() => {
    //Create Empty Array to push Data into
    const data = [];

    //Get All Table ROWS
    const tableRows = document.querySelectorAll("tbody > tr");

    // Loop through each row and extract data from elements within <td> cells
    tableRows.forEach((row) => {
      //Get all TD cells inside each row
      const cells = row.querySelectorAll("td");
      //Query each td as you like in celldata object
      const celldata = {
        Name: cells[0].querySelector("span > sup").textContent,
        Ticker: cells[0].querySelector("span > a").textContent,
        Price: cells[1].textContent,
        Percent: cells[2].textContent,
        Price_Chg: cells[3].querySelector("span").textContent,
        Rating: cells[4].textContent,
        Volume: cells[5].textContent,
        // Add more properties as needed
      };

      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  //console.log(extractedData);
  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync("./data/Stocks_KSA.json", jsonData, "utf8");
    console.log("Data written to Stock_KSA.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function Get_Stocks_UAE() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "true",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-uae/market-movers-all-stocks/"
  );

  // Wait and click on first result
  // Click the button to load more content
  await page.click(".loadButton-SFwfC2e0");
  await page.waitForTimeout(4000);

  const extractedData = await page.evaluate(() => {
    //Create Empty Array to push Data into
    const data = [];

    //Get All Table ROWS
    const tableRows = document.querySelectorAll("tbody > tr");

    // Loop through each row and extract data from elements within <td> cells
    tableRows.forEach((row) => {
      //Get all TD cells inside each row
      const cells = row.querySelectorAll("td");
      //Query each td as you like in celldata object
      const celldata = {
        Name: cells[0].querySelector("span > sup").textContent,
        Ticker: cells[0].querySelector("span > a").textContent,
        Price: cells[1].textContent,
        Percent: cells[2].textContent,
        Price_Chg: cells[3].querySelector("span").textContent,
        Rating: cells[4].textContent,
        Volume: cells[5].textContent,
        // Add more properties as needed
      };

      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  //console.log(extractedData);
  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync("./data/Stocks_UAE.json", jsonData, "utf8");
    console.log("Data written to Stock_UAE.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function Get_Sectors() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "true",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-egypt/sectorandindustry-sector/"
  );

  // Wait and click on first result
  // Click the button to load more content
  await page.click("th:nth-child(4)");
  await page.waitForTimeout(6000);

  const extractedData = await page.evaluate(() => {
    //Create Empty Array to push Data into
    const data = [];

    //Get All Table ROWS
    const tableRows = document.querySelectorAll("tbody > tr");
    let counter = 0;
    // Loop through each row and extract data from elements within <td> cells
    tableRows.forEach((row) => {
      if (counter > 4) return false;
      //Get all TD cells inside each row
      const cells = row.querySelectorAll("td");
      //Query each td as you like in celldata object
      const celldata = {
        Name: cells[0].querySelector("a").textContent,
        Percent: cells[3].querySelector("span").textContent,
        Rank: counter + 1,
        // Add more properties as needed
      };
      counter++;
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  //console.log(extractedData);
  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync("./data/Sectors.json", jsonData, "utf8");
    console.log("Data written to Sectors.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function Get_Industries() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "true",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-egypt/sectorandindustry-industry/"
  );

  // Wait and click on first result
  // Click the button to load more content
  await page.click("th:nth-child(4)");
  await page.waitForTimeout(6000);

  const extractedData = await page.evaluate(() => {
    //Create Empty Array to push Data into
    const data = [];

    //Get All Table ROWS
    const tableRows = document.querySelectorAll("tbody > tr");
    let counter = 0;
    // Loop through each row and extract data from elements within <td> cells
    tableRows.forEach((row) => {
      if (counter > 4) return false;
      //Get all TD cells inside each row
      const cells = row.querySelectorAll("td");
      //Query each td as you like in celldata object
      const celldata = {
        Name: cells[0].querySelector("a").textContent,
        Percent: cells[3].querySelector("span").textContent,
        Rank: counter + 1,
        // Add more properties as needed
      };
      counter++;
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  //console.log(extractedData);
  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync("./data/Industries.json", jsonData, "utf8");
    console.log("Data written to Industries.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function Get_News_TradingView() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "true",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/symbols/EGX-EGX30/news/"
    //"https://www.tradingview.com/markets/stocks-egypt/news/"
  );

  const extractedData = await page.evaluate(() => {
    //Create Empty Array to push Data into
    const data = [];

    //Get All Table ROWS
    const news = document.querySelectorAll(".grid-ScDiRUwB > a");

    // Loop through each row and extract data from elements within <td> cells
    news.forEach((el) => {
      const cell_headline = el.querySelector(".title-rY32JioV").textContent;
      const cell_source = el.querySelector(".block-TUPxzdRV").textContent;
      const cell_link = el.getAttribute("href");

      const celldata = {
        Headline: cell_headline,
        Source: cell_source,
        Link: cell_link,
      };
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });
  //console.log(extractedData);
  await browser.close();

  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync("./data/News.json", jsonData, "utf8");
    console.log("Data written to News.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function Get_News_ArabNews() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "true",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://economymiddleeast.com/newscategories/economy/");

  const extractedData = await page.evaluate(() => {
    //Create Empty Array to push Data into
    const data = [];

    //Get All Table ROWS
    const news = document.querySelectorAll("div > h3 > a");

    // Loop through each row and extract data from elements within <td> cells
    news.forEach((el) => {
      const cell_headline = el.textContent;
      const cell_link = el.getAttribute("href");
      const celldata = {
        Headline: cell_headline,
        Source: "economymiddleeast",
        Link: cell_link,
      };
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });
  //console.log(extractedData);
  await browser.close();

  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync("./data/News2.json", jsonData, "utf8");
    console.log("Data written to News2.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function Get_Top_Gainers() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "true",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-egypt/market-movers-gainers/"
  );


  const extractedData = await page.evaluate(() => {
    //Create Empty Array to push Data into
    const data = [];

    //Get All Table ROWS
    const tableRows = document.querySelectorAll("tbody > tr");
    let counter = 0;
    // Loop through each row and extract data from elements within <td> cells
    tableRows.forEach((row) => {
      if (counter > 4) return false;
      //Get all TD cells inside each row
      const cells = row.querySelectorAll("td");
      //Query each td as you like in celldata object
      const celldata = {
        Name: cells[0].querySelector("span > sup").textContent,
        Percent: cells[1].querySelector("span").textContent,
        Rank: counter + 1,
        // Add more properties as needed
      };
      counter++;
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  //console.log(extractedData);
  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync("./data/Top_Gainers.json", jsonData, "utf8");
    console.log("Data written to Top_Gainers.json");
  } catch (error) {
    console.error("Error:", error);
  }
}
//async function run() {

//await Get_News_TradingView();
await Get_News_ArabNews();
await Get_Stocks_KSA();
await Get_Stocks_UAE();
await Get_Stocks_EG();
await Get_Sectors();
await Get_Industries();
await Get_Top_Gainers();
//}

//setInterval(run, 20000);
