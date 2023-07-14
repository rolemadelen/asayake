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
<div class='cursor w-3 h-3 fixed z-[999] rounded-full bg-asa-red'></div>
<div class='cursor-second w-3 h-3 fixed z-[999] rounded-full bg-asa-red bg-opacity-50'></div>

<style>
.cursor {
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 0.15s ease-in-out 0s, transform 0.25s ease-in-out 0s;
}

.cursor-second {
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 0.15s ease-in-out 0s, transform 0.25s ease-in-out 0s;
}
</style>
