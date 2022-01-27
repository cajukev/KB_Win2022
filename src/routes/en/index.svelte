<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/timeslots')
			.then((response) => response.json())
			.then((json) => {
				return json;
			});

		const data = await res;

		return {
			props: { timeslots: data }
		};
	};
</script>

<script>
	import Timepicker from '../../components/timepicker.svelte';
	import VideoContainer from '../../components/videoContainer.svelte';
	import Header from "../../components/header.svelte";
	export let timeslots;
</script>

<svelte:head>
	<title>Kevin Brousseau's Portfolio</title>
	<meta name="description" content="This is the website I created in order to start my career in web development.">
</svelte:head>

<div id="fluff">
	
</div>

<nav class=" top-4 sm:top-8 flex justify-center gap-2 mt-4 sm:justify-start sm:mt-[clamp(1rem,3.5vw-6px,4rem)] z-50 text-sm sm:text-base">
  <a href="#APropos" class="bg-zinc-50 py-2 pr-4 pl-5 rounded-l-full shadow-md shadow-shadowColor hover:bg-white">
    About me
  </a>
  <a href="#Solutions" class="bg-zinc-50 py-2 px-4 shadow-md shadow-shadowColor hover:bg-white">
    Solutions
  </a>
  <a href="#Contacter" class="font-medium bg-amber-500 py-2 pr-5 pl-4 rounded-r-full shadow-md shadow-shadowColor hover:bg-amber-400">
    Contact
  </a>
</nav>

<section
	id="APropos"
	class="
mt-8 bg-zinc-50 pt-4 shadow-lg shadow-shadowColor flex flex-col items-center pb-4
xl:grid xl:grid-cols-[repeat(2,auto)] xl:justify-items-center
2xl:justify-items-start 2xl:pb-0 2xl:bg-transparent 2xl:shadow-none 2xl:grid 2xl:grid-cols-[60%,40%] 2xl:grid-rows-[repeat(3,auto)] "
>
	<p
		class="text-center italic text-slate-700 text-[clamp(16px,1.8vw,32px)]
		xl:col-span-2
    2xl:col-span-1 2xl:text-left 2xl:self-end"
	>
		About me
	</p>
	<h1
		class="section-splash mt-2 px-4  text-center text-[clamp(20px,2vw,32px)] 
		xl:col-span-2
    2xl:col-span-1 2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		I create websites, from <span>conception</span> to <span>development</span>
	</h1>
	<div
		class="max-h-screen mt-8 w-fit aspect-[7/9] shadow-md shadow-shadowColor
		xl:col-start-2 xl:self-center
  2xl:col-start-2 2xl:col-span-1 2xl:row-start-1 2xl:row-span-3 2xl:justify-self-end 2xl:mt-0 2xl:w-full"
	>
		<VideoContainer num={'1'} />
	</div>

	<div class="relative xl:row-start-3 2xl:self-start">
		<div
			class="
			flex flex-wrap justify-center
			xl:flex-col
			2xl:justify-start 2xl:flex-row 2xl:min-h-[40vh] 2xl:items-center 2xl:after:absolute 2xl:after:w-full 2xl:after:h-full 2xl:after:bg-slate-50 
    2xl:after:scale-x-150 2xl:after:shadow-md 2xl:after:shadow-shadowColor 2xl:after:-z-10
		3xl:min-h-[30vh]"
		>
			<div class="p-4 2xl:pl-0 2xl:pr-16 3xl:py-6">
				<div>
					<p class="font-bold text-lg text-center xl:text-left">What I master🎓</p>
					<ul class="list-disc pl-7 mt-4">
						<li>HTML / CSS / JS</li>
						<li>React / Vue / <b>Svelte</b></li>
						<li>SCSS / Tailwind</li>
						<li>APIs : Firestore / FaunaDB</li>
						<li><b>Lighthouse 4x100 Performance</b></li>
						<li><b>"Serverless"</b>development</li>
						<li><b>"Responsive"</b>development</li>
					</ul>
				</div>
			</div>
			<div class="p-4 2xl:pl-0 2xl:pr-16 3xl:py-6">
				<div>
					<p class="font-bold text-lg text-center xl:text-left">What I know well ✔️</p>
					<ul class="list-disc pl-7 mt-4">
						<li>Accessibility</li>
						<li>SEO</li>
						<li>UI / UX</li>
						<li>Domain hosting</li>
						<li>Technical presentations</li>
						<li>Git</li>
						<span class="text-slate-50 hidden 2xl:block">
							<li />
						</span>
					</ul>
				</div>
			</div>
			<div class="p-4 2xl:pl-0 3xl:py-6">
				<div class="h-full">
					<p class="font-bold text-lg text-center xl:text-left">What I want to learn 📖</p>
					<ul class="list-disc pl-7 mt-4">
						<li>Meetings</li>
						<li>Sprint / Scrum / Agile</li>
						<li>eCommerce</li>
						<span class="text-slate-50 hidden 2xl:block">
							<li />
							<li />
							<li />
							<li />
						</span>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section
	id="Solutions"
	class="
