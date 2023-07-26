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
<main class='main-wrapper'>
  <div class='body-bg text-white font-light'>
    <div class="bg-black flex justify-center items-center bg-opacity-80">
      <div class='max-w-screen-xl grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-4 m-auto px-8 py-20 '>
        <div>
          <div class='text-4xl font-medium mb-2'>Who we are</div>
          <p class='mb-10'>
            Asayake Taiko is a Japanese drumming group founded in the spring of 2002 at the University of California, San Diego campus. Our mission statement is to increase Japanese cultural awareness both within and outside of the UCSD community through taiko.
          </p>
          <div class='text-4xl font-medium mt-8 mb-2'>Our name</div>
          <p>"Asayake" means "morning glow" in Japanese, and invokes the image of the early morning light playing on the ocean mist in La Jolla.</p>
        </div>
        <div role='button' tabindex='0' class='mt-8 md:mt-0 cursor-none relative m-auto' on:mouseover={handleMouseOver} on:mouseleave={handleMouseLeave} on:focus>
          <picture>
            <source srcset="/about/webp/3.webp" type="image/webp" />
            <source srcset="/about/3.jpg" type="image/jpeg" />
            <img class='w-full md:w-4/5 m-auto rounded-lg' src="/about/3.jpg" loading="lazy" decoding="async" alt='gen'/>
          </picture>
          <picture>
            <source srcset="/about/webp/2.webp" type="image/webp" />
            <source srcset="/about/2.jpg" type="image/jpeg" />
            <img class='hidden-gen w-full md:w-4/5 mx-auto rounded-lg absolute right-[50%] top-[50%] translate-x-1/2 -translate-y-1/2 opacity-0 will-change-transform duration-300' src="/about/2.jpg" loading="lazy" decoding="async" alt='gen'/>
          </picture>
        </div>
      </div>
    </div>
  </div>
  <div class='body-bg2 text-white font-light'>
    <div class="flex justify-center items-center pt-8 pb-20 bg-white opacity-[0.95] text-[#222]">
      <div class='max-w-screen-xl grid auto-rows-min grid-cols-1 gap-4 m-auto px-8'>
        <div class='text-4xl font-medium mt-10'>History</div>
        <p>In spring of 2002, Bobby Koga, Reid Matsuoka and several other students came together to start a taiko group at the University of California, San Diego. With financial support from the university, the fledgling group purchased various equipment in order to construct the Japanese drums in garages of devoted members. In spring of 2004, Asayake Taiko at UCSD debuted with their completed drums at the 3rd Annual Nikkei Student Union Culture Show.</p>
        <p>Today, Asayake Taiko performs for on-campus cultural events, high school conferences, and various university functions. Likewise, Asayake Taiko aims to promote cultural awareness of Taiko to the greater San Diego area through performances and workshops at K-12 schools and other cultural functions.</p>
        <p>Each year, Asayake Taiko continues to grow in equipment and members to accomplish its mission statement: to promote cultural awareness not only in the UCSD campus community, but in the greater San Diego community as well.</p>
        <div bind:this="{readMoreDiv}" class='max-h-0 overflow-hidden duration-500'>
          <div>
            <div class='text-4xl font-medium mb-4 mt-10'>Origin</div>
            <div class='grid grid-cols-1 md:grid-cols-2'>
              <p class='mb-8'>Taiko, meaning "drum", refers to a large family of Japanese percussive instruments. Traditional taiko had its use as a part of warfare, theater, festivals, and religious ceremonies. However, the art of taiko as we know it today can be traced back to Daihachi Oguchi in 1951. As a jazz drummer, Oguchi took traditional taiko music and arranged them to be performed as a group. This new ensemble style of taiko became known as kumi-daiko, which quickly spread to the rest of Japan and the world. Notable kumi-daiko ensembles that originated in Japan include Oguchi's own Osuwa Daiko, Oedo Sukeroku Daiko, Kodo, and Wadaiko Yamato.</p>
              <picture>
                <source srcset="/about/webp/oguchi.webp" type="image/webp" />
                <source srcset="/about/oguchi.jpg" type="image/jpeg" />
                <img class='rounded-lg m-auto w-4/5' src="/about/oguchi.jpg" alt="Daihachi Oguchi" />
            </picture>
            </div>
          </div>
          <div class='grid grid-cols-1 md:grid-cols-2 md:gap-14 mb-4 md:mb-8'>
            <div>
              <div class='text-4xl font-medium mb-4 mt-10'>Spread</div>
              <p>Since its inception, kumi-daiko has become the dominant form of taiko performance outside of Japan. The spread of taiko in the United States started in the 1960s, when Seiichi Tanaka founded the San Francisco Taiko Dojo. This was closely followed by other groups such as Kinnara Taiko and San Jose Taiko. The taiko community continued to grow as groups began to be founded as university and college organizations. In 1990, Kyodo Taiko was founded on the campus of the University of California, Los Angeles, becoming the first collegiate taiko group.</p>
            </div>
            <div>
              <div class='text-4xl font-medium mb-4 mt-10'>Today</div>
              <p>The growth of the taiko community continues today, through the founding of new groups, as well as the art form receiving more mainstream attention. Taiko has been featured in performances such as Cirque du Soleil and at events such as the Academy Awards and the Grammy Awards. Professional ensembles have gone on to tour the entire world, bringing the art of taiko to a wider audience. Events such as the North American Taiko Conference and the Intercollegiate Taiko Invitational has further facilitated the growth of the taiko community by bringing together performers from all over the country in order to learn from one another.</p>
            </div>
          </div>
        </div>
        <button type='button' class="mt-4 btn w-32 rounded-lg text-sm shadow-asa-red shadow-sm m-auto" on:click={handleClick}>
          <span>
          Read More
          </span>
          <img src="/icons/down-arrow.svg" width="18" alt="down arrow" />
        </button>
      </div>
    </div>
  </div>
</main>
<Footer />

<style>
  main {
    font-family: 'Poppins', sans-serif;
  }

  .body-bg,
  .body-bg2 {
    width: 100%;
    background-color: #791111;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .body-bg {
    background-image: url('/about/webp/1.webp');
  }
</style>
