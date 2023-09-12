<script lang="ts">
import Header from '../Header.svelte';
  import Footer from '../Footer.svelte'

  type AlumniType = {
    gen: string,
    members: string[]
  }

  type Member = {
    name: string,
    gen: string,
    major: string,
    fav: string,
    quote: string,
    imgs: {
      main: string,
      alt: string
    }
  }
  
  type MemberType = {
    gen: string,
    members: Member[]
  }

  const alumni: AlumniType[] = [
      {
      gen: "Gen 21",
      members: ['Ronan Konishi']
    },
    {
      gen: "Gen 19",
      members: ['Ayumi Bindley', 'Nikki Saito', 'Masanori Monguchi', 'Aunice Valdez', 'Julia Dohner']
    },
    {
      gen: "Gen 18",
      members: ['Reika Shimizu', 'Makoa Bryson', 'Austin Ma', 'Henry Helmuth',  'Henry Narabe', 'Jeremy Aban', 'David Song', 'Akihiro Fujita', 'Kazuha Miyoshi', 'Eric Igarashi']
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
      members: ["Jimmy Nguyen", "Jordan Tani", "Jinjoo Lee", "Nicholas Vu", "Jenny Ng", "Helen Park", "Thais Takei"]
    },
    {
      gen: "Gen 8",
      members: ["Vicky Phan"]
    }
  ]

  const currentMembers: MemberType[] = [
  {
  gen: "Gen 22",
      members: [
        {
          name: "Ashley Omiya",
          gen: "gen22",
          major: "Not Specified",
          fav: "N/A",
          quote: "N/A",
          imgs: {
            main: "ashley_omiya_main",
            alt: "ashley_omiya_alt",
          }
        },
        {
          name: "Jamie Shou",
          gen: "gen22",
          major: "Not Specified",
          fav: "N/A",
          quote: "N/A",
          imgs: {
            main: "jamie_shou_main",
            alt: "jamie_shou_alt"
          }
        },
        {
          name: "Kristina Diep",
          gen: "gen22",
          major: "Not Specified",
          fav: "N/A",
          quote: "N/A",
          imgs: {
            main: "kristina_diep_main",
            alt: "kristina_diep_alt"
          }
        },
        {
          name: "Kane Li",
          gen: "gen22",
          major: "Computer Science",
          fav: "Taifuu",
          quote: "Nice to see you here! My name is Kane Li and I am a freshman at UC San Diego majoring in Computer Science. While I had no prior musical nor taiko experience prior to joining Asayake Taiko, I fell in love with the style and personality of the Taiko community ever since attending my first workshop. It has been a great opportunity to bond, get in touch with my musical side, and even get some exercise! Outside of Taiko, I enjoy playing games such as Brawl Stars and Minecraft, watching shows/films, exercise, and reading manga. Fun fact: I have a missing tooth, it just never grew.",
          imgs: {
            main: "kane_li_main",
            alt: "kane_li_alt"
          }
        },
        {
          name: "Katelyn Miyasaki",
          gen: "gen22",
          major: "Bioengineering",
          fav: "N/A",
          quote: "Katelyn is a grad student studying bioengineering. She often saw taiko performances growing up and is excited to be performing herself! She wanted to put her favorite Asa song in this bio, but couldn’t pick just one. Besides taiko, Katelyn likes sports anime, making playlists, and typography.",
          imgs: {
            main: "katelyn_miyasaki_main",
            alt: "katelyn_miyasaki_alt"
          }
        },
        {
          name: "Kate Villadelgado",
          gen: "gen22",
          major: "Japanese Studies",
          fav: "N/A",
          quote: "YO! My name is Kateleen (Kate) Villadelgado. I’m a freshman at UCSD and my major is Japanese Studies. I've always loved the energy of taiko but this is my first time actually playing taiko! It's been really fun learning new songs and especially hanging out with the Asa Fam. Even though it's my first year here in Asayake Taiko, I already feel like I belong. Other than taiko, I really enjoy drawing fictional characters, trying (and failing) to 100% complete all Yakuza games, and singing badly. Also, my favorite food is curry (Coco Ichibanya go crazy). All in all, I’m here to live a good life, not a long one. We gamin’ frfr",
          imgs: {
            main: "kateleen_villadelgado_main",
            alt: "kateleen_villadelgado_alt"
          }
        },
        {
          name: "Kylie Yanagi",
          gen: "gen22",
          major: "Not Specified",
          fav: "N/A",
          quote: "N/A",
          imgs: {
            main: "kylie_yanagi_main",
            alt: "kylie_yanagi_alt"
          }
        },
        {
          name: "Matthew Alegrado",
          gen: "gen22",
          major: "Electrical Engineering",
          fav: "N/A",
          quote: "Hello, I'm Matthew and I'm a 2nd year Electrical Engineering major. I was born in Chula Vista, CA. This is my first year in Asa and my first year playing taiko.I joined Asa because I liked doing percussion in high school and I found out about Asa after a friend of mine joined a similar group. I liked the environment during tryouts with the way everyone helps each other and had fun together.",
          imgs: {
            main: "matthew_alegrado_main",
            alt: "matthew_alegrado_alt"
          }
        },
        {
          name: "Micah Esmino",
          gen: "gen22",
          major: "Cognitive and Behavorial Neuroscience",
          fav: "N/A",
          quote: "Hi! I'm Micah Esmino, a first-year at Revelle college at UC San Diego. I'm currently studying cognitive and behavioral neuroscience. I've had previous experience in music--I was in choir for my entire life--but this is the first time I've ever done taiko! Outside of Asa, I enjoy singing, journaling, scrapbooking, and playing video games! Asa has a very welcoming energy with everyone in it; I love being around every member because of their fun and loving energy for what they do and those around them!!",
          imgs: {
            main: "micah_esmino_main",
            alt: "micah_esmino_alt"
          }
        },
        {
          name: "Timothy Hsiao",
          gen: "gen22",
          major: "Bioinformatics",
          fav: "N/A",
          quote: "HI! I am Timothy Hsiao, and I am a first year Bioinformatics major at UC San Diego. This is my first year playing taiko, and I am having a great time so far! In addition to taiko, I also play piano, cello, and guitar, and I am learning violin and fue!",
          imgs: {
            main: "timothy_hsiao_main",
            alt: "timothy_hsiao_alt"
          }
        }
      ]
    },
    {
      gen: "Gen 21",
      members: [
        {
          name: "Kade Kaneshiro",
          gen: "gen21",
          major: "Structural Engineering",
          fav: "Ishi",
          quote: "It reminds me of retreat!",
          imgs: {
            main: "kade_kaneshiro_main",
            alt: "kade_kaneshiro_alt"
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
          major: "Not Specified",
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
    }
  ]

  let displayMembers = currentMembers;

  const handleMouseOver = (e: MouseEvent) => {
    const target = (e.currentTarget as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
    const pparent = target[0].children as HTMLCollectionOf<HTMLElement>;
    const parent = pparent[0].children as HTMLCollectionOf<HTMLElement>;
    parent[1].classList.remove('!hidden');
    parent[2].classList.remove('!opacity-0');
    parent[2].classList.add('backdrop-brightness-[0.6]', '!top-0', '!rounded-none');
  }
  const handleMouseLeave = (e: MouseEvent) => {
    const target = (e.currentTarget as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
    const pparent = target[0].children as HTMLCollectionOf<HTMLElement>;
    const parent = pparent[0].children as HTMLCollectionOf<HTMLElement>;
    parent[1].classList.add('!hidden');
    parent[2].classList.add('!opacity-0');
    parent[2].classList.remove('backdrop-brightness-[0.6]', '!top-0', '!rounded-none');
  }

  const handleClick = (e: MouseEvent) => {  
    const target = e.currentTarget as HTMLElement;

    const selectedGen = target.dataset.gen;
    document.querySelector('li.active')?.classList.remove('active');
    target.classList.toggle('active');

    if(selectedGen === 'alumni') {
      document.querySelector('.gen-members')?.classList.add('!hidden');
      document.querySelector('.alumni')?.classList.remove('!hidden');
      return;
    }

    document.querySelector('.gen-members')?.classList.remove('!hidden');
    document.querySelector('.alumni')?.classList.add('!hidden');

    if(selectedGen === 'all') {
      displayMembers = currentMembers;
    } else if (selectedGen === '22') {
      displayMembers = currentMembers.filter(m => m.gen === "Gen 22");
    } else if (selectedGen === '21') {
      displayMembers = currentMembers.filter(m => m.gen === "Gen 21");
    } else if (selectedGen === '20') {
      displayMembers = currentMembers.filter(m => m.gen === "Gen 20");
    } else if (selectedGen === '19') {
      displayMembers = currentMembers.filter(m => m.gen === "Gen 19");
    }
  }

</script>

<Header page="members" />
<section class='banner-wrapper'>
  <div class='banner'>
    <h1>Members</h1>
    <h2>Academic Year 22-23</h2>
  </div>
</section>
<section class='main'>
  <nav class="gen-menu-wrapper">
    <ul class='gen-menu'>
      <li data-gen="all" on:click={handleClick} class='active'>All</li>
      <li data-gen="22" on:click={handleClick} >Generation 22</li>
      <li data-gen="21" on:click={handleClick} >Generation 21</li>
      <li data-gen="20" on:click={handleClick} >Generation 20</li>
      <li data-gen="19" on:click={handleClick} >Generation 19</li>
      <li data-gen="alumni" on:click={handleClick} >Alumni</li>
    </ul>
  </nav>

  <div class="gen-members">
    {#each displayMembers as m}
      {#each m.members.sort((a, b) => {
        if(a.name < b.name) return -1;
        else return 1;
      }) as member}
      <div class='gen-member relative' on:mouseover={handleMouseOver} on:mouseleave={handleMouseLeave} on:focus>
        <div class='relative overflow-y-auto'>
          <div class='h-full'>
            <img class='member-image' src="/members/{member.gen}/{member.imgs.main}.webp" alt="{member.name}" />
            <img class='member-image member-image-alt !hidden' src="/members/{member.gen}/{member.imgs.alt}.webp" alt="{member.name} alt" />
              <div class='member-quote h-full overflow-y-auto !opacity-0 top-[-100%] duration-500 ease'>
                <p>{member.quote}</p>
              </div>
          </div>
        </div>
        <div class='member-info'>
          <span class='name'>{member.name}</span>
          <span class='major'>{member.major}</span>
        </div>
      </div>
      {/each}
    {/each}
  </div>
  <div class='!hidden alumni'>
    {#each alumni as alum} 
      <div class='alum'>
        <div class='alum-title'>
          {alum.gen}
        </div>
        <div class='alum-names'>
          {#each alum.members.sort() as member} 
          <div class='alum-name'>{member}</div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
<Footer />

<svelte:head>
  <title>Asayake Taiko | Members</title>
  <meta name="description" content="Asayake Taiko | Members" />
</svelte:head>

<style lang="scss">
  .banner-wrapper {
    padding-top: px2em(80);
  }
  .banner {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
    
    h1 {
      color: #791111;
      font-size: max(min(64px, px2vw(64)), 48px);
      font-weight: bold;
    }

    h2 {
      margin-top: 5px;
      font-size: max(min(18px, px2vw(18)), 12px);
      font-weight: 600;
      color: #791111de;
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: px2em(64) 0;
    height: 100%;
  }

  .gen-menu-wrapper {
    border-bottom: 1px solid #eee;
    padding-bottom: px2em(32);
    margin-bottom: px2em(64);

    .gen-menu {
      li {
        height: px2em(50, 24);
        font-size: px2rem(20);
        color: #777;
        font-weight: 600;
        position: relative;
        display: flex;
        align-items: center;
        transition: color 0.5s ease;

        &:hover {
          cursor: pointer;
          color: #000;
        }

        &.active {
          color: #000;

          &::before {
            content: "";
            position: absolute;
            left: -15px;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
            border-radius: 999px;
            background-color: #791111;
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .gen-members {

    .gen-member {
      overflow: hidden;
      position: relative;
      margin-bottom: px2em(32);
    }

    .member-image {
      border-radius: 5px;

      &-alt {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .member-quote {
      border-radius: 5px;
      position: absolute;
      left: 0;
      width: 100%;
      overflow-y: auto;
      font-size: px2rem(16);
      padding: px2em(10, 16);
      border-radius: 0 0 300px 300px;
      line-height: 1.5;
      color: white;
    }

    .member-info {
      display: flex;
      flex-direction: column;
      line-height: 1;
      
      .name {
        margin-top: 5px;
        font-size: px2rem(20);
        font-weight: bold;
      }
      
      .major {
        margin-top: 5px;
        padding-bottom: 2px;
        font-size: px2rem(12);
        color: #777;
      }
    }
  }

  .alumni {
    .alum {
      margin-bottom: 76px;
    }
    .alum-title {
      line-height: 1;
      font-size: px2rem(24);
      font-weight: 600;
      margin-bottom: 20px;
    }

    .alum-name {
      width: 100%;
      font-size: px2rem(16);
      border-bottom: 1px solid #eee;
      margin-bottom: px2em(10);
    }
  }

@media screen and (max-width: 699px) {
  .main {
    flex-direction: column;
    margin: auto px2em(48);
  }
}
  
@media screen and (min-width: 700px) {
  .main {
    max-width: 1920px;
    margin: px2em(100) auto;
    padding: 0 px2em(22) 0 px2em(32);
  }
  .gen-menu-wrapper {
    width: 50%;
    border-bottom: none;

    .gen-menu {
      position: sticky;
      top: px2em(180);
      width: px2em(300, 24);
    }
  }

  .gen-members {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;

    .gen-member {
      margin-right: px2em(10);
    }

    .member-quote {
      font-size: px2rem(14);
      line-height: 1.3;
    }
  }
  .alumni {
    width: 80%;

    .alum-names {
      display: grid;
      grid-template-columns: 0.3fr 0.3fr;

      .alum-name {
        width: px2em(200);
        margin-right: px2em(20);
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .gen-menu-wrapper {
    width: 30%;
  }
  .gen-members {
    grid-template-columns: 0.45fr 0.45fr 0.45fr;
  }

  .alumni {
    width: 90%;

    .alum-names {
      display: grid;
      grid-template-columns: 0.3fr 0.3fr 0.3fr;

      .alum-name {
        width: px2em(200);
      }
    }
  }
}
</style>
