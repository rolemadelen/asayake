<script>
  import Header from '../Header.svelte';
  import Footer from '../Footer.svelte'
  import Cursor from '../Cursor.svelte'

  const concerts = [
    {
      year: 2023,
      title: 'Hazakura'
    },
    {
      year: 2022,
      title: 'Taiko Story'
    },
    {
      year: 2021,
      title: 'Virtual Showcase',
      link: 'https://www.youtube.com/watch?v=OBxfIHyMfyA'
    },
    {
      year: 2020,
      title: "????????"
    },
    {
      year: 2019,
      title: "Asayake, I Choose You!"
    },
    {
      year: 2018,
      title: "The Spirit of Asayake"
    },
    {
      year: 2017,
      title: "A Tale as Old as time",
    },
    {
      year: 2016,
      title: "Horton Hears a Chu!"
    },
    {
      year: 2015,
      title: "The Fellowship of the Drum",
    },
    {
      year: 2014,
      title: "Asyake and the Chamber of Secrets"
    },
    {
      year: 2013,
      title: "A Taste of Taiko"
    },
    {
      year: 2012,
      title: "Through the Looking Glass"
    },
    {
      year: 2011,
      title: "Rhythm Nation"
    },
    {
      year: 2010,
      title: "Daibouken"
    },
    {
      year: 2009,
      title: "Drumscape"
    },
    {
      year: 2008,
      title: "Awakening"
    }
  ]

const handleClick = (e) => {
  document.querySelector('li.active')?.classList.remove('active');
  e.currentTarget.classList.toggle('active');

  const title = e.currentTarget.children[0].innerText;
  const year = e.currentTarget.children[1].innerText;
  /**
   * @type {HTMLImageElement | null}
   */
  const posterImg = document.querySelector('.concert-poster > img');
  if(posterImg) {
    posterImg.src = `/concerts/webp/poster_${year}.webp`;
    posterImg.alt = title;
  }
}
</script>

<svelte:head>
  <title>Asayake Taiko | Concert</title>
  <meta name="description" content="Asayake Taiko | Concert" />
  <!-- {#each preloadImageUrls as image}
  <link rel="preload" as="image" href={image} />
  {/each} -->
</svelte:head>

<Header page="concert" />
<section class='banner-wrapper'>
  <div class='banner'>
    <div>
      <h1>Concert</h1>
    </div>
  </div>
</section>
<section class='main-section'> 
  <nav class='left'>
    <ul class='concert-menu'>
      {#each concerts as concert, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li class='concert-menu-item relative' class:active={i===0} on:click={handleClick}>
        <span class='title'>{concert.title}</span>
        <span class='year'>{concert.year}</span>
        {#if concert.link !== undefined}
          <span class='absolute right-[-5%] text-lg top-2 hover:top-[2.1%] hover:right-[-6%] duration-300'>
            <a href="{concert.link}" target="_blank" rel="noopener noreferrer">↗</a>
          </span>
        {/if}
      </li>
      {/each}
    </ul>
  </nav>
  <div class='right'>
    <div class='concert-poster'>
      <img src="/concerts/webp/poster_2023.webp" alt="Hazakura" />
    </div>
  </div>
</section>
<Footer />

<style lang="scss">
  @function px2vw($size, $bp: 1920) {
    @return calc($size / $bp * 100) * 1vw;
  }

  .banner-wrapper {
    padding-top: px2vw(80);
    // overflow: hidden;
  }
  .banner {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: px2vw(300);
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
    overflow-x: hidden;
    position: relative;

    background-color: #791111;
    color: #fff;
    // color: #791111;

    h1 {
      margin-left: px2vw(32);
      font-size: px2vw(64);
      font-weight: bold;
    }
  }

  .main-section {
    display: flex;
    justify-content: space-between;
    position: relative;

    .left, .right {
      margin: px2vw(100) px2vw(32);
    }

    .right {
      div {
        width: px2vw(600);
        // height: px2vw(800);
        margin-right: px2vw(250);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .concert-menu {
    margin-left: px2vw(78);

    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      height: px2vw(50);
      width: px2vw(557);
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: color 0.5s ease, border-bottom 0.5s ease;
      
      &:hover {
        color: black;
      }

      .title {
        font-size: px2vw(20);
        font-weight: 600;
      }
      
      .year {
        font-size: px2vw(16);
      }
      
      &.active {
        color: #000;
        border-bottom: 1px solid #791111;
      }
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
</style>
