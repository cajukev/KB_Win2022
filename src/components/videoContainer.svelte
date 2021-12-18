<script>
  export let height;
  export let width;
  export let source;
</script>

<div style="width: {width}px; height:{height}px" class="">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video src="{source}" autoplay loop></video>
</div>