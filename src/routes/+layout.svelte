<script>
import "../app.postcss";

// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';
</script>
<slot></slot>

<style lang="scss">
@media screen and (min-width: 425px) {
  :root {
    font-size: 14px;
  }
}
@media screen and (min-width: 768px) {
  :root {
    font-size: 16px;
  }
}
@media screen and (max-width: 424px) {
  :root {
    font-size: 12px;
  }
}
</style>