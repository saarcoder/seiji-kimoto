<script>
  export let title, body, image, unterschrift;
</script>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <figure class="mb-4">
          <img
            src="assets/{image.src}"
            alt={image.alt}
            class="img-fluid w-100 rounded"
          />
          <figcaption class="text-right mt-2">{unterschrift}</figcaption>
        </figure>
        <h2 class="mb-4">{title}</h2>
        <p>{@html body}</p>
      </div>
    </div>
  </div>
</section>
