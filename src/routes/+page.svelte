<script>
  import Hero from './Hero.svelte'
  import Header from './Header.svelte'
  import Cursor from './Cursor.svelte'

  let mainWrapper
  let mouse = {x:0, y:0};
  let currImage = 0
  const numberOfImages = 14
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/bg/${key+1}.jpg`)
  $: {
    if(mainWrapper) {
      mainWrapper.style.backgroundImage = `url('${preloadImageUrls[currImage]}')`
    }
  }
  let interval = setInterval(() => {
    currImage = (currImage + 1) % numberOfImages
  }, 5000)

  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    document.querySelector('.cursor').style.top = `${mouse.y-10}px`
    document.querySelector('.cursor').style.left = `${mouse.x-10}px`
  }

  const handleMouseOver = (e) => {
    const c = document.querySelector('.cursor');
    c.style.width = "30px";
    c.style.height = "30px";
  }
  const handleMouseLeave = (e) => {
    const c = document.querySelector('.cursor');
    c.style.width = "0px";
    c.style.height = "0px";
  }

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
</svelte:head>

<Cursor />
<main bind:this="{mainWrapper}" on:mousemove={handleMouseMove} class='main-wrapper'>
  <div class='wrapper'>
    <div class='body'>
      <Header page="home" on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave}/>
    </div>
    <Hero />
  </div>
  <div class="pagination">
    <button on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave} on:click={handleClick} data-name='left'> ˂ </button>
    <button on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave} on:click={handleClick} data-name='right'> ˃ </button>
    <div class='number'>
      <span>{currImage+1}</span> / <span>{numberOfImages}</span>
    </div>
</div>
</main>

<style>
  .pagination {
    font-weight: 300;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    color: #eee;
    font-size: 14px;
  }

  .pagination .number span {
    display: inline-block;
    width: 15px;
    text-align: center;
  }

  .wrapper {
    width: 100vw;
    height: 100vh;
    backdrop-filter: brightness(0.75);
    color: #eee;
  }

  .main-wrapper {
    background-color: #791111;
    font-family: 'Poppins', sans-serif;

    background-image: url('/bg/1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 100vw;
  }

  button {
    background-color: #ffffff11;
    color: #eee;
    border-radius: 999px;
    width: 30px;
    height: 30px;
    border: 1px solid #791111;
    backdrop-filter: blur(3px);
    margin-right: 0.5rem;
    transition: background-color 0.2s ease;
    font-size: 14px;
    cursor: none;
  }

  button:hover {
    background-color: #791111;
    color: #ccc;
  }
</style>
