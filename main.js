import fs from 'fs'
import puppeteer from "puppeteer";

async function Get_Gainers() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "new",
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

    // Loop through each row and extract data from elements within <td> cells
    tableRows.forEach((row) => {
      //Get all TD cells inside each row
      const cells = row.querySelectorAll("td");
      //Query each td as you like in celldata object
      const celldata = {
        Name: cells[0].querySelector("span > sup").textContent,
        Percent: cells[1].querySelector("span").textContent,
        Price: cells[2].textContent,
        Price_Chg: cells[3].querySelector("span").textContent,
        Rating: cells[4].querySelector("div").textContent,
        Volume: cells[5].textContent,
        // Add more properties as needed
      };


      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  console.log(extractedData);

  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync('gainers_data.json', jsonData, 'utf8');
    console.log('Data written to gainers_data.json');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function Get_Losers() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-egypt/market-movers-losers/"
  );

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
        Percent: cells[1].querySelector("span").textContent,
        Price: cells[2].textContent,
        Price_Chg: cells[3].querySelector("span").textContent,
        Rating: cells[4].querySelector("div").textContent,
        Volume: cells[5].textContent,
        // Add more properties as needed
      };
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  console.log(extractedData);

  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync('Losers_data.json', jsonData, 'utf8');
    console.log('Data written to Losers_data.json');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function Get_Top_Performers() {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto(
    "https://www.tradingview.com/markets/stocks-egypt/market-movers-best-performing/"
  );

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
        Percent_Y: cells[1].querySelector("span").textContent,
        Price: cells[2].textContent,
        Market_cap: cells[8].textContent,
        // Add more properties as needed
      };
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  console.log(extractedData);
  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync('Top_Performers_data.json', jsonData, 'utf8');
    console.log('Data written to Top_Performers_data.json');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function Get_Industries() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-egypt/sectorandindustry-industry/"
  );

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
        Industry: cells[0].querySelector("a").textContent,
        Market_cap: cells[1].textContent,
        Dividend_Yield_FWD: cells[2].textContent,
        Percent: cells[3].textContent,
        Volume: cells[4].textContent,
        Sector: cells[5].textContent,
        //Add more properties as needed
      };
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  console.log(extractedData);

  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync('Industries_data.json', jsonData, 'utf8');
    console.log('Data written to Industries_data.json');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function Get_Sectors() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.tradingview.com/markets/stocks-egypt/sectorandindustry-sector/"
  );

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
        Sector: cells[0].querySelector("a").textContent,
        Market_cap: cells[1].textContent,
        Dividend_Yield_FWD: cells[2].textContent,
        Percent: cells[3].textContent,
        Volume: cells[4].textContent,
        //Add more properties as needed
      };
      //Push the object into the data again
      data.push(celldata);
    });
    //return the data
    return data;
  });

  console.log(extractedData);

  await browser.close();
  try {
    const jsonData = JSON.stringify(extractedData, null, 2);

    fs.writeFileSync('Sectors_data.json', jsonData, 'utf8');
    console.log('Data written to Sectors_data.json');
  } catch (error) {
    console.error('Error:', error);
  }
}




//Get_Sectors()
//Get_Industries()
//Get_Gainers()
//Get_Losers()
//Get_Top_Performers()
