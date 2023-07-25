<script>
  let mouse = {x:0, y:0}

  const handleMouseMove = (e) => {
    const isMobile = window.innerHeight > window.innerWidth
    if(isMobile) return;
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
<div class='cursor w-3 h-3 fixed z-[999] rounded-full bg-asa-red'></div>
<div class='cursor-second w-2 h-2 fixed z-[998] rounded-full bg-asa-red bg-opacity-50'></div>

<style>
.cursor {
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 0.15s ease-in-out 0s, transform 0.25s ease-in-out 0s;
  will-change: left, top;
  left: -10rem;
  top: -10rem;
}

.cursor-second {
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1);
  transition: top 0.1s ease, left 0.1s ease, opacity 0.15s ease-in-out 0s, transform 0.25s ease-in-out 0s;
  backdrop-filter: invert(1);
  will-change: transform, left, top;
  left: -10rem;
  top: -10rem;
}
</style>
