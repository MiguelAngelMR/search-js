const searchForm = document.getElementById("search-form");
      const resultsList = document.getElementById("results");
      const searchInput = document.querySelector("#searchInput");
      // searchForm.addEventListener("submit", async (event) => {
      //   event.preventDefault();
      //   const query = event.target.elements.query.value;
      //   const response = await fetch(
      //     `https://api.themoviedb.org/3/search/movie?api_key=385c267521e37fd81b5567b14f3af403&query=${query}`
      //   );
      //   const data = await response.json();
      //   const results = data.results;
      //   resultsList.innerHTML = "";
      //   var html = "";
      //   results.forEach((result) => {
      //     console.log(result);
      //     const listItem = document.createElement("li");
      //     listItem.textContent = result.title;
      //     resultsList.appendChild(listItem);
      //   });
      // });
      searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value;

        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=cc8cf395`)
          .then((response) => response.json())
          .then((data) => {
            // resultsList.innerHTML = "";
            data.Search.forEach((movie) => {
              // const li = document.createElement("li");
              // const img = document.createElement("img");
              // const a = document.createElement("a");
              // img.src = movie.Poster;
              // img.alt = `${movie.Title} poster`;
              // a.href = `https://www.youtube.com/watch?v=${movie.imdbID}`;
              // a.textContent = `${movie.Title}`;
              // li.appendChild(img);
              // li.appendChild(a);
              console.log(movie);
              const div = document.createElement("div");
              div.innerHTML = `<div class="card card-list-movie mb-2 mx-2 ">
                <div class="row g-0 align-items-center">
                  <div class="col-md-3 col-lg-2 col-sm-3 col-12">
                    <img src="${movie.Poster}" class="img-fluid rounded-start" alt="${movie.Title} poster">
                  </div>
                  <div class="col-md-9 col-lg-10 col-sm-9 col-12">
                    <div class="card-body d-flex flex-row justify-content-between align-items-center">
                      <div class="d-flex flex-column">
                      <a class="text-left" target="_blank" href="https://www.youtube.com/watch?v=${movie.imdbID}">
                        <h1 class="card-title">${movie.Title}</h1>
                      </a>
                      <p class="card-text">Type: ${movie.Type}</p>
                      <p class="card-text">Year: ${movie.Year}</p>
                      </div>
                      <a class="card-a btn" target="_blank" href="https://www.youtube.com/watch?v=${movie.imdbID}">
                        <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L16 16L1 31" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>`;
              resultsList.appendChild(div);
            });
          });
      });