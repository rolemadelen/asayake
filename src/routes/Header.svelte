<script>
  export let page
  let hamburgerNav

  const handleClick = (e) => {
    document.querySelector('.hamburger-menu').classList.toggle('active')
    hamburgerNav.classList.toggle('!rounded-none')
    hamburgerNav.classList.toggle('!top-0')
  }
</script>

<header class='flex justify-center max-w-screen-xl h-full mx-auto md:h-24 text-white overflow-hidden z-[9999]'>
  <slot name='logo'>
    <div class='flex-1'>
      <a href="/" >
        <img src="/asayake_logo.svg" alt="logo" class="logo w-[150px] md:w-40 py-2 pl-2 md:py-0"/>
      </a>
    </div>
  </slot>
  <nav class='hamburger-menu md:hidden w-screen z-[999]'>
    <div class='menu-button z-50' class:active={page!=='home'} on:click={handleClick}>
      <span class='menu-button__line'></span>
      <span class='menu-button__line'></span>
      <span class='menu-button__line'></span>
    </div>
    <div bind:this="{hamburgerNav}" class='fixed z-[-1] top-[-120%] left-0 overflow-hidden hamburger-menu-nav w-screen h-screen bg-[#791111ee] rounded-bl-[500px] rounded-br-[500px] ease-in-out duration-1000'>
      <div class='flex flex-col pt-16'>
        <a href="/" class='nav-item' class:active={page==='home'}>
          <p>Home</p>
        </a>
        <a href="/about" class='nav-item' class:active={page==='about'}>
          <p>About</p>
        </a>
        <a href="/members" class='nav-item' class:active={page==='members'}>
          <p>Members</p>
        </a>
        <a href="/gallery" class='nav-item' class:active={page==='gallery'}>
          <p>Gallery</p>
        </a>
        <a href="/concert" class='nav-item' class:active={page==='concert'}>
          <p>Concert</p>
        </a>
        <a href="/contact" class='nav-item' class:active={page==='contact'}>
          <p>Contact</p>
        </a>
      </div>
      <div class='absolute w-full overflow-hidden pt-4 bottom-14 left-1/2 -translate-x-1/2 text-sm m-auto text-center text-gray-300 mt-80 border-t-[1px] border-t-[#ffffff11]'>
        <p>asayaketaiko@gmail.com</p>
      </div>
    </div>
  </nav>
  <nav class='menu hidden md:flex z-[999]' class:text-black={page!=='home'}>
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
</header>

<style>
  .nav-item {
    position: relative;
    width: auto;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    overflow: hidden;
    margin: auto 1.2rem;
    letter-spacing: 1px;
    transform: translateY(0);
    text-transform: uppercase;
  }

  .hamburger-menu {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin: 8px;
  }

  .menu-button {
    transition: all 0.6s;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .menu-button__line {
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
    background: white;
    width: 45%;
    z-index: 50;
  }

  :global(.menu-button.active .menu-button__line) {
    background: black;
  }
  .menu-button__line:nth-of-type(1) {
    top: 15px;
  }
  .menu-button__line:nth-of-type(2) {
    top: 23px;
  }
  .menu-button__line:nth-of-type(3) {
    top: 31px;
  }

  :global(.hamburger-menu.active .menu-button__line:nth-of-type(1)) {
    top: 18px;
    left: 18px;
    transform: translateY(6px) rotate(-45deg);
    width: 30%;
  }

  :global(.hamburger-menu.active .menu-button__line:nth-of-type(2)) {
    opacity: 0;
  }

  :global(.hamburger-menu.active .menu-button__line:nth-of-type(3)) {
    top: 30px;
    left: 18px;
    transform: translateY(-6px) rotate(45deg);
    width: 30%;
  }

  :global(.hamburger-menu.active .menu-button) {
    transform: rotate(360deg);
  }

  .menu .nav-item span {
    transition: transform 0.4s ease;
  }

  .menu .nav-item span:first-child {
    transform:  translateY(50%);
  }
  .menu .nav-item span:last-child {
    transform: translateY(150%);
  }

  .menu .nav-item::after {
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

  .menu .nav-item:hover::after {
    left: 0;
  }
  
  .menu .nav-item:hover span:first-child {
    transform: translateY(-150%);
  }
  .menu .nav-item:hover span:last-child {
    transform: translateY(-50%);
  }

  .text-black {
    color: #111;
  }
  .menu .nav-item.active {
    color: #791111;
  }

  .hamburger-menu .nav-item.active::after {
    content: "";
    width: 60%;
    height: 1px;
    margin: 0 auto;
    background-color: #ffffff55;
    border-radius: 10px;
    position: absolute;
    top: 50%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
