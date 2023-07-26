<script>
  import Header from '/src/routes/Header.svelte'
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
      title: 'Virtual Showcase'
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
      link: "https://issuu.com/michaelhidayat/docs/asayake10thconcert/1"
    },
    {
      year: 2016,
      title: "Horton Hears a Chu!"
    },
    {
      year: 2015,
      title: "The Fellowship of the Drum",
      link: "https://issuu.com/michaelhidayat/docs/complete_program.compressed__1__dfa8216eaa9200"
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

</script>

<svelte:head>
  <title>Asayake Taiko | Concert</title>
  <meta name="description" content="Asayake Taiko | Concert" />
</svelte:head>

<Cursor />
<Header page="concert"/>
<main class='my-12 main-wrapper overflow-hidden max-w-screen-2xl m-auto'>
  <div class='text-2xl text-center pb-11'>Concerts Timeline</div>
  <div class='gallery grid grid-cols-2 auto-cols-fr auto-rows-fr'>
    <div></div>
    {#each concerts as concert, i}
      {#if i != 0 && i % 2 == 0}
        <div class='border-l-asa-red border-l-[1px] border-opacity-20'></div>
        <div></div>
      {/if}

      {#if i % 2 == 0}
      <div class='gallery_item before relative m-auto w-full h-full border-l-asa-red border-l-[1px] border-opacity-20 flex justify-center items-center after:top-[52%] lg:after:top-[51%]'>
        <span class='absolute top-1/2 -left-full text-[15rem] opacity-[0.01] md:opacity-[0.025]  w-max'>{concert.title}</span>
        <div class='year absolute -left-[30rem] text-right w-[26rem] md:w-96'>
            <p class='md:text-xl'>
            {concert.year}
            </p>
            <p class='text-sm md:text-2xl font-light md:font-medium lg:text-3xl w-32 md:w-full float-right'>
            {concert.title}
          </p>
        </div>
        <picture class='z-20 lg:shadow-lg shadow-gray-500 hover:scale-110 duration-100'>
          <source srcset="/concerts/webp/poster_{concert.year}.webp" type="image/webp" />
          <source srcset="/concerts/poster_{concert.year}.jpg" type="image/jpeg" />
          <img class='w-1/2 md:w-3/4 lg:w-full h-full max-w-xs m-auto' src="/concerts/poster_{concert.year}.jpg" loading="lazy" decoding="async" alt="{concert.title}"/>
        </picture>
      </div>
      {:else if i === concerts.length - 1}
        <div class='gallery_item after m-auto w-full h-full border-r-asa-red border-r-[1px] border-opacity-20 relative flex justify-center items-center after:top-[52%] lg:after:top-[51%]'>
        <span class='absolute top-1/2 -right-full text-[15rem] opacity-[0.01] md:opacity-[0.025] w-max'>{concert.title}</span>
          <div class='year absolute -right-[30rem] text-left w-[26rem] md:w-96'>
              <p class='md:text-xl'>
              {concert.year}
              </p>
            <p class='text-sm md:text-2xl font-light md:font-medium lg:text-3xl w-32 md:w-full'>
              {concert.title}
            </p>
            </div>
          <picture class='z-20 lg:shadow-lg shadow-gray-500 hover:scale-110 duration-100'>
            <source srcset="/concerts/webp/poster_{concert.year}.webp" type="image/webp" />
            <source srcset="/concerts/poster_{concert.year}.jpg" type="image/jpeg" />
            <img class='w-1/2 md:w-3/4 lg:w-full h-full max-w-xs m-auto' src="/concerts/poster_{concert.year}.jpg" loading="lazy" decoding="async" alt="{concert.title}"/>
          </picture>
        </div>
      {:else}
      <div class='gallery_item after m-auto w-full relative flex justify-center items-center after:top-[52%] lg:after:top-[51%] snap-start'>
      <span class='absolute top-1/2 -right-full text-[15rem] opacity-[0.01] md:opacity-[0.025] w-max'>{concert.title}</span>
        <div class='year absolute -right-[30rem] text-left w-[26rem] md:w-96'>
            <p class='md:text-xl'>
            {concert.year}
            </p>
            <p class='text-sm md:text-2xl font-light md:font-medium lg:text-3xl w-32 md:w-full'>
            {concert.title}
          </p>
          </div>
        <picture class='z-20 lg:shadow-lg shadow-gray-500 hover:scale-110 duration-100'>
          <source srcset="/concerts/webp/poster_{concert.year}.webp" type="image/webp" />
          <source srcset="/concerts/poster_{concert.year}.jpg" type="image/jpeg" />
          <img class='w-1/2 md:w-3/4 lg:w-full h-full max-w-xs m-auto' src="/concerts/poster_{concert.year}.jpg" loading="lazy" decoding="async" alt="{concert.title}"/>
        </picture>
      </div>
      {/if}
    {/each}
  </div>
</main>
<Footer />

<style>
  main {
    font-family: 'Poppins', sans-serif;
  }

  .after::before,
  .before::before {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: #79111177;
    border-radius: 999px;
    width: 10px;
    height: 10px;
    top: 50%;
    z-index: 2;
  }
  .after::before {
    right: -5.5px;
  }
  .before::before {
    left: -5.5px;
  }

  .after::after,
  .before::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 20rem;
    border: 1px solid #791111;
    opacity: 8%;
    z-index: 0;
  }

  .before::after {
    left: -60px;
  }
  .after::after {
    right: -60px;
  }
</style>
