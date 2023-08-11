<script lang="ts">
  import Header from '../Header.svelte';
  import Footer from '../Footer.svelte'
  import Cursor from '../Cursor.svelte'
  import { onMount } from "svelte";

  let imageSlide: HTMLDivElement
  let imageElem: HTMLElement
  let readMoreDiv: HTMLDivElement
  let toggleReadMore = false
  const numberOfImages = 2

  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/about/${key+1}.jpg`)

  const handleClick = (e) => {
    toggleReadMore = !toggleReadMore;
    document.querySelector('.read-more')?.classList.toggle('!mb-0');
    readMoreDiv.classList.toggle('!max-h-[200vh]')
    e.currentTarget.classList.toggle('!bg-white');
    e.currentTarget.classList.toggle('!text-[#791111]');
    
    if(toggleReadMore) {
      e.currentTarget.innerText = "Read Less";
      // e.currentTarget.children[1].src = "/icons/up-arrow.svg";
    } else {
      e.currentTarget.innerText = "Read More";
      // e.currentTarget.children[1].src = "/icons/down-arrow.svg";
    }
  }

  // onMount(() => {
  //   let copy = imageSlide.cloneNode(true)
  //   imageElem.appendChild(copy)
  // })
</script>

<svelte:head>
  <title>Asayake Taiko | About</title>
  <meta name="description" content="Asayake Taiko | About" />
  <!-- {#each preloadImageUrls as image}
    <link rel="preload" as="image" href={image} />
  {/each} -->
</svelte:head>

<Header page="about" />
<main class='main-wrapper'>
  <section class="relative w-full overflow-x-hidden h-screen bg-white">
    <video class="pc w-full h-full" src="/about/asayake-video-720.mp4" loop autoplay muted playsinline></video>
    <div class='title'>About Us</div>
    <span class='mouse-scroll'></span>
  </section>
  <section class='section'>
    <div class='flex'>
      <div class='section-title'>
        <div class="flex items-center">
          <div>Asayake</div>
          <div>あさやけ</div>
        </div>
      </div>
      <div class="section-content">
        <p>Asayake Taiko is a Japanese drumming group founded in the spring of 2002 at the University of California, San Diego campus. Our mission statement is to increase Japanese cultural awareness both within and outside of the UCSD community through taiko.</p>
        <p>"Asayake" means "morning glow" in Japanese, and invokes the image of the early morning light playing on the ocean mist in La Jolla.</p>
      </div>
    </div>
  </section>

  <section bind:this="{imageElem}" class='images'>
    <div bind:this="{imageSlide}" class="image-slide max-w-full whitespace-nowrap">
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/1.jpg" alt="asa1"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/2.jpg" alt="asa2"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/3.jpg" alt="asa3"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/4.jpg" alt="asa4"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/5.jpg" alt="asa5"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/6.jpg" alt="asa6"/>
      </div>
    </div>
    <div bind:this="{imageSlide}" class="image-slide max-w-full whitespace-nowrap">
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/1.jpg" alt="asa1"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/2.jpg" alt="asa2"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/3.jpg" alt="asa3"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/4.jpg" alt="asa4"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/5.jpg" alt="asa5"/>
      </div>
      <div class="inline-flex justify-center items-center mx-4">
        <img src="/about/temp/6.jpg" alt="asa6"/>
      </div>
    </div>
  </section>

  <section class='section'>
    <div class='flex'>
      <div class='section-title'>
        <div class="flex items-center">
          <div>History</div>
        </div>
      </div>
      <div class="section-content">
        <p>In spring of 2002, Bobby Koga, Reid Matsuoka and several other students came together to start a taiko group at the University of California, San Diego. With financial support from the university, the fledgling group purchased various equipment in order to construct the Japanese drums in garages of devoted members. In spring of 2004, Asayake Taiko at UCSD debuted with their completed drums at the 3rd Annual Nikkei Student Union Culture Show.</p>
        <p>Each year, Asayake Taiko continues to grow in equipment and members to accomplish its mission statement: to promote cultural awareness not only in the UCSD campus community, but in the greater San Diego community as well.</p>
        <p>Today, Asayake Taiko performs for on-campus cultural events, high school conferences, and various university functions. Likewise, Asayake Taiko aims to promote cultural awareness of Taiko to the greater San Diego area through performances and workshops at K-12 schools and other cultural functions.</p>
      </div>
    </div>
  </section>

  <section class='section read-more flex flex-col overflow-hidden !mb-0'>
    <div bind:this="{readMoreDiv}" class='read-more-wrapper grid grid-cols-2 w-full mx-auto'>
      <img src="/about/webp/oguchi.webp" alt="oguchi" class='cell' />
      <div class='cell'>
        <div class='read-more-title'>Origin</div>
        <div class='read-more-content'>Taiko, meaning "drum", refers to a large family of Japanese percussive instruments. Traditional taiko had its use as a part of warfare, theater, festivals, and religious ceremonies. However, the art of taiko as we know it today can be traced back to Daihachi Oguchi in 1951. As a jazz drummer, Oguchi took traditional taiko music and arranged them to be performed as a group. This new ensemble style of taiko became known as kumi-daiko, which quickly spread to the rest of Japan and the world. Notable kumi-daiko ensembles that originated in Japan include Oguchi's own Osuwa Daiko, Oedo Sukeroku Daiko, Kodo, and Wadaiko Yamato.</div>
      </div>
      <div class='col-span-2 !mt-20 !my-8'>
        <div class='flex'>
          <div class='section-title'>
            <div class="flex items-center">
              <div>Spread</div>
            </div>
          </div>
          <div class="section-content">
            <p>  Since its inception, kumi-daiko has become the dominant form of taiko performance outside of Japan. The spread of taiko in the United States started in the 1960s, when Seiichi Tanaka founded the San Francisco Taiko Dojo. This was closely followed by other groups such as Kinnara Taiko and San Jose Taiko. The taiko community continued to grow as groups began to be founded as university and college organizations. In 1990, Kyodo Taiko was founded on the campus of the University of California, Los Angeles, becoming the first collegiate taiko group.</p>
          </div>
        </div>
      </div>
      <div class='col-span-2 !my-8'>
        <div class='flex'>
          <div class='section-title'>
            <div class="flex items-center">
              <div>Today</div>
            </div>
          </div>
          <div class="section-content">
            <p>The growth of the taiko community continues today, through the founding of new groups, as well as the art form receiving more mainstream attention. Taiko has been featured in performances such as Cirque du Soleil and at events such as the Academy Awards and the Grammy Awards. Professional ensembles have gone on to tour the entire world, bringing the art of taiko to a wider audience. Events such as the North American Taiko Conference and the Intercollegiate Taiko Invitational has further facilitated the growth of the taiko community by bringing together performers from all over the country in order to learn from one another.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <div class='read-more-button'>
    <button on:click={handleClick}>Read More</button>
  </div>
</main>

<Footer />

<style lang="scss">
  @function px2vw($size, $bp: 1920) {
    @return calc($size / $bp * 100) * 1vw;
  }
  @function px2rem($size, $root_size: 16) {
    @return calc($size / $root_size) * 1rem;
  }

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin: auto auto;
    z-index: -1;
    filter: brightness(70%);
  }
  
  .mouse-scroll {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 15px;
    height: 23px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 white;
    animation: slideUp 1.5s ease;

    &::before {
      content: "";
      color: red;
      position: absolute;
      background-color: #d9d9d9;
      width: 3px;
      height: 4px;
      border-radius: 999px;
      top: 3px;
      left: 50%;
      transform: translateX(-50%);
      animation: slideDown 1s infinite ease;
    }
    &::after {
      content: "scroll";
      font-size: 12px;
      color: #d9d9d9;
      position: absolute;
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    color: #fff;
    font-weight: bold;
    opacity: 0.8;
  }

  .section {
    margin: 120px 64px;
    display: flex;

    &-title {
      display: flex;
      align-items: flex-start;
      flex: 0.5;
      line-height: 1;

      div > div:nth-child(1) {
        font-size: 64px;
        font-weight: 600;
        margin-right: 10px;
      }

      div > div:nth-child(2) {
        font-size: 20px;
        color: #333;
      }
    }

    &-content {
      flex: 0.5;
      font-size: 24px;
      line-height: 1.5;

      p {
        margin-bottom: 20px;
      }
    }
  }

  .images {
    white-space: nowrap;
    display: inline-flex;

    &:hover {
      .image-slide {
        animation-play-state: paused;
      }
    }

    &::before,
    &::after {
      position: absolute;
      top: 0;
      width: 100px;
      height: 100%;
      content: "";
      z-index: 10;
    }
    &::before {
      left: 0;
      background: linear-gradient(to left, rgba(255,255,255,0), white)
    }
    &::after {
      right: 0;
      background: linear-gradient(to right, rgba(255,255,255,0), white)
    }

    height: 300px;
    position: relative;

    .image-slide {
      animation: 20s slide infinite linear;
      width: 2465px;
      
      img {
        width: 375px;
        height: 250px;
        border-radius: 5px;
      }
    }
  }
  
  .read-more-button {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;

    button {
      box-shadow: 1px 1px 5px 0px black;
      width: 200px;
      height: 50px;
      font-size: 18px;
      background-color: #791111;
      color: #fff;
      font-weight: 500;
      border-radius: 5px;
      transition: all 0.5s ease;
    }
  }

  .read-more {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
    
    &-wrapper {
      max-height: 0px;
      transition: max-height 0.5s linear;
    }
    
    & > div {
      column-gap: 0;
      row-gap: 60px;
    }

    img {
      width: 783px;
      height: 476px;
      border-radius: 5px;
    }
    
    &-title {
      font-size: 64px;
      font-weight: 600;
      line-height: 1;
      margin-bottom: 20px;
    }

    &-content {
      font-size: 24px;
      line-height: 1.5;
    }
  }
  @keyframes slide {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes slideDown {
    from {
      top: 5px;
      opacity: 1;
    }
    to {
      top: 13px;
      opacity: 0.1;
    }
  }
  @keyframes slideUp {
    from {
      bottom: -50px;
    }
    to {
      bottom: 50px;
    }
  }
</style>
