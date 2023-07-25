<script>
  import Header from '/src/routes/Header.svelte'
  import Footer from '/src/routes/Footer.svelte'
  import Cursor from '/src/routes/Cursor.svelte'
  import { onMount } from 'svelte'

  const alumni = [
    {
      gen: "Gen 18",
      members: ['Henry Narabe', 'Jeremy Aban', 'David Song', 'Akihiro Fujita']
    },
    {
      gen: "Gen 17",
      members: ['Jii Eu', 'Alison Liu', 'Geoffery Hand', 'Miguel Lazaro', 'Yatavee Vajaphattana', 'Keita Kadokura', 'Nick Alan Wong', 'Jeff Onuma']
    },
    {
      gen: "Gen 16",
      members: ['Denise Lucia', 'Dylan Power', 'Hiro Kakitani', 'Jennifer Le', 'Jolene Lei', 'Josh Van Gogh', 'Justin Jio', 'Kana Okafuji', 'Katherine Liang', 'Yufei Wang']
    },
    {
      gen: "Gen 15",
      members: ['Ivy Hang', 'Catie Sakurai', 'Fabian Lim', 'Samm Iwamasa', 'Austin Pukasamsombut', 'Dae Han', 'Ryan Okazaki', 'Katherine Santos']
    },
    {
      gen: "Gen 14",
      members: ['Anthony Quach', 'Danny Gibo', 'Jenny Burgoyne', 'Kinsey Chikuma', 'Lauren Dimalanta', 'Nayuki Isoda', 'Athena Ibe-Ibanez', 'David Lee', 'Alanis Nokham', 'Cameron Panlasigui', 'Josaleen Ta', 'Stephanie Lee']
    },
    {
      gen: "Gen 13",
      members: ["Justin Brookshier", "Coco Chan", "Vinh Ha", "Michael Hidayat", "Marina McGough", "Kyle Torremocha", "Heather Zook"]
    },
    {
      gen: "Gen 12",
      members: ["Aubrey Lyons", "Beth Matter","Vinh Tran"]
    },
    {
      gen: "Gen 11",
      members: ["Chelsea Abang", "Joseph Caluza", "Erin Foley-Okumura", "Laura Lee", "Anna Ogata", "Mark Oteyza", "Matthew Sasaki", "Briana Zimmers"]
    },
    {
      gen: "Gen 10",
      members: ["Jimmy Nguyen"]
    },
  ];

  const currentMembers = [
    {
      gen: "Gen 21",
      members: [
        {
          name: "Kayla Kaneshiro",
          gen: "gen21",
          major: "Structural Engineering",
          fav: "Ishi",
          quote: "It reminds me of retreat!",
          imgs: {
            main: "kayla_kaneshiro_main",
            alt: "kayla_kaneshiro_alt"
          }
        },
        {
          name: "Aleck Adriano",
          gen: "gen21",
          major: "ICAM Music",
          fav: "Jikan",
          quote: "I like Jikan because of it is dense with notes, it has cool rhythms, and it is very fun to play.",
          imgs: {
            main: "aleck_adriano_main",
            alt: "aleck_adriano_alt"
          }
        },
        {
          name: "Saam Hamidi",
          gen: "gen21",
          major: "Physics",
          fav: "Ishi",
          quote: "Ishi means rock in Japanese. Ishi sounds a lot like ushi (ushi means cow in Japanese); I like ushi.",
          imgs: {
            main: "saam_hamidi_main",
            alt: "saam_hamidi_alt"
          }
        },
        {
          name: "Keiko Dickens",
          gen: "gen21",
          major: "International Business and Linguistics",
          fav: "Ishi",
          quote: "Ishi means rock.",
          imgs: {
            main: "keiko_dickens_main",
            alt: "keiko_dickens_alt"
          }
        },
        {
          name: "Kai Morita",
          gen: "gen21",
          major: "Data Science",
          fav: "Kamaitachi",
          quote: "maya + helicopter",
          imgs: {
            main: "kai_morita_main",
            alt: "kai_morita_alt"
          }
        },
        {
          name: "Eric Leung",
          gen: "gen21",
          major: "Mechanical Engineering",
          fav: "Kamaitachi",
          quote: "Bachi go spin spin, looks cool.",
          imgs: {
            main: "eric_leung_main",
            alt: "eric_leung_alt"
          }
        },
        {
          name: "Darryl Tayag",
          gen: "gen21",
          major: "Computer Science",
          fav: "Ishi",
          quote: "The song has a ROCK solid composition with different phrases and fun movements. It also serves as a great sobriety test. Rocks totally rock!",
          imgs: {
            main: "darryl_tayag_main",
            alt: "darryl_tayag_alt"
          }
        },
        {
          name: "Ethan Satoda",
          gen: "gen21",
          major: "Neurobiology",
          fav: "Jack Bazaar",
          quote: "It has a lot of dynamic movements and requires a lot of technical skill so you feel like a god when you play it correctly.",
          imgs: {
            main: "ethan_satoda_main",
            alt: "ethan_satoda_alt"
          }
        },
        {
          name: "Truman Koh",
          gen: "gen21",
          major: "General Biology",
          fav: "Awakening",
          quote: "This song is full of opportunities to make your cohort laugh through one's silly expressions.",
          imgs: {
            main: "truman_koh_main",
            alt: "truman_koh_alt"
          }
        },
        {
          name: "Erika Munekata",
          gen: "gen21",
          major: "Undecided",
          fav: "Kodomo/Awakening",
          quote: "I love songs where you interact with fellow members and coordinate something together. Very fun.",
          imgs: {
            main: "erika_munekata_main",
            alt: "erika_munekata_alt"
          }
        },
        {
          name: "Andrew Meckert",
          gen: "gen21",
          major: "Chemical Engineering",
          fav: "Jikan-Gire",
          quote: "I love how it uses switching time signatures to make it's signature 'running out of time' feel. I also love it's choreography.",
          imgs: {
            main: "andrew_meckert_main",
            alt: "andrew_meckert_alt"
          }
        },
        {
          name: "Ronan Konishi",
          gen: "gen21",
          major: "Computer Science",
          fav: "Jack Bazaar",
          quote: "I like how each component of the song is so unique: the types of hits and the angles that you hit the Taiko from.",
          imgs: {
            main: "ronan_konishi_main",
            alt: "ronan_konishi_alt"
          }
        }
      ]
    },
    {
      gen: "Gen 20",
      members: [
        {
          name: "Maya Wong",
          gen: "gen20",
          major: "International Studies - History",
          fav: "Tanoshii / Kamaitachi",
          quote: "Tanoshii is always fun to both play and watch because it just exerts lots of positive bright energy that makes me very happy! For Kamaitachi, I like it because just feel a lot cooler than I am in real life when I'm playing the song (lol) because of its complexity and serious ominous vibes.",
          imgs: {
            main: "maya_wong_main",
            alt: "maya_wong_alt"
          }
        },
        {
          name: "Katelyn Chu",
          gen: "gen20",
          major: "Environmental Systems",
          fav: "Tanoshii",
          quote: "It has such an infectious energy; the first time I watched it being performed I smiled the whole way through. Getting to perform it on stage was thrilling!",
          imgs: {
            main: "katelyn_chu_main",
            alt: "katelyn_chu_alt"
          }
        },
        {
          name: "Jenna Heskin",
          gen: "gen20",
          major: "Anthropology",
          fav: "Kamaitachi",
          quote: "It's really fun and energetic and I really like hearing all the separate pieces come together when it's played.",
          imgs: {
            main: "jenna_heskin_main",
            alt: "jenna_heskin_alt"
          }
        },
        {
          name: "William Chu",
          gen: "gen20",
          major: "Bioinformatics",
          fav: "Taifuu",
          quote: "Hit drum fast and hard. It's very cool.",
          imgs: {
            main: "william_chu_main",
            alt: "william_chu_alt"
          }
        },
        {
          name: "Christa Cheng",
          gen: "gen20",
          major: "Political Science: International Relations",
          fav: "Tanoshii",
          quote: "I actually used to strongly dislike this song, but it's grown on me. I really enjoy seeing the happiness it brings to both the audience and players, and it's fun to watch and play.",
          imgs: {
            main: "christa_cheng_main",
            alt: "christa_cheng_alt"
          }
        }
      ]
    },
    {
      gen: "Gen 19",
      members: [
        {
          name: "Ayumi Bindley",
          gen: "gen19",
          major: "Neurobiology",
          fav: "Kamaitachi",
          quote: "I love how the players are able to interact through their hits and movements to portray the story of the wind weasels. The complex rhythm makes the song very engaging, and it's just really fun to perform overall.",
          imgs: {
            main: "ayumi_bindley_main",
            alt: "ayumi_bindley_alt"
          }
        },
        {
          name: "Nikki Saito",
          gen: "gen19",
          major: "Neurobiology",
          fav: "Tanoshii",
          quote: "I love the happy, fun energy of the song!",
          imgs: {
            main: "nikki_saito_main",
            alt: "nikki_saito_alt"
          }
        },
        {
          name: "Masanori Monguchi",
          gen: "gen19",
          major: "Cell and Molecular Biology",
          fav: "Kamaitachi",
          quote: "I think it's the most challenging song in Asa and I like playing hard song.",
          imgs: {
            main: "masanori_monguchi_main",
            alt: "masanori_monguchi_alt"
          }
        },
        {
          name: "Aunice Valdez",
          gen: "gen19",
          major: "Psychology w/ Spec. Developmental Psychology",
          fav: "Kodomo",
          quote: "I love being silly with other asa members while playing. I genuinely laugh every time we do the movements!",
          imgs: {
            main: "aunice_valdez_main",
            alt: "aunice_valdez_alt"
          }
        },
        {
          name: "Julia Dohner",
          gen: "gen19",
          major: "Earth Science",
          fav: "Kamaitachi",
          quote: "I love the interplay between the naname and beta players' hits.",
          imgs: {
            main: "julia_dohner_main",
            alt: "julia_dohner_alt"
          }
        }
      ]
    },
    {
      gen: "Gen 18",
      members: [
        {
          name: "Reika Shimizu",
          major: "Structural Engineering",
          gen: "gen18",
          fav: "Kodomo",
          quote: "Kodomo is my favorite song in Asa because it lets me interact and be silly with everyone I'm playing with! I feel like there are so many places to be creative within the song, and each time I play it is a new, fun memory for me!",
          imgs: {
            main: "reika_shimizu_main",
            alt: "reika_shimizu_alt"
          }
        },
        {
          name: "Makoa Bryson",
          major: "Cognitive and Behavioral Neuroscience",
          gen: "gen18",
          fav: "Kodomo",
          quote: "It's my favorite song because its fun to play and interact with everyone in",
          imgs: {
            main: "makoa_bryson_main",
            alt: "makoa_bryson_alt"
          }
        },
        {
          name: "Kazuha Miyoshi",
          major: "Cognitive Science",
          gen: "gen18",
          fav: "Kodomo",
          quote: "Kodomo is my favorite song because I love how interactive it is and it's so much fun to play.",
          imgs: {
            main: "kazuha_miyoshi_main",
            alt: "kazuha_miyoshi_alt"
          }
        },
        {
          name: "Austin Ma",
          gen: "gen18",
          major: "Cognitive Science",
          fav: "Moving Forward",
          quote: "Moving forward is my favorite song because it just sounds so tranquil and graceful. Plus there's a spot in the song that lets you yell a really sick kiai and I always get excited when that part comes.",
          imgs: {
            main: "austin_ma_main",
            alt: "austin_ma_alt"
          }
        },
        {
          name: "Eric Igarashi",
          gen: "gen18",
          major: "Applied Mathematics",
          fav: "Jikan",
          quote: "Moving forward is my favorite song because it just sounds so tranquil and graceful. Plus there's a spot in the song that lets you yell a really sick kiai and I always get excited when that part comes.",
          imgs: {
            main: "eric_igarashi_main",
            alt: "eric_igarashi_alt"
          }
        },
        {
          name: "Henry Helmuth",
          gen: "gen18",
          major: "Structural Engineering",
          fav: "Tanoshii",
          quote: "It's a bop.",
          imgs: {
            main: "henry_helmuth_main",
            alt: "henry_helmuth_alt"
          }
        }
      ]
    }
  ]

  let banner;

  onMount(() => {
    setTimeout(() => {
      banner.children[0].classList.toggle('opacity-100');
      banner.children[0].classList.toggle('backdrop-brightness-50');
    }, 300)
    setTimeout(() => {
      banner.style.height = "600px";
    }, 1200)
  })


  const handleMouseOver = (e) => {
    e.currentTarget.children[1].classList.add('opacity-100')
  }
  const handleMouseLeave = (e) => {
    e.currentTarget.children[1].classList.remove('opacity-100')
  }

  const handleClick = (e) => {
    const isFront = e.currentTarget.dataset.card === 'front'
    const name = e.currentTarget.dataset.name
    const front = document.querySelectorAll(`[data-name="${name}"]`)[0]
    const back = document.querySelectorAll(`[data-name="${name}"]`)[1]

    if(isFront) {
      setTimeout(() => {
        front.classList.add('hidden')
        back.classList.remove('hidden')
      }, 100)
      front.style.transform = "rotateY(180deg)"
      back.style.transform = "rotateY(0deg)"
    } else {
      front.style.transform = "rotateY(0deg)"
      back.style.transform = "rotateY(180deg)"
      setTimeout(() => {
        front.classList.remove('hidden')
        back.classList.add('hidden')
      }, 100)
    }
  }
