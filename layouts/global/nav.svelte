<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <a href=".">
    <img src="assets/logo.png" alt="Logo Seiji Kimoto" />
  </a>

  <button
    class="navbar-toggler border-0 collapsed"
    type="button"
    data-toggle="collapse"
    data-target="#navigation"
    aria-expanded="false"
  >
    <i class="ti-menu h3" />
  </button>

  <div class="navbar-collapse text-center collapse" id="navigation" style="">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link" href="arbeiten">Arbeiten</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="ausstellungen">Ausstellungen</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="interpretationen">Interpretation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="publikationen">Publikationen</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="kuenstler">Künstler</a>
      </li>
    </ul>
  </div>
</nav>

<style>
  ul {
    background-color: transparent;
    opacity: 0.85;
    padding: 15px 30px;
    margin: 0 auto 30px;
  }
  li {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0 0 45px;
  }
  a.nav-link {
    text-align: center;
    margin: 0 1rem;
    padding: 0;
    transition: left 300ms ease-out, right 300ms ease-out;
    position: relative;
  }
  a.nav-link::before {
    left: 50%;
  }
  a.nav-link::after {
    right: 50%;
  }
  a.nav-link::before,
  a.nav-link::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    width: 0px;
    height: 3px;
    margin: 5px 0 0;
    transition: width 300ms ease-out, opacity 300ms ease-out;
    opacity: 0;
    background-color: darkred;
  }
  li:hover a::before,
  li:hover a::after {
    width: 50%;
    opacity: 1;
  }
</style>
