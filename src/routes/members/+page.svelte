<script>
  import Header from "/src/routes/Header.svelte"
  import Cursor from '../Cursor.svelte'
  import Footer from '../Footer.svelte'

  let mouse = {x:0, y:0};
  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    document.querySelector('.cursor').style.top = `${mouse.y-10}px`
    document.querySelector('.cursor').style.left = `${mouse.x-10}px`
  }

  const handleMouseOver = (e) => {
    const c = document.querySelector('.cursor');
    c.style.width = "30px";
    c.style.height = "30px";
  }
  const handleMouseLeave = (e) => {
    const c = document.querySelector('.cursor');
    c.style.width = "0px";
    c.style.height = "0px";
  }

</script>

<svelte:head>
</svelte:head>

<Cursor />
<main class='main-wrapper' on:mousemove={handleMouseMove}>
  <div class='wrapper'>
    <a href="/" on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave}>
      <img src="/asayake-logo.png" alt="logo" class="logo"/>
    </a>
    <Header page="members" on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave}/>
  </div>
</main>

<style>
  main {
    font-family: 'Poppins', sans-serif;
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
</style>
