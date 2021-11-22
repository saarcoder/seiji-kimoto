<script>
  export let link;
  function handleClick() {
    let height = document.querySelector(".cover-container").offsetHeight;
    window.scrollTo({
      top: height,
      left: 0,
      behavior: "smooth",
    });
  }
</script>

<section class="cover-container d-flex w-100 h-100 text-center">
  <div>
    <div on:click={handleClick} class="btn btn-primary btn-hero">
      {link.title}
    </div>
  </div>
</section>

<style>
  .cover-container {
    background-image: url(/assets/Portrait.jpg);
    background-size: cover;
    background-position: 15% 20%;
    flex-direction: column;
    justify-content: flex-end;
  }
  .btn-hero {
    margin-top: -5rem;
  }
</style>
