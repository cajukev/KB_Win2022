<script>
	import VideoContainer from '../components/videoContainer.svelte';
</script>

<section
	id="APropos"
	class="
mt-8 bg-zinc-50 pt-4 shadow-lg shadow-shadowColor flex flex-col items-center 
2xl:bg-transparent 2xl:shadow-none 2xl:grid 2xl:grid-cols-[repeat(2,auto)] 2xl:grid-rows-[repeat(3,auto)] "
>
	<p
		class="text-center italic text-slate-700 text-[clamp(16px,1.8vw,32px)]
            2xl:text-left 2xl:self-end"
	>
		A Propos
	</p>
	<h1
		class="section-splash mt-2 px-4  text-center text-[clamp(20px,2vw,32px)] 
            2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		Je crée des sites web, de la <span>conception</span> au <span>développement</span>
	</h1>
	<div
		class="mt-8  w-fit shadow-md shadow-shadowColor 
  col-start-2 col-span-1 row-start-1 row-span-3 justify-self-end 2xl:mt-0 "
	>
		<VideoContainer num={'1'} />
	</div>

	<div class="relative  2xl:self-start">
		<div class="flex flex-wrap max-w-[700px] 2xl:after:absolute 2xl:after:w-full 2xl:after:h-full 2xl:after:bg-slate-50 
    2xl:after:scale-x-150 2xl:after:shadow-md 2xl:after:shadow-shadowColor 2xl:after:-z-10">
			<div class="p-4 2xl:pl-0 2xl:pr-[6rem] 3xl:py-6">
				<p>Ce que je maîtrise 🎓</p>
				<ul class="list-disc pl-7">
					<li>HTML / CSS / JS</li>
					<li>React / Vue / <b>Svelte</b></li>
					<li>SCSS / Tailwind</li>
					<li>APIs : Firestore / FaunaDB</li>
					<li><b>Performance Lighthouse 4x100</b></li>
					<li>Développement <b>"serverless"</b></li>
					<li>Développement <b>"responsive"</b></li>
				</ul>
			</div>
			<div class="p-4 2xl:pl-0 2xl:pr-6 3xl:py-6">
				<p>Ce que je maîtrise 🎓</p>
				<ul class="list-disc pl-7">
					<li>HTML / CSS / JS</li>
					<li>React / Vue / <b>Svelte</b></li>
					<li>SCSS / Tailwind</li>
					<li>APIs : Firestore / FaunaDB</li>
					<li><b>Performance Lighthouse 4x100</b></li>
					<li>Développement <b>"serverless"</b></li>
					<li>Développement <b>"responsive"</b></li>
				</ul>
			</div>
			<div class="p-4 2xl:pl-0 2xl:pr-6 3xl:py-6">
				<p>Ce que je maîtrise 🎓</p>
				<ul class="list-disc pl-7">
					<li>HTML / CSS / JS</li>
					<li>React / Vue / <b>Svelte</b></li>
					<li>SCSS / Tailwind</li>
					<li>APIs : Firestore / FaunaDB</li>
					<li><b>Performance Lighthouse 4x100</b></li>
					<li>Développement <b>"serverless"</b></li>
					<li>Développement <b>"responsive"</b></li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section id="Solutions" class="section">
	<p>Solutions</p>
</section>
<section id="Contacter" class="section">
	<p>Contacter</p>
</section>

<style lang="postcss">
	.section-splash span {
		@apply font-semibold text-brandBlue;
	}
</style>
