<script>
	export let num;

	let video;
	let thumbnail;
	let playOverlay;
	let playButton;
	let play = () => {
		thumbnail.style.opacity = '0';
		thumbnail.style.display = 'none';
		playOverlay.style.background = 'rgba(0,0,0,0)';
		playButton.style.opacity = 0;
		video.play();
	};
	let pause = () => {
		playOverlay.style.background = 'rgba(0,0,0,0.5)';
		playButton.style.opacity = 1;
		video.setAttribute('tabindex', '-1');
		video.pause();
	}
	let swap = () => {
		if(video.paused){
			play()
		}else{
			pause()
		}
	}
let playFocus = () => {
	playButton.style.opacity = 1;
}
</script>

<div class="grid max-w-[700px] w-full aspect-[7/9]">
	<video
		bind:this={video}
		on:pause={pause}
		tabindex="-1"
		src="video{num}.mp4"
		class="row-start-1 row-span-1 col-start-1 col-span-1 w-full z-0  "
		
	/>
	<picture
		bind:this={thumbnail}
		id="thumbnail"
		class="row-start-1 row-span-1 col-start-1 col-span-1 z-10 w-full aspect-[7/9]" 
	>
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
		<img src="thumbnails/thumbnail{num}-800.jpg" class="w-full aspect-[7/9]"/>
	</picture>
	<div bind:this={playOverlay} on:click={swap}  class="row-start-1 row-span-1 col-start-1 col-span-1 grid bg-[rgba(0,0,0,0.5)] w-full h-full z-30  cursor-pointer transition-opacity">
		<button
			bind:this={playButton}
			on:focus={playFocus}
			class="w-1/3 place-self-center rounded-full transform transition-transform focus:scale-110 hover:scale-110 transition-opacity"
		>
			<svg
				viewBox="0 0 145 144"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				stroke="black"
				stroke-width="1px"
			>
				<path d="M48.7895 71.7109V22.053L121.263 71.7109L48.7895 121.369V71.7109Z" fill="#EDEDF7" />
				<path
					fill="#EDEDF7"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M144.526 72.1581C144.526 111.69 112.279 143.737 72.5 143.737C32.721 143.737 0.473694 111.69 0.473694 72.1581C0.473694 32.6261 32.721 0.579102 72.5 0.579102C112.279 0.579102 144.526 32.6261 144.526 72.1581ZM72.5 136.579C108.301 136.579 137.324 107.737 137.324 72.1581C137.324 36.5793 108.301 7.737 72.5 7.737C36.6989 7.737 7.67633 36.5793 7.67633 72.1581C7.67633 107.737 36.6989 136.579 72.5 136.579Z"
				/>
			</svg>
		</button>
	</div>
</div>
