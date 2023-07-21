<script>
  import Header from '/src/routes/Header.svelte'
  import Footer from '/src/routes/Footer.svelte'
  import Cursor from '/src/routes/Cursor.svelte'
  import { onMount } from 'svelte'

  const numberOfImages = 34;
  let carousel;
  let carouselId = 1;

  onMount(() => {
    document.querySelector("[data-id='1']").classList.add('selected')

    document.querySelectorAll("[data-carousel-id]").forEach((el, index) => {
      el.style.backgroundImage = `url(/gallery/gallery${index+1}.jpg)`
    })
  })

  const handleClick = (e) => {
    document.querySelector('.selected').classList.remove('selected')
    carouselId = e.currentTarget.dataset.id 
    carousel.children[0].src = `/gallery/gallery${carouselId}.jpg`
    e.currentTarget.classList.add('selected');

    const carouselImg = document.querySelector(`[data-carousel-id="${carouselId}"]`)
    carouselImg.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  const handleResize = (e) => {
    setTimeout(() => {
      const carouselImg = document.querySelector(`[data-carousel-id="${carouselId}"]`)
      carouselImg.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }, 150)
  }
</script>

<svelte:window on:resize={handleResize } />

<svelte:head>
  <title>Asayake Taiko | Gallery</title>
  <meta name="description" content="Asayake Taiko | Gallery" />
</svelte:head>

<Cursor />
<Header page="gallery" />
<main class='main-wrapper m-auto h-full md:h-screen bg-black'>
  <div bind:this="{carousel}" class='hidden carousel md:flex overflow-hidden'>
    {#each Array(numberOfImages) as _, index (index)}
      <div>
        <div class='w-screen h-screen' data-carousel-id="{index+1}"></div>
      </div>
    {/each}
  </div>

  <div class='md:fixed bottom-0 flex flex-col md:flex-row h-full md:h-32 md:overflow-x-scroll'>
    {#each Array(numberOfImages) as _, index (index)}
      <img data-id="{index+1}" src={`/gallery/gallery${index+1}.jpg`} alt="asayake" class="md:cursor-pointer hover:border-asa-red md:opacity-60 hover:opacity-100 duration-200" on:click={handleClick} />
    {/each}
  </div>
  <div class='md:hidden'>
    <Footer />
  </div>
</main>

<style>
  main {
    font-family: 'Poppins', sans-serif;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  :global(.selected) {
    opacity: 1 !important;
  }

  .carousel div {
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
