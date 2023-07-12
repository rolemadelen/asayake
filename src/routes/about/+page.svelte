<script>
  import Header from "/src/routes/Header.svelte"
  import Cursor from '../Cursor.svelte'
  import Footer from '../Footer.svelte'

  let mouse = {x:0, y:0};
  let currImage = 0;
  let genBg;
  let bodyBg;
  const numberOfImages = 7;
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/gens/${key+1}.jpg`)
  $: {
    if(bodyBg) {
      bodyBg.style.backgroundImage = `url('${preloadImageUrls[currImage]}')`
    }
    if(genBg) {
      genBg.src = preloadImageUrls[currImage];
    }
  }

  setInterval(() => {
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

</script>

<svelte:head>
  {#each preloadImageUrls as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>

<Cursor />
<main class='main-wrapper' on:mousemove={handleMouseMove}>
  <div class='wrapper'>
    <a href="/" on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave}>
      <img src="/asayake-logo.png" alt="logo" class="logo"/>
    </a>
    <Header page="about" on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave}/>
  </div>
  <div bind:this="{bodyBg}" class='body-bg'>
    <div class="body">
      <div class='title'>Who we are</div>
      <p>Asayake Taiko is a Japanese drumming group founded in the spring of 2002 at the University of California, San Diego campus.</p>
      <p>In spring of 2002, Bobby Koga, Reid Matsuoka and several other students came together to start a taiko group at the University of California, San Diego. With financial support from the university, the fledgling group purchased various equipment in order to construct the Japanese drums in garages of devoted members. In spring of 2004, Asayake Taiko at UCSD debuted with their completed drums at the 3rd Annual Nikkei Student Union Culture Show.</p>
      <p>Today, Asayake Taiko performs for on-campus cultural events, high school conferences, and various university functions. Likewise, Asayake Taiko aims to promote cultural awareness of Taiko to the greater San Diego area through performances and workshops at K-12 schools and other cultural functions.</p>
      <p>Each year, Asayake Taiko continues to grow in equipment and members to accomplish its mission statement: to promote cultural awareness not only in the UCSD campus community, but in the greater San Diego community as well.</p>
      <p>“Asayake” means “morning glow” in Japanese, and invokes the image of the early morning light playing on the ocean mist in La Jolla.</p>
    </div>
      <div class='gen'>
        <img bind:this={genBg} src="/gens/1.jpg" alt='gen'/>
    </div>
    <Footer />
  </div>
</main>

<style>
  main {
    font-family: 'Poppins', sans-serif;
  }

  .wrapper {
    max-width: 1920px;
  }

  .logo {
    position: absolute;
    top: 34px;
    left: 128px;
    width: 200px;
  }

  .body {
    border-radius: 100px 100px 0 0;
    padding: 96px 0 0 256px;
    color: #fff;
    font-weight: 300;
    height: 100vh;
    backdrop-filter: blur(3px) brightness(0.35);
  }

  .body-bg {
    position: absolute;
    top: 130px;
    width: 100%;
    border-radius: 100px 100px 0 0;
    background-color: #791111;
    transition: top 0.5s ease-in-out;
    background-image: url('/gens/1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .body .title {
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 64px;
  }

  .body p {
    line-height: 1.5;
    width: 40%;
    margin-bottom: 2rem;
  }

  .gen img {
    position: absolute;
    right: clamp(150px, 10rem, 200px);
    top: 235px;
    width: clamp(600px, 38rem, 750px);
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .wrapper a {
    cursor: none;
  }
</style>
