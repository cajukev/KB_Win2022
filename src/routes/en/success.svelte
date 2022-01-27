<script>
	import Timepicker from '../../components/timepicker.svelte';
	import VideoContainer from '../../components/videoContainer.svelte';
	import { date } from '../../store';
	export let timeslots;

	let dateString = $date.date

	let dateDay = parseInt(dateString.substring(0,2));
	let dateMth = parseInt(dateString.substring(3,5));
	let dateYr = dateString.substring(6,10);

	let dateTime = dateString.substring(11,16);

	let mois = ['January','February','Mars','April','May','June','July','August','September','October','November','December']

	

</script>

<svelte:head>
	<title>Kevin Brousseau's Portfolio - Success page</title>
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
		<span>Congratulations!</span> You have created a meeting.
	</h1>

	<p
		class="section-splash mt-2 px-4  text-center text-italic text-slate-700 text-[clamp(16px,1.6vw,24px)] 
		xl:col-span-2 
    2xl:col-span-1 2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		{mois[dateMth-1]  + " " + dateDay  + " "+ dateYr + " - "+ dateTime + (parseInt(dateTime)>11?" pm":' am')}
</p>

	<p
		class="section-splash my-2 px-4  text-center text-italic text-slate-700 text-[clamp(16px,1.6vw,24px)] 
		xl:col-span-2 
    2xl:col-span-1 2xl:text-left 2xl:px-0 2xl:max-w-[60%]"
	>
		Expect to receive a phone call (from 514-550-7051) or an email (from kevin.brousseau98@gmail.com).
</p>


</section>
