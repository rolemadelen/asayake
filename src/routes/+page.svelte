<script lang="ts">
  import Header from './Header.svelte'
  import { onMount } from 'svelte'

  let mainWrapper: HTMLElement;
  let prevImage = -1;
  let currImage = 0;
  let nextImage = 1;
  const numberOfImages = 14;
  let behavior: ScrollBehavior = 'smooth';

  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/bg/${key+1}.webp`);
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
    const isLeft = el.dataset.name === 'left'

    if((isLeft && currImage ===0) || (!isLeft && currImage === numberOfImages - 1)) {
      behavior = 'auto'
    }

    currImage = isLeft ? (currImage === 0 ? numberOfImages - 1 : currImage - 1) : (currImage + 1 ) % numberOfImages;

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

<main bind:this="{mainWrapper}" class='h(100vh) bg(--asa-red)'>
   <div class='absolute flex w(100vw) h(100vh) overflow-x(hidden)'>
    {#each preloadImageUrls as _, index }
      <div data-id={index+1}>
        <div class='w(100vw) h(100vh) relative cover transition-duration(5s) transition(background-position) @w(1024~):transition-duration(0s)'></div>
      </div>
    {/each}
  </div>
  <Header page="home" />
  <div class='absolute top(0) h(100%) w(100%) backdrop-filter(brightness(0.75)) transition-duration(0.5s)'>
    <div class='main absolute c(#fff) font(-/1.25) z(0)'>
      <div>
        <div class='font(3.75rem) bold'>Asayake Taiko</div>
        <div class='font(1rem) mt(0.25em) c(--gray-200)'>University of California, San Diego</div>
      </div>
      <div class='font(1rem) w(600) @w(~620):w(90%) mt(2em)'>Our mission statement is to increase Japanese cultural awareness both within and outside of the UCSD community through the art of taiko.</div>
    </div>
  </div>
  <div class="absolute right(50) bottom(50) none @w(1024~):hbox pack z(10)">
    <button  on:click={handleClick} data-name='left' class='pack w(32) h(32) mr(10) r(fill) transition-duration(0.2s) backdrop-filter(blur(2px)) bg(#fff.1) hover:bg(--red-asa)'>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6667 3.33325L6 9.99992L12.6667 16.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button on:click={handleClick} data-name='right' class='pack w(32) h(32) mr(10) r(fill) transition-duration(0.2s) backdrop-filter(blur(2px)) bg(#fff.1) hover:bg(--red-asa)'>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33333 3.33325L14 9.99992L7.33333 16.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="c(--gray-100) light">
      <span class="inline-block text(center) w(1.25em) font(2rem)">{currImage+1}</span> 
      <span class="inline-block font(0.875rem)">/ {numberOfImages}</span>
    </div>
  </div>
</main>

<style lang="scss">
:root {
  --red-asa: rgb(121,17,17);
  --gray-100: rgb(243, 244, 246);
  --gray-200: rgb(229, 231, 235);
}

.main {
  left: max(20px, px2vw(50));
  bottom: max(20px, px2vw(50));
}

</style>
