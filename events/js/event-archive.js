document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the JSON file
  fetch("/dsai/events/event-archive.json")
    .then((response) => response.json())
    .then((data) => {
      // Access the data and put it in the DOM
      const container = document.getElementById("event-archive");

      for (let val of data) {
        let carouselItems = "";

        if (val.images && Array.isArray(val.images)) {
          val.images.forEach((image, index) => {
            carouselItems +=
              index === 0
                ? `
                <div class="carousel-item active">
                  <img src=${image} class="d-block w-100"/>
                </div>
              `
                : `
                <div class="carousel-item">
                  <img src=${image} class="d-block w-100"/>
                </div>
              `;
          });
        }

        container.innerHTML += `
          <div class="col">
            <div class="card text-bg-info shadow">
              <div id="imagesCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  ${carouselItems}

                  <button 
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#imagesCarousel"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
              
                  <button 
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#imagesCarousel"
                    data-bs-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                </div>

              </div>
              
              <div class="card-body">
                <div class="accordion" id="accordionContainer">
                  <div class="accordion-item">
                    <div class="accordion-header">
                      <button
                        class="accordion-button collapsed pb-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#${val.targetId}"
                        aria-expanded="false"
                        aria-controls="${val.targetId}"
                      >
                        <div class="px-2">
                          <h5>${val.category}</h5>
                          <p>${val.name}</p>
                        </div>
                      </button>
                    </div>
                    <div
                      id="${val.targetId}"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionContainer"
                    >
                      <div class="accordion-body">
                        <p class="card-text"><span class="fw-bold">Event Name:</span> ${val.name}</p>
                        <p class="card-text"><span class="fw-bold">Date:</span> ${val.date}</p>
                        <p class="card-text"><span class="fw-bold">Location:</span> ${val.location}</p>
                        <p class="card-text"><span class="fw-bold">Description:</span> ${val.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        `;
      }
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});
