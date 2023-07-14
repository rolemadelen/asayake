<script>
  let mouse = {x:0, y:0}

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const c = document.querySelector('.cursor');
    const c2 = document.querySelector('.cursor-second');
    c.style.top = `${mouse.y}px`;
    c.style.left = `${mouse.x}px`;
    c2.style.top = `${mouse.y}px`;
    c2.style.left = `${mouse.x}px`;
  }

  const handleMouseDown = (e) => {
    const c2 = document.querySelector('.cursor-second');
    c2.style.transform = "translate(-50%, -50%) scale(5)"
  }

  const handleMouseUp = (e) => {
    const c2 = document.querySelector('.cursor-second');
    c2.style.transform = "translate(-50%, -50%) scale(1)"
  }
</script>

<svelte:document on:mousemove={handleMouseMove} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}/>
<div class='cursor'></div>
<div class='cursor-second'></div>

<style>
.cursor {
  z-index: 999;
  position: fixed;
  border-radius: 999px;
  pointer-events: none;
  width: 1rem;
  height: 1rem;
  background-color: #791111;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 0.15s ease-in-out 0s, transform 0.25s ease-in-out 0s;
}

.cursor-second {
  z-index: 998;
  position: fixed;
  border-radius: 999px;
  pointer-events: none;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #e0baa177;
  transform: translate(-50%, -50%) scale(1);
  transition: top 0.1s ease-in-out, left 0.1s ease-in-out, opacity 0.15s ease-in-out 0s, transform 0.25s ease-in-out 0s;
}
</style>
