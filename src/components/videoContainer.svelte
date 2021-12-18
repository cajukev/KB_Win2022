<script>
	export let num;

  let video;
  let thumbnail;
  let swap = () => {
    thumbnail.style.opacity = "0"
    thumbnail.style.pointerEvents = "none"
    //video.play()
  }
</script>

<div class="grid w-max" on:mouseover={swap} on:focus={swap}  >
	<video bind:this={video} controls src="video{num}.mkv" class="row-start-1 row-span-1 col-start-1 col-span-1 w-full z-0" />
	<picture bind:this={thumbnail} id="thumbnail" class="row-start-1 row-span-1 col-start-1 col-span-1 z-10 w-full">
		<source
			srcset="thumbnails/thumbnail{num}-400.webp"
			media="(max-width:400px)"
			type="image/webp"
		/>
		<source
			srcset="thumbnails/thumbnail{num}-400.jpg"
			media="(max-width:400px)"
			type="image/jpeg"
		/>
		<source
			srcset="thumbnails/thumbnail{num}-500.webp"
			media="(max-width:500px)"
			type="image/webp"
		/>
		<source
			srcset="thumbnails/thumbnail{num}-500.jpg"
			media="(max-width:500px)"
			type="image/jpeg"
		/>
		<source
			srcset="thumbnails/thumbnail{num}-600.webp"
			media="(max-width:600px)"
			type="image/webp"
		/>
		<source
			srcset="thumbnails/thumbnail{num}-600.jpg"
			media="(max-width:600px)"
			type="image/jpeg"
		/>
		<source srcset="thumbnails/thumbnail{num}-700.webp " type="image/webp" />
		<source srcset="thumbnails/thumbnail{num}-700.jpg" type="image/jpeg" />
		<img src="thumbnails/thumbnail{num}-800.jpg" class="w-full"/>
	</picture>
	<div>

	</div>
</div>
