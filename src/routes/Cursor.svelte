<script>
</script>

<div class='cursor'></div>

<style>
:global(.cursor) {
  position: fixed;
  width: 0px;
  height: 0px;
  top: -10rem;
  left: -10rem;
  border-radius: 999px;
  pointer-events: none;
  backdrop-filter: invert(1);
  z-index: 999;
  transition: width 0.3s ease, height 0.3s ease;
}
</style>
