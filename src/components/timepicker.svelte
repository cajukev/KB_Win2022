<script>
	import { goto } from '$app/navigation';
	import emailjs from 'emailjs-com';
	import { date } from '../store';
	export let timeslots;

	const dateNow = new Date();
	let dateDay = dateNow.getDate().toString();
	if (dateDay.length == 1) {
		dateDay = '0' + dateDay;
	}
	let dateMonth = (dateNow.getMonth() + 1).toString();
	if (dateMonth.length == 1) {
		dateMonth = '0' + dateMonth;
	}
	const min = dateNow.getFullYear() + '-' + dateMonth + '-' + dateDay;

	const dateMax = new Date(Date.now() + 6.048e8 * 2);
	let dateMaxDay = dateMax.getDate().toString();
	if (dateMaxDay.length == 1) {
		dateMaxDay = '0' + dateMaxDay;
	}
	let dateMaxMonth = (dateMax.getMonth() + 1).toString();
	if (dateMaxMonth.length == 1) {
		dateMaxMonth = '0' + dateMaxMonth;
	}
	const max = dateMax.getFullYear() + '-' + dateMaxMonth + '-' + dateMaxDay;

	let timeSlotTimeDates;

	$: timeSlotTimeDates = [
		datePicked + '/12:00',
		datePicked + '/12:10',
		datePicked + '/12:20',
		datePicked + '/12:30',
		datePicked + '/12:40',
		datePicked + '/12:50',
		datePicked + '/13:00',
		datePicked + '/13:10',
		datePicked + '/13:20',
		datePicked + '/13:30',
		datePicked + '/13:40',
		datePicked + '/13:50',
		datePicked + '/14:00',
		datePicked + '/14:10',
		datePicked + '/14:20',
		datePicked + '/14:30',
		datePicked + '/14:40',
		datePicked + '/14:50',
		datePicked + '/15:00',
		datePicked + '/15:10',
		datePicked + '/15:20',
		datePicked + '/15:30',
		datePicked + '/15:40',
		datePicked + '/15:50',
		datePicked + '/16:00',
		datePicked + '/16:10',
		datePicked + '/16:20',
		datePicked + '/16:30',
		datePicked + '/16:40',
		datePicked + '/16:50',
		datePicked + '/17:00',
		datePicked + '/17:10',
		datePicked + '/17:20',
		datePicked + '/17:30',
		datePicked + '/17:40',
		datePicked + '/17:50',
		datePicked + '/18:00',
		datePicked + '/18:10',
		datePicked + '/18:20',
		datePicked + '/18:30',
		datePicked + '/18:40',
		datePicked + '/18:50'
	];

	let timePicked;
	let datePicked = dateNow.getFullYear() + '-' + dateMonth + '-' + dateDay;

	$: console.log(datePicked);
	let dateTime;
	$: dateTime = dateDay + '/' + dateMonth + '/' + dateNow.getFullYear() + '-' + timePicked;

	const isTimeSlotTaken = (timeslot) => {
		let flag = true;
		let day = String(dateNow.getDate());
		if (day.length == 1) {
			day = '0' + day;
		}
		let hour = String(dateNow.getHours());
		if (hour.length == 1) {
			hour = '0' + hour;
		}
		let minute = String(dateNow.getMinutes());
		if (minute.length == 1) {
			minute = '0' + minute;
		}
		console.log();
		timeslots.forEach((taken) => {
			if (
				(taken.substring(11, 16) == timeslot.substring(11, 16) &&
					taken.substring(0, 2) == timeslot.substring(8, 10)) ||
				(parseInt(timeslot.substring(11, 13)) < parseInt(hour) &&
					day == timeslot.substring(8, 10)) ||
				(parseInt(timeslot.substring(11, 13)) == parseInt(hour) &&
					parseInt(timeslot.substring(14, 16)) < parseInt(minute) &&
					day == timeslot.substring(8, 10))
			) {
				flag = false;
			}
		});
		return flag;
	};

	let nom;
	let telephone;
	let email;
	let description;

	const submit = async () => {
		
		// Send email
		emailjs.init('user_5M4eTkkJad5yzMdMBPJs4');
		emailjs
			.send('service_liae9za', 'template_193jaog', {
				nom: nom,
				telephone: telephone,
				email: email,
				description: description,
				datetime: dateTime
			})
			.then((status) => {
				console.log(status);
			});
		// Post to DB
		const res = await fetch('/api/envoyer', {
			method: 'POST',
			body: JSON.stringify({
				Date: dateTime,
				nom: nom,
				telephone: telephone,
				email: email,
				description: description,
				datetime: dateTime
			})
		})
			.then((response) => response.json())
			.then((json) => {
				goto('/succes');
				return json;
			});
		date.set({date:dateTime})
	};
	
</script>

<div
	class=" p-4 shadow-lg shadow-color bg-white
xl:mt-0
2xl:bg-slate-50"
>
	<p class="mb-4"><b>Entrons en contact! 👋</b></p>
	<form class="flex flex-col">
		<label for="date">Choisir une date</label>
		<input type="date" name="date" bind:value={datePicked} {min} {max} />
		<label for="time">Choisir un temps</label>
		<select bind:value={timePicked} name="time" id="" title="Pick a time">
			{#each timeSlotTimeDates as timeSlotTimeDate}
				{#if isTimeSlotTaken(timeSlotTimeDate)}
					<option value={timeSlotTimeDate.substring(11, 16)}
						>{timeSlotTimeDate.substring(11, 16)}</option
					>
				{/if}
			{/each}
		</select>
		<label for="nom">Nom complet</label>
		<input bind:value={nom} type="text" name="nom" />
		<label for="telephone">Téléphone</label>
		<input bind:value={telephone} type="text" name="telephone" />
		<label for="email">Email</label>
		<input bind:value={email} type="text" name="email" />
		<label for="description">Description</label>
		<textarea bind:value={description} type="text" name="description" class="h-16 resize-none" />
		<button type="button" on:click={submit} class="hover:bg-slate-100">Envoyer</button>
	</form>
</div>
