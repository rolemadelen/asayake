<script>
  import Header from '/src/routes/Header.svelte'
  import Footer from '/src/routes/Footer.svelte'
  import Cursor from '/src/routes/Cursor.svelte'

</script>

<Cursor />
<Header page="gallery" />
<main class='main-wrapper'>
</main>
<Footer />

<svelte:head>
  <title>Asayake Taiko | Members</title>
  <meta name="description" content="Asayake Taiko | Members" />
</svelte:head>

<style>
  main {
    font-family: 'Poppins', sans-serif;
  }
</style>
