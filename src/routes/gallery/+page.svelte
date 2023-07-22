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

    const nav = document.querySelector('.carouselNav')
    setTimeout(() => {
      carousel.classList.remove('opacity-0')
    }, 100)

    setTimeout(() => {
      nav.classList.add('!translate-y-0')
    }, 500)
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
    const carouselImg = document.querySelector(`[data-carousel-id="${carouselId}"]`)
    carouselImg.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
</script>

<svelte:window on:resize={handleResize} />

<svelte:head>
  <title>Asayake Taiko | Gallery</title>
  <meta name="description" content="Asayake Taiko | Gallery" />
</svelte:head>

<Cursor />
<Header page="gallery" />
<main class='main-wrapper m-auto h-full md:h-screen bg-black'>
 <div bind:this="{carousel}" class='hidden carousel md:flex overflow-hidden z-30 opacity-0 duration-300'>
    {#each Array(numberOfImages) as _, index (index)}
      <div>
        <div class='w-screen h-screen relative bg-center' data-carousel-id="{index+1}"></div>
      </div>
    {/each}
  </div>

  <div class='carouselNav translate-y-[100%] md:fixed bottom-0 flex flex-col md:flex-row h-full md:h-32 md:overflow-x-scroll z-40 duration-300 transition-transform'>
    {#each Array(numberOfImages) as _, index (index)}
      <img data-id="{index+1}" src={`/gallery/gallery${index+1}.jpg`} alt="asayake" class="md:cursor-pointer hover:border-asa-red md:opacity-60 hover:opacity-100 duration-300" on:click={handleClick} />
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
    touch-action: none;
    -webkit-overflow-scrolling: none;
    overscroll-behavior: none;
  }
</style>
