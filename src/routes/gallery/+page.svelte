<script>
  import Header from '/src/routes/Header.svelte'
  import Footer from '/src/routes/Footer.svelte'
  import Cursor from '/src/routes/Cursor.svelte'


  const numberOfImages = 34;
</script>

<Cursor />
<Header page="gallery" />
<main class='main-wrapper'>
  <div class='grid grid-cols-3'>
    {#each Array(numberOfImages) as _, index (index)}
      <img src={`/gallery/gallery${index+1}.jpg`} alt="asayake" />
    {/each}
  </div>
</main>
<Footer />

<svelte:head>
  <title>Asayake Taiko | Gallery</title>
  <meta name="description" content="Asayake Taiko | Gallery" />
</svelte:head>

<style>
  main {
    font-family: 'Poppins', sans-serif;
  }
</style>
