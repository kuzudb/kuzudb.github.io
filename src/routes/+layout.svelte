<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	
	let { children } = $props();
</script>

<ModeWatcher />

<div class="min-h-screen bg-background text-foreground transition-colors duration-300">
	<Header />

	<main class="pt-16">
		{@render children()}
	</main>

	<Footer />
</div>
