<script>
  import Header from "/src/routes/Header.svelte"
  import Footer from '../Footer.svelte'

  let currImage = 0
  let genBg
  let bodyBg
  const numberOfImages = 3
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/gens/${key+1}.jpg`)
  $: {
    if(bodyBg) {
      bodyBg.style.backgroundImage = `url('${preloadImageUrls[currImage]}')`
    }
    if(genBg) {
      genBg.src = preloadImageUrls[currImage]
    }
  }

  /*
  setInterval(() => {
    currImage = (currImage + 1) % numberOfImages
  }, 5000)
  */

</script>

<svelte:head>
  {#each preloadImageUrls as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>

<main class='main-wrapper'>
  <Header page="about">
  </Header>
  <div bind:this="{bodyBg}" class='body-bg rounded-tl-[80px] rounded-tr-[80px] text-gray-200 font-light'>
    <div class="bg-[#000000cc] min-h-screen h-full pt-20 pl-20 grid auto-rows-min grid-cols-2 gap-4 rounded-tl-[80px] rounded-tr-[80px] text-2xl leading-10">
      <div class='text-5xl font-semibold mb-8'>Who we are</div>
      <p>Asayake Taiko is a Japanese drumming group founded in the spring of 2002 at the University of California, San Diego campus.</p>
      <p>In spring of 2002, Bobby Koga, Reid Matsuoka and several other students came together to start a taiko group at the University of California, San Diego. With financial support from the university, the fledgling group purchased various equipment in order to construct the Japanese drums in garages of devoted members. In spring of 2004, Asayake Taiko at UCSD debuted with their completed drums at the 3rd Annual Nikkei Student Union Culture Show.</p>
      <div class='col-start-2 row-start-1 row-end-7 m-auto'>
        <img class='w-3/4 m-auto rounded-lg' bind:this={genBg} src="/gens/1.jpg" alt='gen'/>
      </div>
    </div>
  </div>
  <div class='body-bg body-bg2 text-gray-200 font-light'>
    <div class="bg-[#000000cc] min-h-screen h-full pt-20 pr-20 grid auto-rows-min grid-cols-2 gap-4 text-2xl leading-10">
      <p>Today, Asayake Taiko performs for on-campus cultural events, high school conferences, and various university functions. Likewise, Asayake Taiko aims to promote cultural awareness of Taiko to the greater San Diego area through performances and workshops at K-12 schools and other cultural functions.</p>
      <p>Each year, Asayake Taiko continues to grow in equipment and members to accomplish its mission statement: to promote cultural awareness not only in the UCSD campus community, but in the greater San Diego community as well.</p>
      <p>“Asayake” means “morning glow” in Japanese, and invokes the image of the early morning light playing on the ocean mist in La Jolla.</p>
      <div class='col-start-1 row-start-1 row-end-7 m-auto'>
        <img class='w-3/4 m-auto rounded-lg' src="/gens/2.jpg" alt='gen'/>
      </div>
    </div>
  </div>
  <Footer />
</main>


<style>
  main {
    font-family: 'Poppins', sans-serif;
  }

  .body-bg {
    width: 100%;
    background-color: #791111;
    transition: top 0.5s ease-in-out;
    background-image: url('/gens/1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .body-bg2 {
    background-image: url('/gens/2.jpg');
  }
</style>
