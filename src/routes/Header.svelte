<script>
  export let page
  let hamburgerNav

  const handleClick = (e) => {
    document.querySelector('.hamburger-menu').classList.toggle('active')
    hamburgerNav.classList.toggle('!rounded-none')
    hamburgerNav.classList.toggle('!top-0')
  }
</script>

<header class='text-white z-[999] relative'>
  <slot name='logo'>
    <div class='flex-1'>
      <a href="/" class='flex h-full' class:hidden={page==='home'}>
        <img src="/asayake_logo.svg" alt="logo" class="logo"/>
      </a>
    </div>
  </slot>
  
  <nav class='menu flex items-center' class:text-black={page!=='home'}>
    <a href="/about" class='nav-item hidden lg:flex' class:active={page==='about'}>
      <span>About</span>
      <span>About</span>
    </a>
    <a href="/members" class='nav-item hidden lg:flex' class:active={page==='members'}>
      <span>Members</span>
      <span>Members</span>
    </a>
    <a href="/gallery" class='nav-item hidden lg:flex' class:active={page==='gallery'}>
      <span>Gallery</span>
      <span>Gallery</span>
    </a>
    <a href="/concert" class='nav-item hidden lg:flex' class:active={page==='concert'}>
      <span>Concert</span>
      <span>Concert</span>
    </a>
    <a href="/contact" class='nav-item hidden lg:flex' class:active={page==='contact'}>
      <span>Contact</span>
      <span>Contact</span>
    </a>
    <nav class='hamburger-menu relative'>
      <div class='menu-button z-50 relative' class:text-black={page!=='home'} on:click={handleClick}>
        <span class='menu-button__line'></span>
        <span class='menu-button__line'></span>
        <span class='menu-button__line'></span>
      </div>

      <div bind:this="{hamburgerNav}" class='fixed top-[-120%] left-0 hamburger-menu-nav w-screen h-screen bg-asa-red rounded-bl-[300px] rounded-br-[300px] ease-out duration-1000'>
        <div class='flex flex-col items-center text-center pt-20'>
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
  </nav>
</header>

<style lang="scss">
@function px2vw($size, $bp: 1920) {
  @return ($size / $bp * 100) * 1vw;
}

header {
  position: relative;
  display: flex;
  height: 80px;
  align-items: center;
  margin: auto 32px;

  .logo {
    width: 180px;
  }
}

.menu {
  .nav-item {
    position: relative;
    font-size: 14px;
    font-weight: bold;
    width: 80px;
    height: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform: translateY(0);
    margin-right: 32px;
    letter-spacing: 0.5px;

    &::after {
      content:"";
      position: absolute;
      width: 100%;
      height: px2vw(1);
      border-bottom: px2vw(1) solid #791111;
      left: -100%;
      bottom: 0;
      transition: left 0.3s cubic-bezier(1,-0.33, 0, 0.41);
      border-radius: 999px;
    }

    &:hover {
      &::after {
        left: 0;
      }

      span:first-child {
        transform: translateY(-150%);
      }

      span:last-child {
        transform: translateY(-50%);
      }
    }

    &.active {
      color: #791111;
    }

    span {
      transition: transform 0.4s ease;

      &:first-child {
        transform:  translateY(50%);
      }

      &:last-child {
        transform: translateY(150%);
      }
    }
  }
}

.hamburger-menu {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  z-index: 50;
  
  .nav-item {
    font-size: max(14px, px2vw(20));
    width: max(80px, px2vw(100));

    &.active {
      color: inherit;
    }
  }
  
  .menu-button {
    transition: all 0.6s;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &.text-black {
      .menu-button__line {
        background-color: #111;
      }
    }

    &__line {
      display: inline-block;
      transition: all 0.4s;
      position: absolute;
      left: 14px;
      height: 3px;
      border-radius: 2px;
      background-color: white;
      width: 45%;
      z-index: 50;

      &:nth-of-type(1) {
        top: 15px;
      }
      &:nth-of-type(2) {
        top: 23px;
      }
      &:nth-of-type(3) {
        top: 31px;
      }
    }
  }
}

.text-black {
  color: #111;
}

:global(.menu-button.active .menu-button__line) {
    background: black;
  }

:global(.hamburger-menu.active .menu-button__line:nth-of-type(1)) {
  top: 18px !important;
  left: 18px !important;
  transform: translateY(6px) rotate(-45deg) !important;
  width: 30% !important;
}

:global(.hamburger-menu.active .menu-button__line:nth-of-type(2)) {
  opacity: 0 !important;
}

:global(.hamburger-menu.active .menu-button__line:nth-of-type(3)) {
  top: 30px !important;
  left: 18px !important;
  transform: translateY(-6px) rotate(45deg) !important;
  width: 30% !important;
}

:global(.hamburger-menu.active .menu-button) {
  transform: rotate(360deg) !important;
}

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
