document.addEventListener("DOMContentLoaded", Push_Data_EG);
document.addEventListener("DOMContentLoaded", Push_Sectors);
document.addEventListener("DOMContentLoaded", Push_Industries);
document.addEventListener("DOMContentLoaded", Push_Gainers);


const ksa = document.getElementById("ksa");
ksa.addEventListener("click", Push_Data_KSA);
const EG = document.getElementById("eg");
EG.addEventListener("click", Push_Data_EG);
const UAE = document.getElementById("uae");
UAE.addEventListener("click", Push_Data_UAE);

// * MUST ADD COMMENTS
// TODO: ADD Green color to text if Change is +
function Push_Data_EG() {
  fetch("./data/Stocks_EG.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tablebody = document.getElementById("stock-data");
      tablebody.innerHTML = " ";

      data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.classList.add("hover:bg-gray-600");
        const tdCompany = document.createElement("td");
        tdCompany.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "w-1/5",
          "truncate"
        );

        const tdiv = document.createElement("div");

        const ticker = document.createElement("h2");
        ticker.classList.add("font-medium", "text-gray-800", "dark:text-white");
        ticker.textContent = item.Ticker;

        let name = document.createElement("p");
        name.setAttribute("id", "name");
        name.classList.add(
          "text-sm",
          "font-normal",
          "text-gray-600",
          "dark:text-gray-400"
        );
        name.textContent = item.Name;

        if (
          name.textContent.includes(
            "GENERAL COMPANY FOR LAND RECLAMATION,DEVELOPMENT"
          )
        )
          name.textContent = "GENERAL COMPANY FOR LAND RECLAMATION";
        tdCompany.appendChild(tdiv);
        tdiv.appendChild(ticker);
        tdiv.appendChild(name);

        const tdPrice = document.createElement("td");
        tdPrice.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdPrice.textContent = item.Price;

        let tdPrice_chg = document.createElement("td");
        tdPrice_chg.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap"
        );

        tdPrice_chg.textContent = item.Price_Chg;

        const tdPercent = document.createElement("td");
        tdPercent.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap"
        );
        tdPercent.textContent = item.Percent;
        let temp = parseFloat(item.Percent.slice(0, -1));

        const tdVolume = document.createElement("td");
        tdVolume.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdVolume.textContent = item.Volume;

        const tdRating = document.createElement("td");
        tdRating.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdRating.textContent = item.Rating;

        if (temp > 0) {
          tdPercent.classList.add("text-green-500");
          tdPrice_chg.classList.add("text-green-500");
        } else {
          tdPercent.classList.add("text-red-500");
          tdPrice_chg.classList.add("text-red-500");
        }

        tr.appendChild(tdCompany);
        tr.appendChild(tdPrice);
        tr.appendChild(tdPrice_chg);
        tr.appendChild(tdPercent);
        tr.appendChild(tdVolume);
        tr.appendChild(tdRating);
        tablebody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function Push_Data_KSA() {
  fetch("./data/Stocks_KSA.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tablebody = document.getElementById("stock-data");
      tablebody.innerHTML = " ";
      data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.classList.add("hover:bg-gray-600");
        const tdCompany = document.createElement("td");
        tdCompany.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "w-1/5",
          "truncate"
        );

        const tdiv = document.createElement("div");

        const ticker = document.createElement("h2");
        ticker.classList.add("font-medium", "text-gray-800", "dark:text-white");
        ticker.textContent = item.Ticker;

        let name = document.createElement("p");
        name.classList.add(
          "text-sm",
          "font-normal",
          "text-gray-600",
          "dark:text-gray-400"
        );
        name.textContent = item.Name;

        if (
          name.textContent.includes(
            "GENERAL COMPANY FOR LAND RECLAMATION,DEVELOPMENT"
          )
        )
          name.textContent = "GENERAL COMPANY FOR LAND RECLAMATION";
        tdCompany.appendChild(tdiv);
        tdiv.appendChild(ticker);
        tdiv.appendChild(name);

        const tdPrice = document.createElement("td");
        tdPrice.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdPrice.textContent = item.Price;

        let tdPrice_chg = document.createElement("td");
        tdPrice_chg.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap"
        );

        tdPrice_chg.textContent = item.Price_Chg;

        const tdPercent = document.createElement("td");
        tdPercent.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap"
        );
        tdPercent.textContent = item.Percent;
        let temp = parseFloat(item.Percent.slice(0, -1));

        const tdVolume = document.createElement("td");
        tdVolume.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdVolume.textContent = item.Volume;

        const tdRating = document.createElement("td");
        tdRating.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdRating.textContent = item.Rating;

        if (temp > 0) {
          tdPercent.classList.add("text-green-500");
          tdPrice_chg.classList.add("text-green-500");
        } else {
          tdPercent.classList.add("text-red-500");
          tdPrice_chg.classList.add("text-red-500");
        }

        tr.appendChild(tdCompany);
        tr.appendChild(tdPrice);
        tr.appendChild(tdPrice_chg);
        tr.appendChild(tdPercent);
        tr.appendChild(tdVolume);
        tr.appendChild(tdRating);
        tablebody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function Push_Data_UAE() {
  fetch("./data/Stocks_UAE.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tablebody = document.getElementById("stock-data");
      tablebody.innerHTML = " ";
      data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.classList.add("hover:bg-gray-600");
        const tdCompany = document.createElement("td");
        tdCompany.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "w-1/5",
          "truncate"
        );

        const tdiv = document.createElement("div");

        const ticker = document.createElement("h2");
        ticker.classList.add("font-medium", "text-gray-800", "dark:text-white");
        ticker.textContent = item.Ticker;

        let name = document.createElement("p");
        name.classList.add(
          "text-sm",
          "font-normal",
          "text-gray-600",
          "dark:text-gray-400"
        );
        name.textContent = item.Name;

        if (
          name.textContent.includes(
            "GENERAL COMPANY FOR LAND RECLAMATION,DEVELOPMENT"
          )
        )
          name.textContent = "GENERAL COMPANY FOR LAND RECLAMATION";
        tdCompany.appendChild(tdiv);
        tdiv.appendChild(ticker);
        tdiv.appendChild(name);

        const tdPrice = document.createElement("td");
        tdPrice.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdPrice.textContent = item.Price;

        let tdPrice_chg = document.createElement("td");
        tdPrice_chg.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap"
        );

        tdPrice_chg.textContent = item.Price_Chg;

        const tdPercent = document.createElement("td");
        tdPercent.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap"
        );
        tdPercent.textContent = item.Percent;
        let temp = parseFloat(item.Percent.slice(0, -1));

        const tdVolume = document.createElement("td");
        tdVolume.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdVolume.textContent = item.Volume;

        const tdRating = document.createElement("td");
        tdRating.classList.add(
          "px-4",
          "py-4",
          "text-sm",
          "font-medium",
          "whitespace-nowrap",
          "text-white"
        );
        tdRating.textContent = item.Rating;

        if (temp > 0) {
          tdPercent.classList.add("text-green-500");
          tdPrice_chg.classList.add("text-green-500");
        } else {
          tdPercent.classList.add("text-red-500");
          tdPrice_chg.classList.add("text-red-500");
        }

        tr.appendChild(tdCompany);
        tr.appendChild(tdPrice);
        tr.appendChild(tdPrice_chg);
        tr.appendChild(tdPercent);
        tr.appendChild(tdVolume);
        tr.appendChild(tdRating);
        tablebody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function Push_Sectors() {
  fetch("./data/Sectors.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tablebody = document.getElementById("table-sectors");
      data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.classList.add(
          "transition",
          "duration-300",
          "ease-in-out",
          "hover:bg-neutral-100",
          "dark:border-neutral-500",
          "dark:hover:bg-neutral-300"
        );

        const tdRank = document.createElement("td");
        tdRank.classList.add(
          "whitespace-nowrap",
          "px-6",
          "py-4",
          "font-medium"
        );
        tdRank.textContent = item.Rank;

        const tdName = document.createElement("td");
        tdName.classList.add("whitespace-nowrap", "px-6", "py-4");
        tdName.textContent = item.Name;

        const tdPercent = document.createElement("td");
        tdPercent.classList.add(
          "whitespace-nowrap",
          "px-6",
          "py-4",
          "font-medium",
          "text-green-600"
        );
        tdPercent.textContent = item.Percent;

        tablebody.appendChild(tr);
        tr.appendChild(tdRank);
        tr.appendChild(tdName);
        tr.appendChild(tdPercent);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function Push_Industries() {
  fetch("./data/Industries.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tablebody = document.getElementById("table-industries");

      data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.classList.add(
          "transition",
          "duration-300",
          "ease-in-out",
          "hover:bg-neutral-100",
          "dark:border-neutral-500",
          "dark:hover:bg-neutral-300"
        );

        const tdRank = document.createElement("td");
        tdRank.classList.add(
          "whitespace-nowrap",
          "px-6",
          "py-4",
          "font-medium"
        );
        tdRank.textContent = item.Rank;

        const tdName = document.createElement("td");
        tdName.classList.add("whitespace-nowrap", "px-6", "py-4");
        tdName.textContent = item.Name;

        const tdPercent = document.createElement("td");
        tdPercent.classList.add(
          "whitespace-nowrap",
          "px-6",
          "py-4",
          "font-medium",
          "text-green-600"
        );
        tdPercent.textContent = item.Percent;

        tablebody.appendChild(tr);
        tr.appendChild(tdRank);
        tr.appendChild(tdName);
        tr.appendChild(tdPercent);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}

function Push_Gainers() {
    fetch("./data/Top_Gainers.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tablebody = document.getElementById("table-gainers");

      data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.classList.add(
          "transition",
          "duration-300",
          "ease-in-out",
          "hover:bg-neutral-100",
          "dark:border-neutral-500",
          "dark:hover:bg-neutral-300"
        );

        const tdRank = document.createElement("td");
        tdRank.classList.add(
          "whitespace-nowrap",
          "px-6",
          "py-4",
          "font-medium"
        );
        tdRank.textContent = item.Rank;

        let tdName = document.createElement("td");
        tdName.classList.add("whitespace-nowrap", "px-6", "py-4");
        tdName.textContent = item.Name.slice(0,25) + '...';

        const tdPercent = document.createElement("td");
        tdPercent.classList.add(
          "whitespace-nowrap",
          "px-6",
          "py-4",
          "font-medium",
          "text-green-600"
        );
        tdPercent.textContent = item.Percent;

        tablebody.appendChild(tr);
        tr.appendChild(tdRank);
        tr.appendChild(tdName);
        tr.appendChild(tdPercent);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
}