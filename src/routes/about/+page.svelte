<script>
  import Header from "/src/routes/Header.svelte"
  import Footer from '../Footer.svelte'
  import Cursor from '../Cursor.svelte'

  let readMoreDiv;
  let toggleReadMore = false;
  const numberOfImages = 2;
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/about/${key+1}.jpg`)

  const handleMouseOver = (e) => {
    const c = document.querySelector('.hidden-gen')
    c.classList.add('opacity-100')
  }

  const handleMouseLeave = (e) => {
    const c = document.querySelector('.hidden-gen')
    c.classList.remove('opacity-100')
  }

  const handleClick = (e) => {
    readMoreDiv.classList.toggle('max-h-[5000px]');
    toggleReadMore = !toggleReadMore;
    
    if(toggleReadMore) {
      e.currentTarget.children[0].innerText = "Read Less";
      e.currentTarget.children[1].src = "/icons/up-arrow.svg";
    } else {
      e.currentTarget.children[0].innerText = "Read More";
      e.currentTarget.children[1].src = "/icons/down-arrow.svg";
    }

  }
</script>

<svelte:head>
  <title>Asayake Taiko | About</title>
  <meta name="description" content="Asayake Taiko | About" />
  {#each preloadImageUrls as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>

<Cursor />
<Header page="about" />
<main class='main-wrapper bg-black'>
  <video class="pc" src="/about/asayake-video-720.mp4" loop="true" autoplay="true" muted="true" playsinline="true"></video>
  <div class='h-[10rem] items-end :h-full flex justify-center lg:items-center relative bottom-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'>
    <span class='text-white lg:font-semibold text-xl lg:text-6xl'>About Us</span>
  </div>
</main>

<style>
  main {
    font-family: 'Poppins', sans-serif;
  }

  .body-bg,
  .body-bg2 {
    width: 100%;
    background-color: #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .body-bg {
    xbackground-image: url('/about/webp/1.webp');
  }
  video {
    position: absolute;
    top: 0;
    width: 100%;
    margin: auto auto;
    z-index: -1;
    filter: brightness(70%);
  }
</style>
