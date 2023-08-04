<script>
  import Header from '/src/routes/Header.svelte'
  import Footer from '/src/routes/Footer.svelte'
  import Cursor from '/src/routes/Cursor.svelte'

  const numberOfImages = 34
  /**
   * @type {string[]}
   */
  let preloadImageUrls = []
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/gallery/gallery${key+1}.jpg`)

  const handleClick = (e) => {
    const enlarge = document.querySelector('.enlarge-section')

    if(e.currentTarget.dataset.action === 'close') {
      enlarge?.classList.add('hidden')
    } else {
      if(enlarge) {
        enlarge.classList.remove('hidden')
        enlarge.children[0].children[0].src= e.currentTarget.children[0].src
      }
    }
  }
</script>

<svelte:head>
  <title>Asayake Taiko | Gallery</title>
  {#each preloadImageUrls as image}
  <link rel="preload" as="image" href={image} />
  {/each}
  <meta name="description" content="Asayake Taiko | Gallery" />
</svelte:head>

<Header page="gallery" />
<section class='banner-wrapper'>
  <div class='banner'>
    <h1>Gallery</h1>
  </div>
</section>
<section class='gallery-wrapper'>
  <span class='note'>*Click to Enlarge Image</span>
  <div class='gallery'>
    {#each preloadImageUrls as path, i}
    <div class='gallery-image' on:click={handleClick}>
      <img src="{path}" alt="img-{i}" />
    </div>
    {/each}
  </div>
</section>
<section class="enlarge-section hidden">
  <div>
    <img src="" alt="enlarged" />
  </div>
  <button class='close' data-action='close' on:click={handleClick}>CLOSE</button>
</section>
<Footer />

<style lang="scss">
  @function px2vw($size, $bp: 1920) {
    @return calc($size / $bp * 100) * 1vw;
  }

  .banner-wrapper {
    padding-top: px2vw(80);
  }
  .banner {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: px2vw(300);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;

    background-color: #791111;
    color: #fff;

    h1 {
      font-size: px2vw(64);
      font-weight: bold;
    }
  }

  .note {
    display: block;
    font-size: px2vw(16);
    margin: px2vw(50) auto px2vw(25);
    color: #777;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;


    &-wrapper {
      margin: px2vw(100) auto;
      margin-left: px2vw(31.5);
    }

    &-image {
      width: px2vw(300);
      height: px2vw(150);
      position: relative;
      overflow: hidden;
      // display: inline-block;
      margin-right: px2vw(11);
      margin-bottom: px2vw(50);
      will-change: transform;
      transition: transform 0.5s ease;
      
      img {
        width: 100%;
        height: 100%;
        border-radius: px2vw(5);
      }
      
      &:hover {
        transform: scale(1.3);
        cursor: pointer;
        z-index: 10;
        
        & + div {
          transform: scale(1.08);
          z-index: 8;
          
          & + div {
            transform: scale(1.03);
            z-index: 6;
          }
        }
      }
    }
  }

  .enlarge-section {
    position: relative;

    div {
      position: fixed;
      background-color: #000000cc;
      top: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;

      img {
        position: fixed;
        width: 70%;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50% ,-50%);
      }
    }

    .close {
      position: fixed;
      z-index: 1001;
      color: #fff;
      top: 0;
      font-size: px2vw(20);
    }
  }
</style>
