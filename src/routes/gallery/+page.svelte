<script lang="ts">
  import Header from '../Header.svelte';
  import Footer from '../Footer.svelte';
  import Cursor from '../Cursor.svelte';

  const numberOfImages = 34
  const numberOfImages2 = 13
  const totalImages = numberOfImages + numberOfImages2

  let preloadedImg: string[] = [];
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/gallery/gallery${key+1}.jpg`)
  $: preloadImageUrls2 = [...Array(numberOfImages2).keys()].map((key) => `/bg/webp/${key+1}.webp`)
  $: preloadedImg = [...preloadImageUrls, ...preloadImageUrls2];

  const handleClick = (e) => {
    const enlarge: HTMLDivElement | null = document.querySelector('.enlarge-section')
    const enlargedImg = enlarge!.children[0].children[0] as HTMLImageElement;
    let index = +(enlargedImg.alt.split('-')[1])

    if(e.currentTarget.dataset.action === 'close') {
      enlarge?.classList.add('hidden')
    } else if (e.currentTarget.dataset.action === 'left') {
      index = (index - 1) < 0 ? totalImages - 1 : index - 1
      enlargedImg.src = preloadedImg[index];
      enlargedImg.alt = `img-${index}`
    } else if (e.currentTarget.dataset.action === 'right') {
      index = (index + 1) % totalImages
      enlargedImg.src = preloadedImg[index]
      enlargedImg.alt = `img-${index}`
    } else {
      if(enlarge) {
        enlarge.classList.remove('hidden')
        enlargedImg.src = e.currentTarget.children[0].src
        enlargedImg.alt = e.currentTarget.children[0].alt
      }
    }
  }
</script>

<svelte:head>
  <title>Asayake Taiko | Gallery</title>
  {#each preloadImageUrls as image}
  <link rel="preload" as="image" href={image} />
  {/each}
  {#each preloadImageUrls2 as image}
  <link rel="preload" as="image" href={image} />
  {/each}
  <meta name="description" content="Asayake Taiko | Gallery" />
</svelte:head>

<Header page="gallery" />
<div class='banner-wrapper'>
  <div class='banner'>
    <h1>Gallery</h1>
  </div>
</div>
<div class='gallery-wrapper'>
  <span class='note'>*Click to Enlarge Image</span>
  <div class='gallery'>
    {#each preloadImageUrls as path, i}
    <div class='gallery-image' on:click={handleClick}>
      <img src="{path}" alt="img-{i}" />
    </div>
    {/each}
    {#each preloadImageUrls2 as path, i}
    <div class='gallery-image' on:click={handleClick}>
      <img src="{path}" alt="img-{i+34}" />
    </div>
    {/each}
  </div>
</div>
<div class="enlarge-section hidden">
  <div>
    <img src="" alt="enlarged" />
    <button class='close' data-action='close' on:click={handleClick}>
      <img src="/icons/close.svg" alt="close" />
    </button>
    <div class='nav'>
      <button class='left' data-action='left' on:click={handleClick}>
        <img src="/icons/left.svg" alt="left" />
      </button>
      <button class='right' data-action='right' on:click={handleClick}>
        <img src="/icons/right.svg" alt="right" />
      </button>
    </div>
  </div>
</div>
<Footer />

<style lang="scss">
  .banner-wrapper {
    padding-top: 80px;
  }
  .banner {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;

    h1 {
      color: #791111;
      font-size: px2rem(64);
      font-weight: bold;
    }
  }

  .note {
    display: block;
    font-size: px2rem(16);
    margin: 50px auto 25px;
    color: #777;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &-wrapper {
      margin: 100px auto;
      margin-left: 32px;
    }

    &-image {
      width: 300px;
      height: 150px;
      position: relative;
      overflow: hidden;
      margin-right: 11px;
      margin-bottom:30px;
      will-change: transform;
      transition: transform 0.5s ease;
      
      img {
        width: 100%;
        height: 100%;
      }
      
      &:hover {
        transform: scale(1.3);
        cursor: pointer;
        z-index: 10;
      }
    }
  }

  .enlarge-section {
    position: fixed;
    background-color: #000000cc;
    top: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;

    & > div {
      position: fixed;
      z-index: 1000;
      top: 50%;
      left: 50%;
      transform: translate(-50% ,-50%);
      width: 1000px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .close, .left, .right {
      top: -60px;
      width: 35px;
      height: 35px;
      position: fixed;
      z-index: 1001;
    }

    .nav {
      display: flex;

      .left {
        right: 6%;
      }
      .right {
        right: 0;
      }
    }
  }
</style>
