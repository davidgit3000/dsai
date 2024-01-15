document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the JSON file
  fetch("/dsai/events/future-events.json")
    .then((response) => response.json())
    .then((data) => {
      // Access the data and put it in the DOM
      const container = document.getElementById("future-events");

      for (let val of data) {
        let carouselItems = "";

        if (val.images && Array.isArray(val.images)) {
          val.images.forEach((image, index) => {
            if (index === 0) {
              carouselItems += `
              <div class="carousel-item active" data-bs-interval="4000">
                <img src=${image} class="d-block w-100"/>
              </div>
            `;
            } else {
              carouselItems += `
              <div class="carousel-item" data-bs-interval="3000">
                <img src=${image} class="d-block w-100"/>
              </div>
            `;
            }
          });
        }

        container.innerHTML += `
        <div class="col">
          <div class="card text-bg-info shadow mb-3">
            <div class="carousel slide" data-bs-ride="carousel">
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

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

function getWeekRange(date, timezone) {
  const currentDate = date instanceof Date ? date : new Date();

  // Create a new Date object with the specified timezone
  const adjustedDate = new Date(
    currentDate.toLocaleString("en-US", { timeZone })
  );

  // Calculate the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday) in the specified timezone
  const dayOfWeek = adjustedDate.getUTCDay();

  // Calculate the start and end dates of the week
  const startDate = new Date(adjustedDate);
  startDate.setUTCDate(
    adjustedDate.getUTCDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
  ); // Adjust for Sunday

  const endDate = new Date(startDate);
  endDate.setUTCDate(startDate.getUTCDate() + 6);

  // Format the dates as strings with the specified timezone
  const options = {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedStartDate = formatter.format(startDate);
  const formattedEndDate = formatter.format(endDate);

  // Return the week range string
  return `${formattedStartDate} - ${formattedEndDate}`;
}

// Example usage: Get the week range for the current date in a specific timezone
const timeZone = "America/Los_Angeles"; // Replace with your desired timezone
const weekRange = getWeekRange(new Date(), timeZone);
console.log(weekRange);
