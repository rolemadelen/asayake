<script lang="ts">
  import Header from '../Header.svelte'
  import Footer from '../Footer.svelte'
  import Cursor from '../Cursor.svelte'
</script>

<svelte:head>
  <title>Asayake Taiko | Contact Us</title>
  <meta name="description" content="Asayake Taiko | Contact Us" />
</svelte:head>

<Header page="contact" />
<section class='banner-wrapper'>
  <div class='banner'>
    <div>
      <h1>Contact</h1>
    </div>
  </div>
</section>
<section class='main max-w-screen-2xl'>
  <div class='left'>
    <div class='left-section'>
      <h2>General Inquiries</h2>
      <p>If you have any questions about our taiko team or need more information, please feel free to get in touch with us.</p>
      <div class='links'>
        <a class='links-email' href='mailto:asayaketaiko@gmail.com'>
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V2.04793L10 6.1438L20 2.04793V0H0ZM0 4.09587V12.2876H20V4.09587L10 8.19173L0 4.09587Z" fill="#111111"/>
          </svg>          
          <span>asayaketaiko@gmail.com</span>
        </a>
      </div>
    </div>
    <div class='left-section'>
      <h2>Donate</h2>
      <p>Asayake Taiko is run on equipment and resources primarily sourced through fundraising and donations. We greatly appreciate any and all contributions, no matter the amount, that goes to the bettering of our team's musical and cultural development.</p>
      <div class='links'>
        <a class='links-paypal' href="https://www.paypal.com/paypalme2/taikothon2k19">
          <!-- License: MIT. Made by michaelampr: https://github.com/michaelampr/jam -->
          <svg fill="#000000" width="25" height="25" viewBox="-4 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-paypal">
            <path d='M4.328 16.127l-.011.07a.899.899 0 0 1-.887.744H.9a.892.892 0 0 1-.88-1.04L2.57.745A.892.892 0 0 1 3.45 0h6.92a4.141 4.141 0 0 1 4.142 4.141c0 .273-.017.54-.05.804a3.629 3.629 0 0 1 1.53 2.962 5.722 5.722 0 0 1-5.72 5.722h-.583c-.653 0-1.211.472-1.32 1.117l-.314 1.87.314-1.87a1.339 1.339 0 0 1 1.32-1.117h.582a5.722 5.722 0 0 0 5.722-5.722 3.629 3.629 0 0 0-1.53-2.962 6.52 6.52 0 0 1-6.47 5.716H6.06a.969.969 0 0 0-.93.701l-1.155 6.862c-.08.48.289.916.775.916h2.214a.786.786 0 0 0 .775-.655l.315-1.87-.315 1.87a.786.786 0 0 1-.775.655H4.751a.782.782 0 0 1-.6-.278.782.782 0 0 1-.175-.638l.352-2.097z' /><path d='M15.45 5.995c.365.567.578 1.242.578 1.967a5.722 5.722 0 0 1-5.722 5.722h-.581c-.654 0-1.212.472-1.32 1.117l-.63 3.739a.786.786 0 0 1-.774.655H4.973l1.15-6.833c.118-.41.495-.7.93-.7h1.932a6.52 6.52 0 0 0 6.464-5.667zm-10.477 13.2h-.187a.786.786 0 0 1-.775-.916l.057-.338h.355a.899.899 0 0 0 .886-.743l.012-.07-.348 2.067z'/>
          </svg>
          <span>PayPal</span>
        </a>
        <a class='links-venmo' href="https://venmo.com/Asayake_Taiko">
          <!-- License: MIT. Made by Ionicons: https://github.com/ionic-team/ionicons -->
          <svg width="25" height="25" viewBox="0 0 512 512" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
            <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.6C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.8,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM278,387H174.32L132.75,138.44l90.75-8.62,22,176.87c20.53-33.45,45.88-86,45.88-121.87,0-19.62-3.36-33-8.61-44L365.4,124.1c9.56,15.78,13.86,32,13.86,52.57C379.25,242.17,323.34,327.26,278,387Z"/>
          </svg>
          <span>Venmo</span>
        </a>
      </div>
    </div>
    <div class='left-section'>
      <h2>Connect</h2>
      <p>Be the first to receive updates! Like our Facebook page, follow us on Instagram, and/or subscribe to our YouTube channel.</p>
      <div class='links'>
        <a class='links-ig gradient' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/asayake_taiko/">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C9.10417 0 8.68021 0.015625 7.34687 0.075C6.01562 0.1375 5.10937 0.346875 4.3125 0.65625C3.49062 0.975 2.79271 1.40312 2.09792 2.09792C1.40312 2.79271 0.973958 3.48958 0.65625 4.3125C0.346875 5.10937 0.136458 6.01562 0.075 7.34687C0.0125 8.68021 0 9.10417 0 12.5C0 15.8958 0.015625 16.3198 0.075 17.6531C0.1375 18.9833 0.346875 19.8906 0.65625 20.6875C0.970096 21.5217 1.46208 22.2775 2.09792 22.9021C2.72216 23.5384 3.47802 24.0304 4.3125 24.3437C5.11042 24.6521 6.01667 24.8635 7.34687 24.925C8.68021 24.9875 9.10417 25 12.5 25C15.8958 25 16.3198 24.9844 17.6531 24.925C18.9833 24.8625 19.8906 24.6521 20.6875 24.3437C21.5215 24.0295 22.2772 23.5376 22.9021 22.9021C23.5386 22.278 24.0307 21.5221 24.3437 20.6875C24.6521 19.8906 24.8635 18.9833 24.925 17.6531C24.9875 16.3198 25 15.8958 25 12.5C25 9.10417 24.9844 8.68021 24.925 7.34687C24.8625 6.01667 24.6521 5.10833 24.3437 4.3125C24.0298 3.47835 23.5378 2.72263 22.9021 2.09792C22.2783 1.46108 21.5223 0.968948 20.6875 0.65625C19.8906 0.346875 18.9833 0.136458 17.6531 0.075C16.3198 0.0125 15.8958 0 12.5 0ZM12.5 2.25C15.8365 2.25 16.2344 2.26667 17.5521 2.32396C18.7708 2.38125 19.4323 2.58333 19.8719 2.75625C20.4573 2.98229 20.8719 3.25312 21.3115 3.68958C21.7479 4.12708 22.0187 4.54271 22.2448 5.12812C22.4156 5.56771 22.6198 6.22917 22.675 7.44792C22.7344 8.76667 22.7479 9.1625 22.7479 12.5C22.7479 15.8375 22.7323 16.2344 22.6708 17.5521C22.6073 18.7708 22.4042 19.4323 22.2323 19.8719C22.0289 20.4143 21.7093 20.9057 21.2958 21.3115C20.8918 21.7253 20.4008 22.0441 19.8583 22.2448C19.4208 22.4156 18.749 22.6198 17.5302 22.675C16.2031 22.7344 15.8125 22.7479 12.4687 22.7479C9.12396 22.7479 8.73333 22.7323 7.40729 22.6708C6.1875 22.6073 5.51562 22.4042 5.07812 22.2323C4.53532 22.0315 4.04445 21.7115 3.64167 21.2958C3.22352 20.8945 2.90283 20.4028 2.70417 19.8583C2.53229 19.4208 2.33021 18.749 2.26667 17.5302C2.21979 16.2177 2.20312 15.8125 2.20312 12.4844C2.20312 9.15521 2.21979 8.74896 2.26667 7.42083C2.33021 6.20208 2.53229 5.53125 2.70417 5.09375C2.92292 4.5 3.20312 4.09375 3.64167 3.65521C4.07812 3.21875 4.48542 2.9375 5.07812 2.71979C5.51562 2.54687 6.17292 2.34375 7.39167 2.28125C8.71979 2.23437 9.11042 2.21875 12.4531 2.21875L12.5 2.25ZM12.5 6.08125C11.6571 6.08125 10.8224 6.24728 10.0437 6.56985C9.26489 6.89242 8.55729 7.36522 7.96126 7.96126C7.36522 8.55729 6.89242 9.26489 6.56985 10.0437C6.24728 10.8224 6.08125 11.6571 6.08125 12.5C6.08125 13.3429 6.24728 14.1776 6.56985 14.9563C6.89242 15.7351 7.36522 16.4427 7.96126 17.0387C8.55729 17.6348 9.26489 18.1076 10.0437 18.4302C10.8224 18.7527 11.6571 18.9187 12.5 18.9187C14.2024 18.9187 15.835 18.2425 17.0387 17.0387C18.2425 15.835 18.9187 14.2024 18.9187 12.5C18.9187 10.7976 18.2425 9.16501 17.0387 7.96126C15.835 6.75751 14.2024 6.08125 12.5 6.08125ZM12.5 16.6667C10.1979 16.6667 8.33333 14.8021 8.33333 12.5C8.33333 10.1979 10.1979 8.33333 12.5 8.33333C14.8021 8.33333 16.6667 10.1979 16.6667 12.5C16.6667 14.8021 14.8021 16.6667 12.5 16.6667ZM20.6729 5.82812C20.6584 6.21628 20.4941 6.58371 20.2144 6.8532C19.9346 7.12269 19.5613 7.27326 19.1729 7.27326C18.7845 7.27326 18.4112 7.12269 18.1315 6.8532C17.8518 6.58371 17.6874 6.21628 17.6729 5.82812C17.6729 5.4303 17.831 5.04877 18.1123 4.76746C18.3936 4.48616 18.7751 4.32813 19.1729 4.32813C19.5707 4.32813 19.9523 4.48616 20.2336 4.76746C20.5149 5.04877 20.6729 5.4303 20.6729 5.82812Z" fill="black"/>
          </svg>
          <span>Instagram</span>
        </a>
        <a class='links-yt' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/AsayakeTaiko/">
          <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.4781 3.2169C24.3332 2.59783 24.0568 2.0338 23.6756 1.57932C23.2945 1.12484 22.8215 0.795293 22.3023 0.62252C20.3536 1.78484e-05 12.5111 1.76259e-05 12.5111 1.76259e-05C12.5111 1.76259e-05 4.68843 -0.0124073 2.71999 0.62252C2.20079 0.795293 1.72776 1.12484 1.34661 1.57932C0.965458 2.0338 0.689076 2.59783 0.544177 3.2169C0.174791 5.59572 -0.00731882 8.01049 0.000225076 10.4297C-0.00589269 12.8398 0.176211 15.2454 0.544177 17.6152C0.689076 18.2343 0.965458 18.7983 1.34661 19.2528C1.72776 19.7073 2.20079 20.0368 2.71999 20.2096C4.66654 20.8333 12.5111 20.8333 12.5111 20.8333C12.5111 20.8333 20.3328 20.8333 22.3023 20.2096C22.8215 20.0368 23.2945 19.7073 23.6756 19.2528C24.0568 18.7983 24.3332 18.2343 24.4781 17.6152C24.8383 15.2445 25.0128 12.839 24.9991 10.4297C25.0142 8.01135 24.8398 5.59658 24.4781 3.2169ZM10.0081 14.8916V5.95417L16.5355 10.4297L10.0081 14.8916Z" fill="black"/>
          </svg>   
          <span>YouTube</span>       
        </a>
        <a class='links-fb' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/AsayakeTaiko/">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.999 12.577C24.999 5.63032 19.4029 0 12.4995 0C5.59607 0 0 5.63032 0 12.577C0 18.853 4.57102 24.0557 10.5463 24.999V16.2118H7.37322V12.576H10.5463V9.80589C10.5463 6.65325 12.413 4.91238 15.2673 4.91238C16.6351 4.91238 18.0653 5.15763 18.0653 5.15763V8.25263H16.4903C14.9381 8.25263 14.4537 9.22211 14.4537 10.2167V12.577H17.9205L17.3663 16.2128H14.4537V25C20.429 24.0567 25 18.854 25 12.577H24.999Z" fill="black"/>
          </svg>   
          <span>Facebook</span>       
        </a>
      </div>
    </div>
  </div>
  <div class='right'>
    <h2>Performance Request</h2>
    <form id="request-performance" method="POST">
      <div class='absolute top-0 left-0 z-[-1] opacity-0'>
        <input type="text" id="honey" name="honey" />
      </div>
      <div>
        <div class='flex flex-col'>
          <label for="name">Name: * </label>
          <input type="text" id="name" name="name" placeholder="John Doe" class='mr' required />
        </div>
        <div class='flex flex-col'>
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="123-456-7890" />
        </div>
      </div>
      <div>
        <div class='flex flex-col w-full'>
          <label for="email">Email: * </label>
          <input class='!w-full' type="email" id="email" name="email" placeholder="hello@example.com" required />
        </div>
      </div>
      <div>
        <div class='flex flex-col w-full'>
          <label for="organization">Name of the Organization / Event: * </label>
          <input class='!w-full' type="text" name="organization" placeholder="Asayake Taiko" required />
        </div>
      </div>
      <div>
        <div class='flex flex-col'>
          <label for="date">Date of Performance: * </label>
          <input type="text" name="date" placeholder="2023-01-01" class='mr' required />
        </div>
        <div class='flex flex-col'>
          <label for="email">Time of Performance: * </label>
          <input type="text" name="time" placeholder="12:30 PM" required/>
        </div>
      </div>
      <div class='flex flex-col'>
        <label for="detail">Performance Description:</label>
        <textarea name="detail" placeholder="Performance Description (indoor or outdoor, theater stage or grass field, performance location and duration, type of audience, and any additional information we should know!)"></textarea>
      </div>

      <button type='submit' class="submit">
        Send a request 
        <svg width="42" height="12" viewBox="0 0 42 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6H41M41 6L36 1M41 6L37 10L36 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>          
      </button>
    </form>
  </div>
