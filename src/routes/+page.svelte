<script lang="ts">
	import { onMount } from "svelte";
	import { Button } from "$lib/components/ui/button";
	import Hero from "$lib/components/sections/Hero.svelte";
	import Features from "$lib/components/sections/Features.svelte";
	import InstallSection from "$lib/components/sections/InstallSection.svelte";
	import Testimonials from "$lib/components/sections/Testimonials.svelte";
	import Enterprise from "$lib/components/sections/Enterprise.svelte";
	import Team from "$lib/components/sections/Team.svelte";

	let email = "";
	let emailSubscribeStatusText = "";
	function handleSubscribe() {
		email = email.trim();
		emailSubscribeStatusText = "";
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		const handleEmailError = (error: any) => {
			emailSubscribeStatusText =
				"There was an error subscribing to the newsletter, please try again later.";
			console.error("Error subscribing to newsletter: ", error);
		};
		if (!emailRegex.test(email)) {
			emailSubscribeStatusText = "Please enter a valid email address.";
			return;
		}
		fetch("https://track.kuzudb.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				origin: "NEWSLETTER",
			}),
		})
			.then((response) => {
				if (!response.ok) {
					handleEmailError(response.statusText);
				} else {
					console.log("Subscribed to newsletter with email: ", email);
					emailSubscribeStatusText = "Subscribed successfully!";
				}
			})
			.catch((error) => {
				handleEmailError(error);
			});
	}
</script>

<svelte:head>
	<title>Kuzu - Embedded, scalable, blazing fast graph database</title>
	<meta
		name="description"
		content="A fast, modern graph database for really large graphs, with vector search and full text search built in"
	/>
</svelte:head>

<div class="relative">
	<Hero />
	<Enterprise />
	<Features />
	<InstallSection />


	<!-- Support Section -->
	<section class="py-20 px-4">
		<div class="container mx-auto text-center">
			<h2 class="text-3xl font-bold mb-12">Support & Consultancy</h2>
			<p class="text-muted-foreground mb-12 max-w-2xl mx-auto">
				Kùzu Inc. provides professional support and consultancy for using Kuzu 
				in <a class="underline decoration-primary text-foreground">agentic memory, graph AI</a> as well as other domains that use knowledge graphs. 
			</p>
			<div
				class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
			>
				<div
					class="p-8 bg-background rounded-lg border hover:shadow-lg transition-all flex flex-col h-full"
				>
					<h3 class="text-2xl font-semibold mb-6">
						Community Support
					</h3>
					<div class="h-px w-full bg-border mb-6"></div>
					<ul class="space-y-4 mb-8 text-left">
						<li class="flex items-center">
							<i
								class="fa-regular fa-circle-check text-primary mr-2"
							></i>
							Public issue tracker
						</li>
						<li class="flex items-center text-muted-foreground">
							<i class="fa-regular fa-circle-xmark mr-2"></i>
							No guaranteed response time
						</li>
						<li class="flex items-center text-muted-foreground">
							<i class="fa-regular fa-circle-xmark mr-2"></i>
							No guaranteed resolution
						</li>
					</ul>
					<a
						href="//github.com/kuzudb/kuzu/"
						target="_blank"
						class="inline-block mt-auto"
					>
						<Button variant="outline">Get Started</Button>
					</a>
				</div>
				<div
					class="relative p-8 bg-background rounded-lg border-1 border-primary shadow-sm transition-all animate-glow"
				>
					<h3 class="text-2xl font-semibold mb-6">Custom Support & Consultancy</h3>
					<div class="h-px w-full bg-primary/20 mb-6"></div>
					<ul class="space-y-4 mb-8 text-left">
						<li class="flex items-center">
							<i
								class="fa-regular fa-circle-check text-primary mr-2"
							></i>
							Deployment advice
						</li>
						<li class="flex items-center">
							<i
								class="fa-regular fa-circle-check text-primary mr-2"
							></i>
							Feature prioritization
						</li>
						<li class="flex items-center">
							<i
								class="fa-regular fa-circle-check text-primary mr-2"
							></i>
							Use case-specific advice and custom development
						</li>
					</ul>
					<a href="/contact">
						<Button variant="default">Contact Us</Button>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Community Section -->
	<section class="pt-20 px-4 bg-background">
		<div class="container mx-auto text-center">
			<h2 class="text-3xl font-bold">Join Our Community</h2>
			<Testimonials />
		</div>
	</section>

	

	

	<!-- Newsletter Section -->
	<section class="py-20 px-4 scroll-mt-20">
		<div class="container mx-auto max-w-xl text-center" id="newsletter">
			<h2 class="text-3xl font-bold mb-6">Stay Updated</h2>
			<p class="text-muted-foreground mb-8">
				Subscribe to our newsletter for the latest updates and news
			</p>
			<div class="flex gap-4 max-w-md mx-auto items-center">
				<input
					type="email"
					placeholder="Enter your email"
					class="flex-1 px-4 py-2 rounded-lg border bg-background"
					bind:value={email}
				/>
				<Button
					onclick={() => {
						handleSubscribe();
					}}>Subscribe</Button
				>
			</div>
			{#if emailSubscribeStatusText}
				<p class="text-muted-foreground text-sm mt-4">
					{emailSubscribeStatusText}
				</p>
			{/if}
		</div>
	</section>
</div>
