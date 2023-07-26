<script>
  import Cursor from './Cursor.svelte'
  import Header from './Header.svelte'
  import { onMount } from 'svelte'

  let mainWrapper
  let prevImage = -1
  let currImage = 0
  let nextImage = 1
  const numberOfImages = 13
  let behavior = 'smooth'

  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/bg/webp/${key+1}.webp`)
  $: {
    if(mainWrapper) {
      const prev = document.querySelector(`[data-id="${prevImage+1}"]`);
      const curr = document.querySelector(`[data-id="${currImage+1}"]`);
      const next = document.querySelector(`[data-id="${nextImage+1}"]`);

      if(prev) prev.children[0].style.backgroundPositionX = "0px"
      curr.children[0].style.backgroundPositionX = "0px"
      if(next) next.children[0].style.backgroundPositionX = "0px"

      const isMobile = window.innerHeight > window.innerWidth

      if(currImage === 0) behavior = 'auto'

      curr.scrollIntoView({behavior: `${behavior}`, block: 'nearest', inline: 'center' })
      const w = window.innerWidth
      if(isMobile && w <= 1023) {
        curr.children[0].style.backgroundPositionX = `-${Math.min(550,w)}px`
      } 
    }
    behavior = 'smooth'
  }

  let interval = setInterval(() => {
    prevImage = currImage
    currImage = (currImage + 1) % numberOfImages
    nextImage = currImage + 1
  }, 5000)

  onMount(() => {
    document.querySelectorAll('[data-id]').forEach((el, index) => {
      el.children[0].style.backgroundImage = `url('${preloadImageUrls[index]}')`
      el.children[0].style.backgroundPositionX = '0px'
    })
    document.querySelector(`[data-id="${currImage+1}"]`).scrollIntoView({ behavior, block: 'nearest', inline: 'center' })
  })

  const handleClick = (e) => {
    clearInterval(interval)
    if(e.currentTarget.dataset.name === 'left') {
      if(currImage === 0) behavior = 'auto'
      currImage = currImage === 0 ? numberOfImages - 1 : currImage - 1
    } else {
      if(currImage === numberOfImages - 1) behavior = 'auto'
      currImage = (currImage + 1) % numberOfImages
    }

    interval = setInterval(() => {
      prevImage = currImage
      currImage = (currImage + 1) % numberOfImages
      nextImage = currImage + 1
    }, 5000)
  }

  const handleResize = (e) => {
    const curr = document.querySelector(`[data-id="${currImage+1}"]`);
    if(window.innerWidth > 1023) {
      curr.children[0].style.backgroundPositionX = "0px"
    }
    curr.scrollIntoView({block: 'nearest', inline: 'center' })
  }
</script>

<svelte:window on:resize={handleResize} />
<svelte:head>
  {#each preloadImageUrls as image}
    <link rel="preload" as="image" href={image} />
  {/each}
  <meta name="description" content="Asayake Taiko | University of California San Diego" />
</svelte:head>

<Cursor />
<main bind:this="{mainWrapper}" class='main-wrapper h-screen bg-asa-red'>
   <div class='absolute flex w-screen h-screen overflow-x-hidden'>
    {#each preloadImageUrls as image, index }
      <div data-id={index+1}>
        <div class='w-screen h-screen relative bg-cover lg:bg-center transition-[background-position] duration-[5s] lg:duration-0'></div>
      </div>
    {/each}
  </div>
  <div class='h-full w-full backdrop-brightness-75 duration-500'>
    <Header page="home" />
    <div class='absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-16 md:left-16 z-10'>
      <div class='opacity-90 text-white leading-5'>
        <div>
          <div class='text-4xl md:text-6xl font-semibold'>Asayake Taiko</div>
          <div class='md:mt-3 mb-8 ml-1 text-gray-300 font-light text-sm'>University of California, San Diego</div>
        </div>
        <div>
          <div class='w-[20rem] text-sm md:w-[30rem] lg:w-[40rem] font-light'>Our mission statement is to increase Japanese cultural awareness both within and outside of the UCSD community through the art of taiko.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute right-16 bottom-16 hidden lg:flex items-center justify-center text-sm">
    <button  on:click={handleClick} data-name='left' class='transition-colors duration-200 backdrop-blur-sm bg-white bg-opacity-10 hover:bg-asa-red w-8 h-8 rounded-full flex justify-center items-center mr-3'>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6667 3.33325L6 9.99992L12.6667 16.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button on:click={handleClick} data-name='right' class='transition-colors duration-200 backdrop-blur-sm bg-white bg-opacity-10 hover:bg-asa-red w-8 h-8 rounded-full flex justify-center items-center mr-3'>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33333 3.33325L14 9.99992L7.33333 16.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="text-gray-100 font-light">
      <span class="inline-block text-3xl w-8 text-center">{currImage+1}</span> 
      <span class="inline-block text-sm">/ {numberOfImages}</span>
    </div>
</div>
</main>
