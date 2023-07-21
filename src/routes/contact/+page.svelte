<script>
  import Header from "/src/routes/Header.svelte"
  import Footer from '../Footer.svelte'
  import Cursor from '../Cursor.svelte'
  import IoIosMail from 'svelte-icons/io/IoIosMail.svelte'
  import FaCcPaypal from 'svelte-icons/fa/FaCcPaypal.svelte'
  import FaFacebookSquare from 'svelte-icons/fa/FaFacebookSquare.svelte'
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
  import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte'
</script>

<svelte:head>
  <title>Asayake Taiko | Contact Us</title>
  <meta name="description" content="Asayake Taiko | Contact Us" />
</svelte:head>

<Cursor />
<main class='main-wrapper'>
  <Header page="contact" />
  <div class='max-w-screen-xl m-auto'>
    <div class='border-y-[1px] px-8'>
      <div class='text-3xl mt-16 mb-1'>Contact</div>
      <p class='font-light text-gray-500'>General inquiries? Performance Request? Let us know!</p>
      <div class="mt-4 flex items-center mb-16">
        <div class='email w-10 mr-2 text-[#a4a4a4]'>
          <IoIosMail />
        </div>
        <p class='border-b-gray-300 border-dashed border-b-[1px]'>
          <a href="mailto:asayaketaiko@gmail.com">asayaketaiko@gmail.com</a>
        </p>
      </div>
    </div>

    <div class='mb-16 px-8'>
      <div class='max-w-screen-xl text-3xl mt-16 mb-2'>Donate</div>
      <p class='font-light text-gray-500 max-w-[40rem]'>Asayake Taiko is run on equipment and resources primarily sourced through fundraising and donations. We greatly appreciate any and all contributions, no matter the amount, that goes to the bettering of our team's musical and cultural development.</p>
      <div class='mt-4 grid grid-cols-2 md:grid-cols-3 my-auto max-w-screen-md gap-2'>
        <div class="mt-4 flex items-center">
          <div class='email w-10 mr-2 text-[#253B80]'>
            <FaCcPaypal />
          </div>
          <p class='border-b-gray-300 border-dashed border-b-[1px]'>
            <a href="https://www.paypal.com/paypalme2/taikothon2k19">PayPal</a>
          </p>
        </div>
        <div class="mt-4 flex items-center">
          <div class='email w-10 mr-2 text-[#253B80]'>
            <img src="/icons/venmo.svg" alt="venmo" />
          </div>
          <p class='border-b-gray-300 border-dashed border-b-[1px]'>
            <a href="https://venmo.com/Asayake_Taiko">Venmo</a>
          </p>
        </div>
      </div>
    </div>

    <div class='mb-16 border-t-[1px] px-8'>
      <div class='max-w-screen-xl text-3xl mt-16 mb-2'>Connect</div>
      <p class='font-light text-gray-500 max-w-[40rem]'>
        Be the first to receive updates! Like our Facebook page, follow us on Instagram, and/or subscribe to our YouTube channel.
      </p>
      <div class='mt-4 grid grid-cols-2 md:grid-cols-3 my-auto max-w-screen-md gap-2'>
        <div class="mt-4 flex items-center">
          <div class='email w-10 mr-2 text-[#4267B2]'>
            <FaFacebookSquare />
          </div>
          <p class='border-b-gray-300 border-dashed border-b-[1px]'>
            <a href="https://www.paypal.com/paypalme2/taikothon2k19">Facebook</a>
          </p>
        </div>
        <div class="mt-4 flex items-center">
          <div class='email w-10 mr-2 text-red'>
            <FaInstagram />
          </div>
          <p class='border-b-gray-300 border-dashed border-b-[1px]'>
            <a href="https://venmo.com/Asayake_Taiko">Instagram</a>
          </p>
        </div>
        <div class="mt-4 flex items-center">
          <div class='email w-10 mr-2 text-red-700'>
            <FaYoutube />
          </div>
          <p class='border-b-gray-300 border-dashed border-b-[1px]'>
            <a href="https://www.youtube.com/user/AsayakeTaiko/">Youtube</a>
          </p>
        </div>
      </div>
    </div>

  </div>
</main>
<Footer />

<style>
  main {
    font-family: 'Poppins', sans-serif;
  }
</style>