</script>

<Cursor />
<Header page="members" />
<div bind:this={banner} class='banner duration-500'>
  <div class="w-full h-full flex flex-col justify-center items-center text-white opacity-0 duration-300">
    <p class='text-3xl md:text-5xl font-semibold text-center'>Meet Our Team</p>
    <p class='text-md text-gray-300 mt-2'>Academic Year 21-22</p>
  </div>
</div>
<main class='main-wrapper'>
  {#each currentMembers as asa}
  <div class='pt-10 pb-20 relative'>
    <div class='max-w-screen-xl m-auto'>
      <h2 class='text-2xl text-center py-2'>{asa.gen}</h2>
      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-1 lg:gap-1 px-8'>
        {#each asa.members as member} 
          <div role='button' tabindex="0" data-card="front" data-name="{member.name}" class='bg-asa-red relative rounded-md overflow-hidden duration-150' on:click={handleClick} on:mouseover={handleMouseOver} on:mouseleave={handleMouseLeave} on:focus>
            {#if member.imgs !== undefined}
              <img src="/members/{member.gen}/{member.imgs.main}.jpg" alt="{member.name}" />
              <img class='absolute top-0 opacity-0 duration-300' src="/members/{member.gen}/{member.imgs.alt}.jpg" alt="{member.name}" />
            {/if}
            <span class='absolute bottom-2 right-2 text-white font-light text-md backdrop-blur-sm px-2 py-1 rounded-md'>{member.name}</span>
          </div>
          <div role='button' tabindex="0" data-card="back" data-name="{member.name}" class='overflow-y-auto relative member-detail hidden rounded-md overflow-hidden duration-150' on:click={handleClick}>
            {#if member.imgs !== undefined}
              <img src="/members/{member.gen}/{member.imgs.main}.jpg" alt="{member.name}" class='opacity-5'/>
            {/if}
            <div class="absolute top-0 left-0 p-4">
              <div class='mb-4'>
                <p class='text-xl font-semibold'>
                  {member.name}
                </p>
                <p class='text-sm font-light text-gray-500'>
                  {member.major}
                </p>
              </div>
              <p class='font-light'>
                "{member.quote}"
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/each}

  <div class='pt-10 pb-20'>
    <div class='max-w-screen-xl m-auto px-8'>
      <h2 class='text-2xl py-6'>Alumni</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each alumni as alum}
          <div class='mb-6'>
            <div class='text-lg font-semibold'>{alum.gen}</div>
            <ul>
              {#each alum.members.sort() as member}
                <li class='text-sm py-1'>{member}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>
<Footer />

<svelte:head>
  <title>Asayake Taiko | Members</title>
  <meta name="description" content="Asayake Taiko | Members" />
</svelte:head>

<style>
  main, .banner {
    font-family: 'Poppins', sans-serif;
  }

  .banner {
    background-image: url('/members/banner.jpg');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

</style>
