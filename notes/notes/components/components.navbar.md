# [navbar]

.Structure
* .navbar
    * .navbar-brand
        * .navbar-burger
    * .navbar-menu
        * .navbar-start
        * .navbar-end
            * a.navbar-item
            * div.navbar-item
                * a.navbar-link
                * .navbar-dropdown
                    * .navbar-item
                    * .navbar-divider

```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

.Brand
* .navbar-burger as last item
```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
```

.Convert to Cross
* span.navbar-burger.is-active

.Menu
* hidden on touch
* add .is-active to show

```js
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
```

```js
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
```

.Navbar Item
* Link
* Brand Logo
* Parent of Dropdown
* Child of a navbar dropdown
* Container for anything like field
* [a] or [div]

```html
<a class="navbar-item">
  Home
</a>
```

```html
<a class="navbar-item">
  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
</a>
```

```html
<div class="navbar-item has-dropdown">
  <a class="navbar-link">
    Docs
  </a>

  <div class="navbar-dropdown">
    <!-- Other navbar items -->
  </div>
</div>
```

```html
<div class="navbar-dropdown">
  <a class="navbar-item">
    Overview
  </a>
</div>
```

```html
<div class="navbar-item">
  <div class="field is-grouped">
    <p class="control">
      <a class="button">
        <span class="icon">
          <i class="fas fa-twitter" aria-hidden="true"></i>
        </span>
        <span>Tweet</span>
      </a>
    </p>
    <p class="control">
      <a class="button is-primary">
        <span class="icon">
          <i class="fas fa-download" aria-hidden="true"></i>
        </span>
        <span>Download</span>
      </a>
    </p>
  </div>
</div>
```

.Modifiers
* .navbar-item.is-expanded
* .navbar-item.is-tab

.Transparent
* .navbar.is-transparent

.Fixed Top Bottom
* .navbar.is-fixed-top
* .navbar.is-fixed-bottom
* .html.has-navbar-fixed-top

.Menu Dropdown
* .navbar-item.has-dropdown
* .navbar-link 
* .navbar-dropdown
    * .navbar-divider, .navbar-item

```html
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 0.9.1
      </div>
    </div>
  </div>
</nav>
```

.States
* .navbar-item.has-dropdown.is-hoverable >> opens on hover
* .navbar-item.has-dropdown.is-active >> is open

.Right
* .navbar-dropdown.is-right
DropUp
* .navbar-item.has-dropdown.has-dropdown-up
Arrowless
* .navbar-link.is-arrowless
Boxed for Transparent
* .navbar-dropdown.is-boxed

.Divider
* hr.navbar-divider

.Colors
* .navbar.is-primary

Spaced
* .navbar.is-spaced
