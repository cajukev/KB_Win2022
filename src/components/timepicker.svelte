<script>
	export let timeslots;

	const date = new Date();
	let dateDay = date.getDate().toString();
	if (dateDay.length == 1) {
		dateDay = '0' + dateDay;
	}
	let dateMonth = (date.getMonth() + 1).toString();
	if (dateMonth.length == 1) {
		dateMonth = '0' + dateMonth;
	}
	const min = date.getFullYear() + '-' + dateMonth + '-' + dateDay;

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

	let timeSlotTimes = [
		'12:00',
		'12:10',
		'12:20',
		'12:30',
		'12:40',
		'12:50',
		'13:00',
		'13:10',
		'13:20',
		'13:30',
		'13:40',
		'13:50',
		'14:00',
		'14:10',
		'14:20',
		'14:30',
		'14:40',
		'14:50',
		'15:00',
		'15:10',
		'15:20',
		'15:30',
		'15:40',
		'15:50',
		'16:00',
		'16:10',
		'16:20',
		'16:30',
		'16:40',
		'16:50'
	];

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
		datePicked + '/16:50'
	];

	let timePicked;
	let datePicked = date.getFullYear() + '-' + dateMonth + '-' + dateDay;
	
	$: console.log(datePicked);
	let dateTime;
	$: dateTime = dateDay + '/' + dateMonth + '/' + date.getFullYear() + '-' + timePicked;

	const isTimeSlotTaken = (timeslot) => {
		let flag = true;
		let day = String(date.getDate())
		if (day.length == 1) {
			day = '0' + day;
		}
		let hour = String(date.getHours())
		if (hour.length == 1) {
			hour = '0' + hour;
		}
		let minute = String(date.getMinutes())
		if (minute.length == 1) {
			minute = '0' + minute;
		}
		timeslots.forEach((taken) => {
			if (
				taken.substring(11, 16) == timeslot.substring(11, 16) &&
				taken.substring(0, 2) == timeslot.substring(8, 10) ||
				parseInt(timeslot.substring(11,13)) < parseInt(hour) &&
				day == timeslot.substring(8, 10)
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
		const res = await fetch('/api/timeslots', {
			method: 'POST',
			body: JSON.stringify({ Date: dateTime, nom:nom, telephone:telephone, email:email, description:description })
		})
			.then((response) => response.json())
			.then((json) => {
				return json;
			});
	};
</script>

<p>Entrons en contact! 👋</p>
<form class="flex flex-col">
	<input type="date" bind:value={datePicked} {min} {max} />
	<label for="time">Choisir un temps</label>
	<select bind:value={timePicked} name="Time" id="" title="Pick a time">
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
	<input bind:value={description} type="text" name="description" />
	<button on:click={submit}>Submit</button>
	
</form>
