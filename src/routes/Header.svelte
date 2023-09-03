<script lang="ts">
 export let page: string;
  let hamburgerNav: HTMLDivElement;

  let navLinks = [
    { href: "/", page: "home", label: "Home" },
    { href: "/about", page: "about", label: "About" },
    { href: "/members", page: "members", label: "Members" },
    { href: "/gallery", page: "gallery", label: "Gallery" },
    { href: "/concert", page: "concert", label: "Concert" },
    { href: "/contact", page: "contact", label: "Contact" },
  ]

  const handleClick = () => {
    document.querySelector('.hamburger-menu')?.classList.toggle('active')
    hamburgerNav.classList.toggle('!rounded-none')
    hamburgerNav.classList.toggle('!top-0')
  }
</script>

<header class='text-white z-[999] relative' class:backdrop-blur-md={page!=='home'}>
  <slot name='logo'>
    <div class=''>
      <a href="/" class='flex h-full' class:hidden={page==='home'}>
        <img src="/asayake_logo.svg" alt="logo" class="logo"/>
      </a>
    </div>
  </slot>
  
  <div class='flex items-center'>
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
    </nav>
    <nav class='hamburger-menu'>
      <div class='menu-button z-50 relative' class:text-black={page!=='home'} on:click={handleClick}>
        <span class='menu-button__line'></span>
        <span class='menu-button__line'></span>
        <span class='menu-button__line'></span>
      </div>

      <div bind:this="{hamburgerNav}" class='absolute top-[-120vh] left-0 w-screen h-screen bg-asa-red rounded-bl-[300px] rounded-br-[300px] ease-out duration-1000 bg-opacity-95 overflow-y-auto'>
        <div class='flex flex-col pt-20'>
          {#each navLinks as navLink}
            <a href={navLink.href} class='nav-item' class:active={page===navLink.page}>
              <p>{navLink.label}</p>
            </a>
          {/each}
        </div>
        <div class='sns flex items-center justify-end mx-auto my-4'>
          <a class='footer-sns-ig' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/asayake_taiko/">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class='bg-white' d="M12.5 0C9.10417 0 8.68021 0.015625 7.34687 0.075C6.01562 0.1375 5.10937 0.346875 4.3125 0.65625C3.49062 0.975 2.79271 1.40312 2.09792 2.09792C1.40312 2.79271 0.973958 3.48958 0.65625 4.3125C0.346875 5.10937 0.136458 6.01562 0.075 7.34687C0.0125 8.68021 0 9.10417 0 12.5C0 15.8958 0.015625 16.3198 0.075 17.6531C0.1375 18.9833 0.346875 19.8906 0.65625 20.6875C0.970096 21.5217 1.46208 22.2775 2.09792 22.9021C2.72216 23.5384 3.47802 24.0304 4.3125 24.3437C5.11042 24.6521 6.01667 24.8635 7.34687 24.925C8.68021 24.9875 9.10417 25 12.5 25C15.8958 25 16.3198 24.9844 17.6531 24.925C18.9833 24.8625 19.8906 24.6521 20.6875 24.3437C21.5215 24.0295 22.2772 23.5376 22.9021 22.9021C23.5386 22.278 24.0307 21.5221 24.3437 20.6875C24.6521 19.8906 24.8635 18.9833 24.925 17.6531C24.9875 16.3198 25 15.8958 25 12.5C25 9.10417 24.9844 8.68021 24.925 7.34687C24.8625 6.01667 24.6521 5.10833 24.3437 4.3125C24.0298 3.47835 23.5378 2.72263 22.9021 2.09792C22.2783 1.46108 21.5223 0.968948 20.6875 0.65625C19.8906 0.346875 18.9833 0.136458 17.6531 0.075C16.3198 0.0125 15.8958 0 12.5 0ZM12.5 2.25C15.8365 2.25 16.2344 2.26667 17.5521 2.32396C18.7708 2.38125 19.4323 2.58333 19.8719 2.75625C20.4573 2.98229 20.8719 3.25312 21.3115 3.68958C21.7479 4.12708 22.0187 4.54271 22.2448 5.12812C22.4156 5.56771 22.6198 6.22917 22.675 7.44792C22.7344 8.76667 22.7479 9.1625 22.7479 12.5C22.7479 15.8375 22.7323 16.2344 22.6708 17.5521C22.6073 18.7708 22.4042 19.4323 22.2323 19.8719C22.0289 20.4143 21.7093 20.9057 21.2958 21.3115C20.8918 21.7253 20.4008 22.0441 19.8583 22.2448C19.4208 22.4156 18.749 22.6198 17.5302 22.675C16.2031 22.7344 15.8125 22.7479 12.4687 22.7479C9.12396 22.7479 8.73333 22.7323 7.40729 22.6708C6.1875 22.6073 5.51562 22.4042 5.07812 22.2323C4.53532 22.0315 4.04445 21.7115 3.64167 21.2958C3.22352 20.8945 2.90283 20.4028 2.70417 19.8583C2.53229 19.4208 2.33021 18.749 2.26667 17.5302C2.21979 16.2177 2.20312 15.8125 2.20312 12.4844C2.20312 9.15521 2.21979 8.74896 2.26667 7.42083C2.33021 6.20208 2.53229 5.53125 2.70417 5.09375C2.92292 4.5 3.20312 4.09375 3.64167 3.65521C4.07812 3.21875 4.48542 2.9375 5.07812 2.71979C5.51562 2.54687 6.17292 2.34375 7.39167 2.28125C8.71979 2.23437 9.11042 2.21875 12.4531 2.21875L12.5 2.25ZM12.5 6.08125C11.6571 6.08125 10.8224 6.24728 10.0437 6.56985C9.26489 6.89242 8.55729 7.36522 7.96126 7.96126C7.36522 8.55729 6.89242 9.26489 6.56985 10.0437C6.24728 10.8224 6.08125 11.6571 6.08125 12.5C6.08125 13.3429 6.24728 14.1776 6.56985 14.9563C6.89242 15.7351 7.36522 16.4427 7.96126 17.0387C8.55729 17.6348 9.26489 18.1076 10.0437 18.4302C10.8224 18.7527 11.6571 18.9187 12.5 18.9187C14.2024 18.9187 15.835 18.2425 17.0387 17.0387C18.2425 15.835 18.9187 14.2024 18.9187 12.5C18.9187 10.7976 18.2425 9.16501 17.0387 7.96126C15.835 6.75751 14.2024 6.08125 12.5 6.08125ZM12.5 16.6667C10.1979 16.6667 8.33333 14.8021 8.33333 12.5C8.33333 10.1979 10.1979 8.33333 12.5 8.33333C14.8021 8.33333 16.6667 10.1979 16.6667 12.5C16.6667 14.8021 14.8021 16.6667 12.5 16.6667ZM20.6729 5.82812C20.6584 6.21628 20.4941 6.58371 20.2144 6.8532C19.9346 7.12269 19.5613 7.27326 19.1729 7.27326C18.7845 7.27326 18.4112 7.12269 18.1315 6.8532C17.8518 6.58371 17.6874 6.21628 17.6729 5.82812C17.6729 5.4303 17.831 5.04877 18.1123 4.76746C18.3936 4.48616 18.7751 4.32813 19.1729 4.32813C19.5707 4.32813 19.9523 4.48616 20.2336 4.76746C20.5149 5.04877 20.6729 5.4303 20.6729 5.82812Z" fill="black"/>
            </svg>
          </a>
          <a class='footer-sns-fb' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/AsayakeTaiko/">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.999 12.577C24.999 5.63032 19.4029 0 12.4995 0C5.59607 0 0 5.63032 0 12.577C0 18.853 4.57102 24.0557 10.5463 24.999V16.2118H7.37322V12.576H10.5463V9.80589C10.5463 6.65325 12.413 4.91238 15.2673 4.91238C16.6351 4.91238 18.0653 5.15763 18.0653 5.15763V8.25263H16.4903C14.9381 8.25263 14.4537 9.22211 14.4537 10.2167V12.577H17.9205L17.3663 16.2128H14.4537V25C20.429 24.0567 25 18.854 25 12.577H24.999Z" fill="black"/>
            </svg>          
          </a>
          <a class='footer-sns-yt' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/AsayakeTaiko/">
            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.4781 3.2169C24.3332 2.59783 24.0568 2.0338 23.6756 1.57932C23.2945 1.12484 22.8215 0.795293 22.3023 0.62252C20.3536 1.78484e-05 12.5111 1.76259e-05 12.5111 1.76259e-05C12.5111 1.76259e-05 4.68843 -0.0124073 2.71999 0.62252C2.20079 0.795293 1.72776 1.12484 1.34661 1.57932C0.965458 2.0338 0.689076 2.59783 0.544177 3.2169C0.174791 5.59572 -0.00731882 8.01049 0.000225076 10.4297C-0.00589269 12.8398 0.176211 15.2454 0.544177 17.6152C0.689076 18.2343 0.965458 18.7983 1.34661 19.2528C1.72776 19.7073 2.20079 20.0368 2.71999 20.2096C4.66654 20.8333 12.5111 20.8333 12.5111 20.8333C12.5111 20.8333 20.3328 20.8333 22.3023 20.2096C22.8215 20.0368 23.2945 19.7073 23.6756 19.2528C24.0568 18.7983 24.3332 18.2343 24.4781 17.6152C24.8383 15.2445 25.0128 12.839 24.9991 10.4297C25.0142 8.01135 24.8398 5.59658 24.4781 3.2169ZM10.0081 14.8916V5.95417L16.5355 10.4297L10.0081 14.8916Z" fill="black"/>
            </svg>          
          </a>
        </div>
        <div class='email mx-auto text-right'>
          <p>asayaketaiko@gmail.com</p>
        </div>
      </div>
    </nav>
  </div>
</header>

<style lang="scss">
  
header {
  position: fixed;
  width: 100%;
  height: px2em(80);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 px2em(16);


  .logo {
    width: max(130px, px2vw(180));
  }
}

.menu {
  .nav-item {
    position: relative;
    font-size: px2rem(14);
    font-weight: bold;
    width: px2em(80, 14);
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
      height: 1px;
      border-bottom: 1px solid #791111;
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
  width: 50px;
  height: 50px;
  border-radius: px2vw(5);
  z-index: 50;
  
  .nav-item {
    font-size: px2rem(50);
    font-weight: 500;
    line-height: 1;
    padding: max(20px, px2vw(50)) px2em(15);
    border-top: 1px solid #ffffff2e;
    &:last-of-type {
      border-bottom: 1px solid #ffffff2e;
      margin-bottom: px2rem(32);
    }

    &.active {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
      text-underline-position: under;
    }
  }

  .email {
    font-size: px2rem(16);
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

  .email {
    padding-right: px2rem(24);
    margin-bottom: px2rem(48);
  }
  .sns {
    a {
      margin-right: px2rem(24);
    }
    svg {
      path {
        fill: #ebebeb;
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
  background-color: white !important;
}

:global(.hamburger-menu.active .menu-button__line:nth-of-type(2)) {
  opacity: 0 !important;
}

:global(.hamburger-menu.active .menu-button__line:nth-of-type(3)) {
  top: 30px !important;
  left: 18px !important;
  transform: translateY(-6px) rotate(45deg) !important;
  width: 30% !important;
  background-color: white !important;
}

:global(.hamburger-menu.active .menu-button) {
  transform: rotate(360deg) !important;
}

a {
  color: inherit;
  text-decoration: none;
}

@media screen and (min-width: 700px) {
  .hamburger-menu {
    .nav-item {
      font-size: px2rem(70);
      padding: px2rem(25) px2rem(75);
      font-weight: 800;
      margin: auto;
      width: 50%;
      border: none;
    }

    .email, .sns {
      width: 50%;
      padding-right: 0;
    }

    .sns {
      a {
        margin: 0;
        margin-left: px2rem(24);
      }
    }
  }
}
</style>
