<script lang="ts">
	import '../app.css';
	import Header from "../components/header.svelte";
</script>

<main class="sm:px-4">
	<Header></Header>
	<slot />
</main>