</section>

<Footer />

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
      font-size: px2rem(64);
      font-weight: bold;
    }
  }
  
  .main {
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: px2rem(24);
      font-weight: 600;
    }
    .left {
      width: 80%;

      &-section {
        font-size: px2rem(16);
        line-height: 1.5;

        .links {
          margin-top: 15px;
          display: flex;
          // flex-wrap: wrap;
          align-items: center;

          span {
            font-size: px2rem(14);
            color: #333;
            padding-left: 5px;
            transition: color 0.3s ease;
          }

          svg {
            width: max(25px, px2vw(30));
            height: max(25px, px2vw(30));
            max-width: 30px;
            max-height: 30px;
            will-change: transform;
            transition: transform 0.3s ease;
          }

          &-yt, &-ig, &-fb, &-paypal, &-venmo, &-email {
            margin-right: 50px;
            display: flex;
            align-items: center;
            
            &:hover {
              span {
                color: #000;
              }
              svg {
                transform: scale(1.1);
              }
            }
          }
        }
      }

      h2 {
        margin-bottom: 5px;
      }

      & > div {
        margin-bottom: px2rem(100);
      }
    }
    .right {
      width: 80%;
      // width: 830px;
      // margin-right: 223px;
      padding-top: 100px;
      border-top: 1px solid #eee;

      h2 {
        margin-bottom: 40px;
      }
    }
  }

  form {
    .submit {
      margin-top: 60px;
      background-color: #791111;
      width: px2em(250, 16);
      height: px2em(60, 16);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: px2rem(16);
      color: #eee;
      font-weight: 400;
      border-radius: 5px;
      box-shadow: 0 0 5px 0 black;

      svg {
        width: min(25px, px2vw(40));
        margin-left: max(20px, px2vw(30));
      }
      
      &:hover {
        svg {
          animation: slideRight 1s infinite alternate ease;
        }
      }
    }

    input, textarea {
      border: 1px solid #bcbcbc;
      border-radius: 5px;
      font-size: px2rem(16);
      padding: 0 24px;

      &::placeholder {
        font-size: px2rem(14);
        color: #999;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      flex: 1;

      & > div:nth-child(2) {
        margin-left: px2rem(16);
      }

      label {
        color: #333;
        font-size: px2rem(14);
        margin-bottom: 5px;
      }

      input {
        height: 50px;
        // width: 360px;
        width: 100%;
        margin-bottom: 32px;
      }
    }

    textarea {
      width: 100%;
      height: 177px;
      padding-top: 20px;
      line-height: 1.25;
    }
  }

@keyframes slideRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(max(10px, px2vw(20)));
  }

}

@media screen and (max-width: 500px) {
  form {
    div {
      flex-direction: column;
      margin-left: 0 !important;
    }
  }
}
@media screen and (max-width: 699px) {
  .main {
    .left {
      .links {
        flex-wrap: wrap;
        a {
          margin-right: 2em;
          margin-bottom: 1em;
        }
        span {
          // display: none;
        }
      }
    }

    .left, .right {
      width: 90%;
    }
  }
}
  
@media screen and (min-width: 900px) {
  .main {
    flex-direction: row;
    justify-content: space-between;
    margin: 100px px2vw(32);

    .links {
      flex-wrap: nowrap;
    }
    
    .left {
      width: min(400px, 50%);
    }
    .right {
      padding: 0;
      padding-left: 32px;
      border: none;
      border-left: 1px solid #eee;
      width: min(px2vw(830), 50%);
    }
  }
}

@media screen and (min-width: 1000px) {
  .main {
    margin: 100px auto;
    padding: 0 px2em(32, 16);
  }
}
</style>
