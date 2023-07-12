<script>
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
  import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte'
  import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte'
  import IoMdMail from 'svelte-icons/io/IoMdMail.svelte'
  import Cursor from './Cursor.svelte'

  let mouse = {x:0, y:0}
  const handleMouseOver = (e) => {
    if(e.currentTarget.tagName === 'FOOTER') {
      e.currentTarget.style.height = "6rem";
    } else {
      const c = document.querySelector('.cursor');
      c.style.width = "30px";
      c.style.height = "30px";
    }
  }

  const handleMouseLeave = (e) => {
    if(e.currentTarget.tagName === 'FOOTER') {
      e.currentTarget.style.height = "4rem";
    } else {
      const c = document.querySelector('.cursor');
      c.style.width = "0px";
      c.style.height = "0px";
    }
  }

  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    document.querySelector('.cursor').style.top = `${mouse.y-10}px`
    document.querySelector('.cursor').style.left = `${mouse.x-10}px`
  }

</script>

  <Cursor />
<footer on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave}>
  <div class='copyright'>
    <p>Copyright © 2023</p>
  </div>
  <div>
    <a on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave} class='ig' href='https://www.instagram.com/asayake_taiko/' target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave} class='fb' href='https://www.facebook.com/AsayakeTaiko/' target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave} class='yt' href='https://www.youtube.com/user/AsayakeTaiko/' target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
    <a on:mouseover={handleMouseOver} on:focus on:mouseleave={handleMouseLeave} class='mail' href='mailto:asayaketaiko@gmail.com'>
      <IoMdMail />
    </a>
  </div>
</footer>

<style>
  footer {
    border-radius: 100px 100px 0 0;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #791111cc;
    color: white;
    font-weight: 200;
    display: flex;
    height: 4rem;
    transition: height 0.3s cubic-bezier(1,-0.33, 0, 0.41);
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
    width: 18px;
    height: 18px;
    color: #eee;
    border-radius: 8px;
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
    border-radius: 15px;
  }

  .copyright p {
    font-size: 14px;
  }
</style>
