<script>
  import Header from './Header.svelte'
  import Cursor from './Cursor.svelte'
  import { onMount } from 'svelte'

  let mainWrapper
  let currImage = 0
  const numberOfImages = 14
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/bg/${key+1}.jpg`)
  $: {
    if(mainWrapper)
      mainWrapper.style.backgroundImage = `url('${preloadImageUrls[currImage]}')`
  }

  let interval = setInterval(() => {
    currImage = (currImage + 1) % numberOfImages
  }, 5000)

  onMount(() => {
    mainWrapper.style.backgroundImage = `url('${preloadImageUrls[currImage]}')`
  })

  const handleClick = (e) => {
    clearInterval(interval);
    if(e.currentTarget.dataset.name === 'left')
      currImage = currImage == 0 ? numberOfImages - 1 : (currImage - 1)
    else 
      currImage = (currImage + 1) % numberOfImages

    interval = setInterval(() => {
      currImage = (currImage + 1) % numberOfImages
    }, 5000)
  }

</script>

<svelte:head>
  {#each preloadImageUrls as image}
    <link rel="preload" as="image" href={image} />
  {/each}
  <meta name="description" content="Asayake Taiko | University of California San Diego" />
</svelte:head>

<Cursor />
<main bind:this="{mainWrapper}"  class='main-wrapper h-screen bg-asa-red bg-cover bg-no-repeat bg-center'>
  <div class='h-full backdrop-brightness-75'>
    <Header page="home">
      <svelte:fragment slot="logo">
        <div class="flex-1"></div>
      </svelte:fragment>
    </Header>
    <div class='absolute bottom-16 left-16'>
      <div class='opacity-90 text-white leading-5'>
        <div>
          <div class='text-6xl font-semibold'>Asayake Taiko</div>
          <div class='mt-3 mb-8 ml-1 font-light text-sm'>University of California, San Diego</div>
        </div>
        <div>
          <div class='w-[40rem] font-light'>Our mission statement is to increase Japanese cultural awareness both within and outside of the UCSD community through the art of taiko.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute right-16 bottom-16 flex items-center justify-center text-sm">
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
