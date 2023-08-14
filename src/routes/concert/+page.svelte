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

const handleClick = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  const activeList = document.querySelector('li.active') as HTMLElement;
  if(target === activeList) {
    activeList.children[1].classList.toggle('!max-h-[100vh]');
    return;
  }
  activeList.classList.remove('active');
  activeList.children[1].classList.remove('!max-h-[100vh]');
  target.classList.toggle('active');
  
  (target.children[1] as HTMLElement).classList.toggle('!max-h-[100vh]');


  const t = (target.children[0] as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
  const title = t[0].innerText;
  const year = t[1].innerText;
  const posterImg: HTMLImageElement | null = document.querySelector('.right > .concert-poster > img');
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
      <li class='concert-menu-item' class:active={i===0} on:click={handleClick}>
        <div class='flex w-full h-full justify-between items-center'>
          <span class='title'>{concert.title}</span>
          <span class='year'>{concert.year}</span>
        </div>
        <div class='concert-poster max-h-0 overflow-hidden duration-500' class:!max-h-[100vh]={i===0}>
          <img src="/concerts/webp/poster_{concert.year}.webp" alt="{concert.title}" />
        </div>
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
  .banner-wrapper {
    padding-top: px2em(80);
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
      font-size: max(min(64px, px2vw(64)), 50px);
      font-weight: bold;
    }
  }

  .main-section {
    display: flex;
    // justify-content: space-between;
    position: relative;
    margin: px2vw(100) 0;

    nav {
      width: 100%;
      // margin: px2vw(100) auto;
    }
    // .left, .right {
    //   margin: 100px 32px;
    // }

    .right {
      div {
        width: px2vw(600);
        max-height: px2vw(800);
        margin-right: px2vw(250);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .concert-menu {
    // margin-left: 78px;

    &-item {
      display: flex;
      flex-direction: column;
      padding: 0;
      // justify-content: space-between;
      // align-items: center;
      color: #999;
      // height: 50px;
      width: 600px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: color 0.5s ease, border-bottom 0.5s ease, padding 0.5s ease;
      
      & > div:first-of-type {
        height: 50px;
      }

      & > div:last-of-type {
        img {
          margin: auto;
          width: 80%;
          margin-bottom: px2rem(16);
        }
      }

      &:hover {
        color: black;
      }

      .title {
        font-size: px2rem(20);
        font-weight: 500;
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

  @media screen and (max-width: 699px) {
    .concert-menu {
      &-item {
        width: 90%;
        margin: auto;

        &.active {
          background-color: #791111;
          color: #eee;
          border-radius: 5px;
          padding: 0 px2em(12);
          transition: all 0.3s ease;
          border-bottom: none;
        }
      }
    }
    .right {
      display: none;
    }
  }
  
  @media screen and (min-width: 700px) {
    .concert-menu {
      &-item {
        width: 600px;
        margin: auto;

        &.active {
          background-color: #791111;
          color: #fff;
          border-radius: 5px;
          padding: 0 px2em(12);
          transition: all 0.3s ease;
          border-bottom: none;
        }
      }
    }

    .right {
      display: none;
    }
  }

  @media screen and (min-width: 999px) {
    .left {
      margin-left: px2vw(133);
    }
    .concert-menu {
      &-item {
        width: 70%;
        margin: 0;

        & > div:first-of-type {
          height: max(50px, px2vw(50));
        }

        .concert-poster {
          display: none;
        }

        .title {
          font-size: max(16px, px2vw(20));
        }
        
        .year {
          font-size: max(12px, px2vw(16));
        }
      }
    }

    .right {
      display: block;

      .concert-poster {
        position: sticky;
        top: px2vw(200);
      }
    }
  }

</style>
