<script>
	import Timepicker from '../components/timepicker.svelte';
	import VideoContainer from '../components/videoContainer.svelte';
	import Nav from "../components/nav.svelte";
	import { date } from '../store';
	export let timeslots;

	let dateString = $date.date

	let dateDay = parseInt(dateString.substring(0,2));
	let dateMth = parseInt(dateString.substring(3,5));
	let dateYr = dateString.substring(6,10);

	let dateTime = dateString.substring(11,16);

	let mois = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']

	

</script>

<svelte:head>
	<title>Portfolio de Kevin Brousseau - Page de succès</title>
</svelte:head>

<section
	id="Succes"
	class="
my-4 py-4 bg-zinc-50 pt-4 shadow-lg shadow-shadowColor flex flex-col items-center 
xl:block 
2xl:bg-transparent 2xl:shadow-none "
>

<h1
		class="section-splash px-4  text-center text-[clamp(20px,2vw,32px)] 
		xl:col-span-2 
    2xl:col-span-1 2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		<span>Félicitations!</span> Vous avez enregistré un rendez-vous.
	</h1>

	<p
		class="section-splash mt-2 px-4  text-center text-italic text-slate-700 text-[clamp(16px,1.6vw,24px)] 
		xl:col-span-2 
    2xl:col-span-1 2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		{dateDay + " " + mois[dateMth-1] + " "+ dateYr + " - "+ dateTime + (parseInt(dateTime)>11?" pm":' am')}
</p>

	<p
		class="section-splash my-2 px-4  text-center text-italic text-slate-700 text-[clamp(16px,1.6vw,24px)] 
		xl:col-span-2 
    2xl:col-span-1 2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		Attendez-vous à recevoir un appel (514-550-7051) ou un email (kevin.brousseau98@gmail.com).
</p>


</section>
