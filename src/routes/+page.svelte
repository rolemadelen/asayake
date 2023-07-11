<script>
  import Hero from './Hero.svelte'
  import Header from './Header.svelte'
  import { onMount } from 'svelte';

  let bgPos = 0;
  let mainWrapper;

  const numberOfImages = 14;
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/bg/${key+1}.jpg`);
  $: {
    if(mainWrapper) {
      mainWrapper.style.backgroundImage = `url('${preloadImageUrls[bgPos]}')`
    }
  }

  setInterval(() => {
    bgPos = (bgPos + 1) % numberOfImages;
  }, 5000)
</script>

<svelte:head>
  {#each preloadImageUrls as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>


<main bind:this="{mainWrapper}" class='main-wrapper'>
  <div class='wrapper'>
    <div class='body'>
      <Header page="home" />
    </div>
    <Hero />
  </div>
</main>

<style>
  .wrapper {
    width: 100vw;
    height: 100vh;
    backdrop-filter: brightness(0.75);
    color: #eee;
  }

  .main-wrapper {
    background-color: #b7302d;
    font-family: 'Roboto', sans-serif;

    background-image: url('/bg/1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 100vw;
  }
  .wrapper {
    max-width: 1920px;
  }
</style>
