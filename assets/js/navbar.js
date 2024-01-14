// Load Navbar in pages
document.getElementById("page-header").innerHTML = `
    <nav class="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="./assets/img/dsai_logo.png" width="50" height="50" />
          CPP Data Science & AI Club
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="./events/future-events.html"
                    >Future Events</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="./events/event-archive.html"
                    >Event Archive</a
                  >
                </li>
                <!-- <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here for now</a></li> -->
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./meet-the-board/index.html">Meet the Board</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contact-us/index.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`;