mt-8 bg-zinc-50 pt-4 shadow-lg shadow-shadowColor flex flex-col items-center 
xl:grid xl:grid-cols-[repeat(2,auto)] xl:justify-items-center
2xl:justify-items-start 2xl:bg-transparent 2xl:shadow-none 2xl:grid 2xl:grid-cols-[60%,40%] 2xl:grid-rows-[repeat(3,auto)] "
>
	<p
		class="text-center italic text-slate-700 text-[clamp(16px,1.8vw,32px)]
		xl:col-span-2
    2xl:col-span-1 2xl:text-left 2xl:self-end"
	>
		Solutions
	</p>
	<h1
		class="section-splash mt-2 px-4  text-center text-[clamp(20px,2vw,32px)] 
		xl:col-span-2
    2xl:col-span-1 2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		With the help of <span>modern technologies</span>, the possibilities are <span>endless.</span>
	</h1>
	<div
		class="max-h-screen mt-8 w-fit aspect-[7/9] shadow-md shadow-shadowColor
		xl:col-start-2 xl:self-center
  2xl:col-start-2 2xl:col-span-1 2xl:row-start-1 2xl:row-span-3 2xl:justify-self-end 2xl:mt-0 2xl:w-full"
	>
		<VideoContainer num={'2'} />
	</div>

	<div class="relative xl:row-start-3 2xl:self-start">
		<div
			class="flex flex-wrap justify-center
			xl:flex-col
			2xl:justify-start 2xl:flex-row 2xl:content-center 2xl:min-h-[40vh] 2xl:items-center 2xl:after:absolute 2xl:after:w-full 2xl:after:h-full 2xl:after:bg-slate-50 
    2xl:after:scale-x-[2.25] 2xl:after:shadow-md 2xl:after:shadow-shadowColor 2xl:after:-z-10
		3xl:min-h-[30vh]"
		>
			<div class="p-4 
			2xl:pl-0 2xl:pr-16 
			3xl:py-6">
				<p class="font-bold text-lg text-center 2xl:text-left">A modern interface</p>
				<a target="_blank" href="https://al001.netlify.app/" rel="noreferrer">
					<picture>
						<source srcset="/sites/Site1-400.webp" type="image/webp" />
						<source srcset="/sites/Site1-400.jpg " type="image/jpeg" />
						<img src="/sites/Site1-400.jpg" alt="Site d'un jeu" class="mt-4 w-52 h-52 bg-slate-500 shadow-md shadow-shadowColor" />
					</picture>
				</a>
				<p class="italic text-slate-600 mt-4 text-center 2xl:text-left">Volunteer project</p>
			</div>
			<div class="p-4 2xl:pl-0 2xl:pr-16 3xl:py-6">
				<p class="font-bold text-lg text-center 2xl:text-left">An API and some data</p>
				<a target="_blank" href="https://concordiaga.netlify.app//" rel="noreferrer">
					<picture>
						<source srcset="/sites/Site2-400.webp" type="image/webp" />
						<source srcset="/sites/Site2-400.jpg" type="image/jpeg" />
						<img src="/sites/Site2-400.jpg" alt="Site d'un jeu" class="mt-4 w-52 h-52 bg-slate-500 shadow-md shadow-shadowColor" />
					</picture>
				</a>
				<p class="italic text-slate-600 mt-4 text-center 2xl:text-left">University course</p>
			</div>
			<div class="p-4 2xl:pl-0 3xl:py-6">
				<p class="font-bold text-lg text-center 2xl:text-left">Some creativity</p>
				<a target="_blank" href="https://ggjsnafu.netlify.app/" rel="noreferrer">
					<picture>
						<source srcset="/sites/Site3-400.webp" type="image/webp" />
						<source srcset="/sites/Site3-400.jpg" type="image/jpeg" />
						<img src="/sites/Site3-400.jpg" alt="Site d'un jeu" class="mt-4 w-52 h-52 bg-slate-500 shadow-md shadow-shadowColor" />
					</picture>
					
				</a>
				<p class="italic text-slate-600 mt-4 text-center 2xl:text-left">Game Jam</p>
			</div>
			<a href="https://github.com/cajukev" 
			class="w-full font-bold underline underline-offset-2 text-center py-4 
			2xl:text-left"
			>My Github</a>
		</div>
		
	</div>
</section>

<section
	id="Contacter"
	class="
mt-8 bg-zinc-50 py-4 shadow-lg shadow-shadowColor flex flex-col items-center 
xl:grid xl:grid-cols-[repeat(2,auto)] xl:justify-items-center
2xl:justify-items-start 2xl:bg-transparent 2xl:shadow-none 2xl:grid 2xl:grid-cols-[60%,40%] 2xl:grid-rows-[repeat(3,auto)] "
>
	<p
		class="text-center italic text-slate-700 text-[clamp(16px,1.8vw,32px)]
		xl:col-span-2
    2xl:col-span-1 2xl:text-left 2xl:self-end"
	>
		Contact
	</p>
	<h1
		class="section-splash mt-2 px-4  text-center text-[clamp(20px,2vw,32px)] 
		xl:col-span-2
    2xl:col-span-1 2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		If I'm what <span>you need</span> or to learn <span>more about me</span>...
	</h1>
	<div
		class="max-h-screen mt-8 w-full aspect-[7/9] shadow-md shadow-shadowColor
		xl:col-start-2 xl:self-center
  2xl:col-start-2 2xl:col-span-1 2xl:row-start-1 2xl:row-span-3 2xl:justify-self-end 2xl:mt-0 2xl:w-full"
	>
		<VideoContainer num={'3'} />
	</div>

	<div class="relative p-4
	xl:row-start-3 
	2xl:self-start 2xl:p-0 2xl:mt-8">
		<Timepicker lang={"en"} {timeslots} />
	</div>
</section>

<style lang="postcss">
	
</style>
