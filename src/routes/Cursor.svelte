<script>
</script>

<div class='cursor'></div>

<style>
:global(.cursor) {
  position: fixed;
  top:-10rem;
  left:-10rem;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  pointer-events: none;
  border: 1px solid #761111;
  backdrop-filter: invert(1);
  z-index: 999;
  transition: width 0.3s ease, height 0.3s ease;
}
</style>
