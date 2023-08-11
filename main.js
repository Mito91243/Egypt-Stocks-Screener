document.getElementById("Gainers").addEventListener("click", Push_Gainers);
document.getElementById("Losers").addEventListener("click", Push_Losers);
document.getElementById("Sectors").addEventListener("click", Push_Losers);
document.getElementById("Industries").addEventListener("click", Push_Gainers);
document.getElementById("Calculator").addEventListener("click", Calculate);
document.getElementById("news").addEventListener("click", Push_News);



// * MUST ADD COMMENTS
// TODO: ADD Green color to text if Change is +
function Push_Gainers() {
  ClearTable();
  fetch("./data/gainers_data.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tablebody = document.getElementById("content-1");

      data.forEach((item) => {
        const tr = document.createElement("tr");

        const tdCompany = document.createElement("td");
        tdCompany.textContent = item.Name;

        const tdPrice = document.createElement("td");
        tdPrice.textContent = item.Price;

        const tdPrice_chg = document.createElement("td");
        tdPrice_chg.textContent = item.Price_Chg;

        const tdPercent = document.createElement("td");
        tdPercent.textContent = item.Percent;

        const tdVolume = document.createElement("td");
        tdVolume.textContent = item.Volume;

        tr.appendChild(tdCompany);
        tr.appendChild(tdPrice);
        tr.appendChild(tdPrice_chg);
        tr.appendChild(tdPercent);
        tr.appendChild(tdVolume);

        tablebody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

// * MUST ADD COMMENTS
// TODO: ADD Green color to text if Change is +
function Push_Losers() {
  ClearTable();
  fetch("./data/Losers_data.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tablebody = document.getElementById("content-1");

      data.forEach((item) => {
        const tr = document.createElement("tr");

        const tdCompany = document.createElement("td");
        tdCompany.textContent = item.Name;

        const tdPrice = document.createElement("td");
        tdPrice.textContent = item.Price;

        const tdPrice_chg = document.createElement("td");
        tdPrice_chg.textContent = item.Price_Chg;

        const tdPercent = document.createElement("td");
        tdPercent.textContent = item.Percent;

        const tdVolume = document.createElement("td");
        tdVolume.textContent = item.Volume;

        tr.appendChild(tdCompany);
        tr.appendChild(tdPrice);
        tr.appendChild(tdPrice_chg);
        tr.appendChild(tdPercent);
        tr.appendChild(tdVolume);

        tablebody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

// TODO: IMPELEMNT THE SECTORS SCREENER
function Push_Sectors() {}
// TODO: IMPLEMENT THE INDUSTRIES SCREENR
function Push_Industries() {}

function ClearTable() {
  const table = document.getElementById("content-1");
  table.innerHTML = " ";
}

function Calculate() {}

/*    const tablebody = document.getElementById("table1");

    const thead = document.createElement("thead");
    tablebody.appendChild(thead)

    const trh = document.createElement("tr")
    const Sector = document.createElement("th")
    Sector.textContent = "Sector"
    const Market_cap = document.createElement("th")
    Market_cap.textContent = "Market Cap"
    const Dividend_Yield_FWD = document.createElement("th")
    Dividend_Yield_FWD.textContent = "Dividend Yield FWD"
    const Percent = document.createElement("th")
    Percent.textContent = "Percent"
    const Volume = document.createElement("th")
    Volume.textContent = "Volume"
    thead.appendChild(trh)
    trh.appendChild(Sector)
    trh.appendChild(Market_cap)
    trh.appendChild(Dividend_Yield_FWD)
    trh.appendChild(Percent)
    trh.appendChild(Volume)*/

//#00a97f for green color
//#ff173e for red color