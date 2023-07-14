<script>
  export let page;
</script>

<header class='flex justify-center items-center max-w-[1280px] mx-auto h-32 text-gray-50'>
  <slot name='logo'>
    <div class='flex-1'>
      <a href="/" >
        <img src="/asayake_logo.svg" alt="logo" class="logo"/>
      </a>
    </div>
  </slot>
  <nav class='flex' class:text-black={page!=='home'}>
    <a href="/about" class='nav-item' class:active={page==='about'}>
      <span>About</span>
      <span>About</span>
    </a>
    <a href="/members" class='nav-item' class:active={page==='members'}>
      <span>Members</span>
      <span>Members</span>
    </a>
    <a href="/gallery" class='nav-item' class:active={page==='gallery'}>
      <span>Gallery</span>
      <span>Gallery</span>
    </a>
    <a href="/concert" class='nav-item' class:active={page==='concert'}>
      <span>Concert</span>
      <span>Concert</span>
    </a>
    <a href="/contact" class='nav-item' class:active={page==='contact'}>
      <span>Contact</span>
      <span>Contact</span>
    </a>
  </nav>
  <div class='flex-1'></div>
</header>

<style>
  .logo {
    min-width: 180px;
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
    transition: transform 0.4s cubic-bezier(1,-0.33, 0, 0.41);
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
    transition: left 0.3s cubic-bezier(1,-0.33, 0, 0.41);
    border-radius: 999px;
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

  .text-black {
    color: #111;
  }
  .nav-item.active {
    color: #791111;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
