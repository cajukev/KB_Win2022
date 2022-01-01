<script lang="ts">
	import '../app.css';
	import Header from "../components/header.svelte";
  import Nav from "../components/nav.svelte";
	import Toast from '../components/toast.svelte';
</script>

<main class="sm:px-4">
	<Header></Header>
	<Nav></Nav>
	<slot />
</main>
