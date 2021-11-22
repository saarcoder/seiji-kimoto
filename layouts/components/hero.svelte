<script>
  export let link, image;
</script>

<section>
  <div class="cover-container d-flex w-100 h-100 flex-column text-center">
    <img src="assets{image}" alt="Two people looking at websites" />
    <div>
      <a href={link.url} class="btn btn-primary btn-hero">{link.title}</a>
    </div>
  </div>
</section>

<style>
  .btn-hero {
    margin-top: -5rem;
  }
</style>
