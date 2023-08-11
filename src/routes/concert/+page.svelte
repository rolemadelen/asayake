<script lang="ts">
  import Header from '../Header.svelte';
  import Footer from '../Footer.svelte'
  import Cursor from '../Cursor.svelte'

  type PosterType = {
    year: number,
    title: string,
    link?: string | undefined
  }

  const concerts: PosterType[] = [
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
  const posterImg: HTMLImageElement | null = document.querySelector('.concert-poster > img');
  if(posterImg) {
    posterImg.src = `/concerts/webp/poster_${year}.webp`;
    posterImg.alt = title;
  }
}
</script>

<svelte:head>
  <title>Asayake Taiko | Concert</title>
  <meta name="description" content="Asayake Taiko | Concert" />
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
          <span class='link absolute duration-300'>
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

  @function px2rem($size, $root_size: 16) {
    @return calc($size / $root_size) * 1rem;
  }

  .banner-wrapper {
    padding-top: 80px;
    // overflow: hidden;
  }
  .banner {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    overflow-x: hidden;
    position: relative;
    
    h1 {
      color: #791111;
      font-size: 64px;
      font-weight: bold;
    }
  }

  .main-section {
    display: flex;
    justify-content: space-between;
    position: relative;

    .left, .right {
      margin: 100px 32px;
    }

    .right {
      div {
        width: 600px;
        max-height: 800px;
        margin-right: 250px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .concert-menu {
    margin-left: 78px;

    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      height: 50px;
      width: 557px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: color 0.5s ease, border-bottom 0.5s ease;
      
      &:hover {
        color: black;
      }

      .title {
        font-size: px2rem(20);
        font-weight: 600;
      }
      
      .year {
        font-size: px2rem(16);
      }
      
      .link {
        font-size: px2rem(16);
        right: -30px;
        top: 48%;
        transform: translateY(-48%);
        
        &:hover {
          top: 40%;
          right: -33px;
        }
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
