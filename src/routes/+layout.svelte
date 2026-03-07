<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page-container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
<style>
.page-container {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
main {
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
}
</style>
