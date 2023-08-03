<script>
  import Header from '../Header.svelte';
  import Footer from '../Footer.svelte'
  import Cursor from '../Cursor.svelte'
  import { onMount } from "svelte";

  /**
   * @type {HTMLDivElement}
   */
  let logoSlide;
  /**
   * @type {HTMLSectionElement}
   */
  let logo;
  
  /**
  * @type {HTMLDivElement}
  */
  let readMoreDiv;
  let toggleReadMore = false;
  const numberOfImages = 2;
  $: preloadImageUrls = [...Array(numberOfImages).keys()].map((key) => `/about/${key+1}.jpg`)

  const handleClick = (e) => {
    toggleReadMore = !toggleReadMore;
    document.querySelector('.read-more')?.classList.toggle('!mb-0');
    readMoreDiv.classList.toggle('!max-h-[100vh]')
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

  onMount(() => {
    let copy = logoSlide.cloneNode(true)
    logo.appendChild(copy)
  })
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

  <section bind:this="{logo}" class='logos'>
    <div bind:this="{logoSlide}" class="logo-slide">
      <img src="/about/temp/1.jpg" alt="asa1"/>
      <img src="/about/temp/2.jpg" alt="asa2"/>
      <img src="/about/temp/3.jpg" alt="asa3"/>
      <img src="/about/temp/4.jpg" alt="asa4"/>
      <img src="/about/temp/5.jpg" alt="asa5"/>
      <img src="/about/temp/6.jpg" alt="asa6"/>
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
      <div class='cell'>
        <div class='read-more-title'>Spread</div>
        <div class='read-more-content'>Since its inception, kumi-daiko has become the dominant form of taiko performance outside of Japan. The spread of taiko in the United States started in the 1960s, when Seiichi Tanaka founded the San Francisco Taiko Dojo. This was closely followed by other groups such as Kinnara Taiko and San Jose Taiko. The taiko community continued to grow as groups began to be founded as university and college organizations. In 1990, Kyodo Taiko was founded on the campus of the University of California, Los Angeles, becoming the first collegiate taiko group.</div>
      </div>
      <div class='cell'>
        <div class='read-more-title'>Today</div>
        <div class='read-more-content'>The growth of the taiko community continues today, through the founding of new groups, as well as the art form receiving more mainstream attention. Taiko has been featured in performances such as Cirque du Soleil and at events such as the Academy Awards and the Grammy Awards. Professional ensembles have gone on to tour the entire world, bringing the art of taiko to a wider audience. Events such as the North American Taiko Conference and the Intercollegiate Taiko Invitational has further facilitated the growth of the taiko community by bringing together performers from all over the country in order to learn from one another.</div>
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
    bottom: px2vw(50);
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: px2vw(15);
    height: px2vw(23);
    border: 1px solid #d9d9d9;
    border-radius: px2vw(8);
    box-shadow: 0 1px 3px 0 white;
    animation: slideUp 1.5s ease;

    &::before {
      content: "";
      color: red;
      position: absolute;
      background-color: #d9d9d9;
      width: px2vw(3);
      height: px2vw(4);
      border-radius: 999px;
      top: px2vw(3);
      left: 50%;
      transform: translateX(-50%);
      animation: slideDown 1s infinite ease;
    }
    &::after {
      content: "scroll";
      font-size: px2vw(12);
      color: #d9d9d9;
      position: absolute;
      bottom: px2vw(-32);
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: px2vw(64);
    color: #fff;
    font-weight: bold;
    opacity: 0.8;
  }

  .section {
    margin: px2vw(120) px2vw(32);
    display: flex;

    &-title {
      display: flex;
      align-items: flex-start;
      flex: 0.5;
      line-height: 1;

      div > div:nth-child(1) {
        font-size: px2vw(64);
        font-weight: 600;
        margin-right: px2vw(10);
      }

      div > div:nth-child(2) {
        font-size: px2vw(20);
        color: #333;
      }
    }

    &-content {
      flex: 0.5;
      font-size: px2vw(24);
      line-height: 1.5;

      p {
        margin-bottom: px2vw(20);
      }
    }
  }

  .logos {
    &:hover {
      .logo-slide {
        animation-play-state: paused;
      }
    }

    &::before,
    &::after {
      position: absolute;
      top: 0;
      width: px2vw(100);
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

    height: px2vw(300);
    overflow-x: hidden;
    white-space: nowrap;
    position: relative;

    .logo-slide {
      display: inline-block;
      // width: px2vw(2432);
      // width: calc(482px * 6);
      animation: 15s slide infinite linear;
      margin: 0;
      
      img {
        width: px2vw(450);
        height: px2vw(300);
        margin: 0 16px 0 16px;
        border-radius: 5px;
        display: inline;
      }
    }
  }
  
  .read-more-button {
    display: flex;
    justify-content: center;
    margin-bottom: px2vw(120);

    button {
      box-shadow: 1px 1px 5px 0px black;
      width: px2vw(200);
      height: px2vw(50);
      font-size: px2vw(18);
      background-color: #791111;
      color: #fff;
      font-weight: 500;
      border-radius: px2vw(5);
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
      column-gap: px2vw(0);
      row-gap: px2vw(60);
    }

    img {
      width: px2vw(783);
      height: px2vw(476);
      border-radius: px2vw(5);
    }
    
    &-title {
      font-size: px2vw(64);
      font-weight: 600;
      line-height: 1;
      margin-bottom: px2vw(10);
    }

    &-content {
      padding-right: px2vw(120);
      font-size: px2vw(24);
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
      top: px2vw(5);
      opacity: 1;
    }
    to {
      top: px2vw(13);
      opacity: 0.1;
    }
  }
  @keyframes slideUp {
    from {
      bottom: px2vw(-50);
    }
    to {
      bottom: px2vw(50);
    }
  }
</style>
