<script>
  import Header from "/src/routes/Header.svelte"
</script>

<main class='main-wrapper'>
  <div class='wrapper'>
    <a href="/">
      <img src="/asayake-logo.png" alt="logo" class="logo"/>
    </a>
    <Header page="about"/>
  </div>
  <div class='body-bg'>
    <div class="body">
      <div class='title'>About Us</div>
      <p>Asayake Taiko is a Japanese drumming group founded in the spring of 2002 at the University of California, San Diego campus.</p>
      <p>In spring of 2002, Bobby Koga, Reid Matsuoka and several other students came together to start a taiko group at the University of California, San Diego. With financial support from the university, the fledgling group purchased various equipment in order to construct the Japanese drums in garages of devoted members. In spring of 2004, Asayake Taiko at UCSD debuted with their completed drums at the 3rd Annual Nikkei Student Union Culture Show.</p>
      <p>Today, Asayake Taiko performs for on-campus cultural events, high school conferences, and various university functions. Likewise, Asayake Taiko aims to promote cultural awareness of Taiko to the greater San Diego area through performances and workshops at K-12 schools and other cultural functions.</p>
      <p>Each year, Asayake Taiko continues to grow in equipment and members to accomplish its mission statement: to promote cultural awareness not only in the UCSD campus community, but in the greater San Diego community as well.</p>
      <p>“Asayake” means “morning glow” in Japanese, and invokes the image of the early morning light playing on the ocean mist in La Jolla.</p>
    </div>
  </div>
</main>

<style>
  main {
    font-family: 'Roboto', sans-serif;
  }

  .wrapper {
    max-width: 1920px;
  }

  .logo {
    position: absolute;
    top: 34px;
    left: 128px;
    width: 200px;
  }

  .body {
    max-width: 1280px;
    margin: 0 auto;
    color: #fff;
    font-weight: 300;
  }

  .body-bg {
    position: absolute;
    top: 160px;
    width: 100%;
    height: 100vh;
    border-radius: 100px 100px 0 0;
    background-color: #791111;
    padding-top: 48px;
    box-shadow: 3px 0px 9px 3px #a0a0a0;
    transition: top 0.5s ease-in-out;
  }

  .body .title {
    font-size: 60px;
    margin-bottom: 32px;
  }

  .body p {
    width: 50%;
    line-height: 1.5;
    font-size: 18px;
  }


  .our-name {
    font-size: 40px;
  }

</style>
