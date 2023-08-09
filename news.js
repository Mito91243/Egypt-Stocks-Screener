document.addEventListener('DOMContentLoaded',Push_News)

function Push_News() {
    fetch("../data/News.json")
      .then((response) => response.json())
      .then((data) => {
        const feed = document.querySelector(".news");
  
        data.forEach((item) => {
          const newsrow = document.createElement("div");
          newsrow.classList.add("news-row");
          
          const headline = document.createElement('span')
          headline.id ='headline'
          headline.textContent = item.Headline
          
          const time = document.createElement('span')
          time.id = 'time'
          time.textContent = item.Source
  
  
          newsrow.appendChild(time)
          newsrow.appendChild(headline)
          feed.appendChild(newsrow)
        });
      });
  }