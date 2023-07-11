<script>
  export let page;
</script>

<header>
  <nav class='nav nocursor' on:mouseover on:mouseleave>
    <a href="/about" class='nav-item' class:active={page==='about'}>
      <span>About</span>
      <span>About</span>
    </a>
    <a href="/members" class='nav-item'>
      <span>Members</span>
      <span>Members</span>
    </a>
    <a href="/gallery" class='nav-item'>
      <span>Gallery</span>
      <span>Gallery</span>
    </a>
    <a href="/concert" class='nav-item'>
      <span>Concert</span>
      <span>Concert</span>
    </a>
    <a href="/contact" class='nav-item'>
      <span>Contact</span>
      <span>Contact</span>
    </a>
  </nav>
</header>

<style>
  header {
    max-width: 1280px;
    margin: auto;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    cursor: none;
    display: flex;
  }

  .nav-item {
    position: relative;
    width: 100px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    overflow: hidden;
    margin: auto 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    transform: translateY(0);
    text-transform: uppercase;
  }

  .nav-item span {
    transition: transform 0.4s cubic-bezier(0, 0.2, 0, 0.75);
    opacity: 0.8;
  }

  .nav-item span:first-child {
    transform:  translateY(50%);
  }
  .nav-item span:last-child {
    transform: translateY(150%);
  }

  .nav-item::after {
    content:"";
    position: absolute;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #791111;
    left: -100%;
    bottom: 0;
    transition: left 0.3s ease;
    border-radius: 999px;
  }

  .nav-item:hover {
    cursor: pointer;
  }

  .nav-item:hover::after {
    left: 0;
  }
  
  .nav-item:hover span:first-child {
    transform: translateY(-150%);
  }
  .nav-item:hover span:last-child {
    transform: translateY(-50%);
  }

  .nav-item.active {
    color: #791111;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .nocursor a {
    cursor: none !important;
  }
</style>
