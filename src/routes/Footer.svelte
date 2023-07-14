<script>
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
  import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte'
  import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte'
  import IoMdMail from 'svelte-icons/io/IoMdMail.svelte'
</script>

<footer>
  <div class='copyright'>
    <p>Copyright © 2023</p>
  </div>
  <div>
    <a class='ig' href='https://www.instagram.com/asayake_taiko/' target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a class='fb' href='https://www.facebook.com/AsayakeTaiko/' target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a class='yt' href='https://www.youtube.com/user/AsayakeTaiko/' target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
    <a class='mail' href='mailto:asayaketaiko@gmail.com'>
      <IoMdMail />
    </a>
  </div>
</footer>

<style>
  footer {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #570d0d;
    color: white;
    font-weight: 200;
    display: flex;
    height: 4rem;
    transition: height 0.3s ease-in-out;
  }

  footer div {
    margin: 0.8rem auto;
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    width: 280px;
  }

  footer div a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ig,
  .yt,
  .fb,
  .mail {
    width: 25px;
    height: 25px;
    color: #eee;
    border-radius: 5px;
    padding: 5px;
    background: linear-gradient(to right, transparent, transparent);
    transition: border-radius 0.3s ease, transform 0.3s ease;
    cursor: none;
  }

  .ig {
    background: linear-gradient(45deg, #fccc63, #fbad50, #cd486b, #4c68d7);
  }
  .fb {
    background: linear-gradient(to right, #3b5998, #3b5998);
  }
  .yt {
    background: linear-gradient(to right, red, red);
  }
  .mail {
    background: linear-gradient(to right, #7a5858, #9e9e9e);
  }

  .ig:hover,
  .fb:hover,
  .yt:hover,
  .mail:hover{
    border-radius: 50px;
  }

  .copyright p {
    font-size: 14px;
  }
</style>
