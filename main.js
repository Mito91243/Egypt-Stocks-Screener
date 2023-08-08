document.getElementById("Gainers").addEventListener("click", Push_Gainers);
document.getElementById("Losers").addEventListener("click", Push_Losers);
document.getElementById("Sectors").addEventListener("click", Push_Gainers);
document.getElementById("Industries").addEventListener("click", Push_Gainers);

function Push_Gainers() {
  ClearTable();
  fetch("gainers_data.json") // Replace with the correct path to your JSON file
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

function Push_Losers() {
  ClearTable();
  fetch("Losers_data.json") // Replace with the correct path to your JSON file
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

function ClearTable() {
  const table = document.getElementById("content-1");
  table.innerHTML = " ";
}

