<script lang="ts">
  import Cursor from './Cursor.svelte'
  import Header from './Header.svelte'
  import { onMount } from 'svelte'

  let mainWrapper: HTMLElement;
  let prevImage = -1;
  let currImage = 0;
  let nextImage = 1;
  const numberOfImages = 14;
  let behavior: ScrollBehavior = 'smooth';

  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/bg/webp/${key+1}.webp`);
  $: {
    if(mainWrapper) {
      const prev = document.querySelector(`[data-id="${prevImage+1}"]`) as HTMLElement;
      const curr = document.querySelector(`[data-id="${currImage+1}"]`) as HTMLElement;
      const next = document.querySelector(`[data-id="${nextImage+1}"]`) as HTMLElement;

      if(prev) (prev.children[0] as HTMLElement).style.backgroundPositionX = "0px";
      (curr.children[0] as HTMLElement).style.backgroundPositionX = "0px";
      if(next) (next.children[0] as HTMLElement).style.backgroundPositionX = "0px";

      const isMobile = window.innerHeight > window.innerWidth;

      if(currImage === 0) behavior = 'auto';

      curr.scrollIntoView({behavior: `${behavior}`, block: 'nearest', inline: 'center' })
      const w = window.innerWidth
      if(isMobile && w <= 1023) {
        (curr.children[0] as HTMLElement).style.backgroundPositionX = `-${Math.min(550,w)}px`;
      } 
    }
    behavior = 'smooth'
  }

  let interval = setInterval(() => {
    prevImage = currImage;
    currImage = (currImage + 1) % numberOfImages;
    nextImage = currImage + 1;
  }, 5000)

  onMount(() => {
    document.querySelectorAll('[data-id]').forEach((el, index) => {
      (el.children[0] as HTMLElement).style.backgroundImage = `url('${preloadImageUrls[index]}')`;
      (el.children[0] as HTMLElement).style.backgroundPositionX = '0px';
    })
    document.querySelector(`[data-id="${currImage+1}"]`)?.scrollIntoView({ behavior, block: 'nearest', inline: 'center' })
  })

  const handleClick = (e: MouseEvent) => {
    clearInterval(interval)
    const el = e.currentTarget as HTMLElement;

    if(el.dataset.name === 'left') {
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

  const handleResize = () => {
    const el = document.querySelector(`[data-id="${currImage+1}"]`) as HTMLElement;
    if(window.innerWidth > 1023) {
      (el.children[0] as HTMLElement).style.backgroundPositionX = "0px"
    }
    el.scrollIntoView({block: 'nearest', inline: 'center' })
  }
</script>

<svelte:window on:resize={handleResize} />
<svelte:head>
  {#each preloadImageUrls as image}
    <link rel="preload" as="image" href={image} />
  {/each}
  <meta name="description" content="Asayake Taiko | University of California San Diego" />
</svelte:head>

<main bind:this="{mainWrapper}" class='main-wrapper h-screen bg-asa-red'>
   <div class='absolute flex w-screen h-screen overflow-x-hidden'>
    {#each preloadImageUrls as _, index }
      <div data-id={index+1}>
        <div class='w-screen h-screen relative bg-cover lg:bg-center transition-[background-position] duration-[5s] lg:duration-0'></div>
      </div>
    {/each}
  </div>
  <Header page="home" />
  <div class='absolute h-full w-full top-0 backdrop-brightness-75 duration-500'>
    <div class='main absolute text-white leading-tight z-0'>
      <div class='main-title'>
        <div class='name font-bold'>Asayake Taiko</div>
        <div class='school text-gray-200'>University of California, San Diego</div>
      </div>
      <div class='mission'>Our mission statement is to increase Japanese cultural awareness both within and outside of the UCSD community through the art of taiko.</div>
    </div>
  </div>
  <div class="pagination absolute hidden lg:flex items-center justify-center z-10">
    <button  on:click={handleClick} data-name='left' class='transition-colors duration-200 backdrop-blur-sm bg-white bg-opacity-10 hover:bg-asa-red'>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6667 3.33325L6 9.99992L12.6667 16.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button on:click={handleClick} data-name='right' class='transition-colors duration-200 backdrop-blur-sm bg-white bg-opacity-10 hover:bg-asa-red'>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33333 3.33325L14 9.99992L7.33333 16.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="numbering text-gray-100 font-light">
      <span class="inline-block text-center">{currImage+1}</span> 
      <span class="inline-block">/ {numberOfImages}</span>
    </div>
  </div>
</main>

<style lang="scss">
.main {
  left: max(20px, px2vw(50));
  bottom: max(20px, px2vw(50));

  &-title {
    .name {
      font-size: px2rem(60)
    }
    .school {
      font-size: px2rem(16);
      margin-top: px2em(4, 16);
    }
  }
  .mission {
    font-size: px2rem(16);
    width: min(90%, 600px);
    margin-top: px2em(32, 16);
  }
}

.pagination {
  right: 50px;
  bottom: 50px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 999px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .numbering {
    & > span:first-child {
      width: px2em(40, 32);
      font-size: px2rem(32);
    }

    & > span:last-child {
      font-size: px2rem(14);
      color: #eee;
    }
  }
}

</style>
