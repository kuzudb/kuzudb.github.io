<script lang="ts">
	import { toggleMode } from "mode-watcher";
	import { Moon, Sun, Menu, X } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { fade, fly } from "svelte/transition";
	import { Spring } from "svelte/motion";
	import KuzuLogo from "$lib/components/KuzuLogo.svelte";
	import { page } from '$app/stores';

	let isMenuOpen = $state(false);
	let scrolled = $state(false);
	let isContactPage = $derived($page.url.pathname === '/contact');
	let isProductPage = $derived($page.url.pathname === '/product')

	function handleScroll() {
		scrolled = window.scrollY > 0;
	}

	const navSpring = new Spring(
		{ y: 0, opacity: 1, scale: 1 },
		{
			stiffness: 0.1,
			damping: 0.25,
		},
	);

	$effect(() => {
		if (scrolled) {
			navSpring.set({ y: -10, opacity: 0.8, scale: 0.95 });
			setTimeout(() => navSpring.set({ y: 0, opacity: 1, scale: 1 }), 50);
		}
	});
</script>

<svelte:window on:scroll={handleScroll} />

<div class="fixed top-0 w-full z-50 flex justify-center">
	<header
		class="w-full transition-all duration-300 ease-in-out {scrolled
			? 'mt-8 max-w-3xl px-4'
			: ''}"
		style={scrolled
			? `transform: translate3d(0, ${navSpring.current.y}px, 0) scale(${navSpring.current.scale}); opacity: ${navSpring.current.opacity};`
			: ""}
	>
		<nav
			class="{scrolled
				? 'bg-background/70 backdrop-blur-md shadow-lg rounded-full border'
				: 'bg-background/80 backdrop-blur-sm border-b'} h-16 flex items-center justify-between px-6"
		>
			<div class="flex items-center gap-4">
				<KuzuLogo
					textClass="text-foreground"
					iconOnly={scrolled}
					class={scrolled ? "h-10 w-10" : "h-10 w-40"}
				/>
			</div>

			<!-- Desktop Navigation -->
			<div
				class="hidden md:flex items-center gap-4 flex-grow justify-end"
			>
				{#if isContactPage}
					<a href="/"
						rel="noopener noreferrer"
						class="text-primary hover:text-foreground transition-colors">Home Page</a
					>
				{:else}
					<a href="/contact"
						rel="noopener noreferrer"
						class="text-primary hover:text-foreground transition-colors">Support & Consultancy</a
					>
				{/if}
				{#if isProductPage}
					<a href="/"
						rel="noopener noreferrer"
						class="text-foreground hover:text-primary transition-colors">Home Page</a
					>
				{:else}
					<a href="/product"
						rel="noopener noreferrer"
						class="text-foreground hover:text-primary transition-colors">Product</a
					>
				{/if}

				<a
					href="https://demo.kuzudb.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-primary transition-colors">Demo</a
				>
				<a
					href="https://docs.kuzudb.com"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-primary transition-colors"
					>Documentation</a
				>
				<a
					href="https://blog.kuzudb.com"
					class="hover:text-primary transition-colors">Blog</a
				>
				<a
					href="https://github.com/kuzudb/kuzu"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-primary transition-colors"
				>
					<i class="fa-brands fa-github"></i>
					<span class="transition-all duration-300" class:hidden={scrolled}>GitHub</span>
				</a>
				<!-- <a
					href="//kuzudb.com/chat"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-primary transition-colors"
				>
					<i class="fa-brands fa-discord"></i>
					<span class="transition-all duration-300" class:hidden={scrolled}>Discord</span>
				</a> -->
				<Button variant="ghost" size="icon" onclick={toggleMode}>
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>

			<!-- Mobile Menu Button -->
			<Button
				variant="ghost"
				size="icon"
				class="md:hidden"
				onclick={() => (isMenuOpen = !isMenuOpen)}
			>
				{#if isMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</Button>
		</nav>

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div
				class="md:hidden absolute w-full bg-background border-b"
				transition:fly={{ y: -20, duration: 200 }}
			>
				<nav class="container mx-auto px-4 py-4 flex flex-col gap-2">
					<a
						href="https://docs.kuzudb.com"
						target="_blank"
						rel="noopener noreferrer"
						class="py-2 hover:text-primary transition-colors"
						>Documentation</a
					>
					<a
						href="https://blog.kuzudb.com"
						class="py-2 hover:text-primary transition-colors"
						>Blog</a
					>
					<div class="flex gap-2 py-2">
						<a
							href="https://github.com/kuzudb/kuzu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="ghost" size="icon">
								<i class="fa-brands fa-github"></i>
							</Button>
						</a>
						<Button
							variant="ghost"
							size="icon"
							onclick={toggleMode}
						>
							<Sun
								class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
							/>
							<Moon
								class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
							/>
							<span class="sr-only">Toggle theme</span>
						</Button>
					</div>
				</nav>
			</div>
		{/if}
	</header>
</div>
