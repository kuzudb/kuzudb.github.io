<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import InstallSection from '$lib/components/sections/InstallSection.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import Team from '$lib/components/sections/Team.svelte';

</script>


<svelte:head>
	<title>KuzuDB - An Embeddable, Scalable, Extremely Fast Graph Database</title>
	<meta name="description" content="Built by database experts with a relentless drive towards performance, scalability, and usability." />
</svelte:head>


<div class="relative">
	<Hero />
	<Features />
	<InstallSection />
	<Testimonials />
	<Team />

	<!-- Community Section -->
	<section class="py-20 px-4 bg-muted/50">
		<div class="container mx-auto text-center">
			<h2 class="text-3xl font-bold mb-12">Join Our Community</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
				<a href="https://github.com/kuzudb/kuzu" class="p-6 bg-background rounded-lg border hover:shadow-lg transition-all">
					<i class="fab fa-github text-4xl mb-4 text-primary"></i>
					<h3 class="text-xl font-semibold mb-2">GitHub</h3>
					<p class="text-muted-foreground">Star us on GitHub</p>
				</a>
				<a href="https://discord.gg/VtX2gw9Rug" class="p-6 bg-background rounded-lg border hover:shadow-lg transition-all">
					<i class="fab fa-discord text-4xl mb-4 text-primary"></i>
					<h3 class="text-xl font-semibold mb-2">Discord</h3>
					<p class="text-muted-foreground">Join the discussion</p>
				</a>
				<a href="https://twitter.com/kuzudb" class="p-6 bg-background rounded-lg border hover:shadow-lg transition-all">
					<i class="fab fa-twitter text-4xl mb-4 text-primary"></i>
					<h3 class="text-xl font-semibold mb-2">Twitter</h3>
					<p class="text-muted-foreground">Follow for updates</p>
				</a>
				<a href="https://www.youtube.com/@KuzuDB" class="p-6 bg-background rounded-lg border hover:shadow-lg transition-all">
					<i class="fab fa-youtube text-4xl mb-4 text-primary"></i>
					<h3 class="text-xl font-semibold mb-2">YouTube</h3>
					<p class="text-muted-foreground">Watch tutorials</p>
				</a>
			</div>
		</div>
	</section>

	<!-- Support Section -->
	<section class="py-20 px-4">
		<div class="container mx-auto text-center">
			<h2 class="text-3xl font-bold mb-12">Kùzu Support Options</h2>
			<p class="text-muted-foreground mb-12 max-w-2xl mx-auto">
				Kùzu Inc. provides professional support for using Kùzu, ensuring timely responses and flexible coverage.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				<div class="p-8 bg-background rounded-lg border hover:shadow-lg transition-all">
					<div class="text-sm text-muted-foreground mb-2">Free</div>
					<h3 class="text-2xl font-semibold mb-6">Community Support</h3>
					<div class="h-px w-full bg-border mb-6"></div>
					<ul class="space-y-4 mb-8 text-left">
						<li class="flex items-center">
							<i class="fa-regular fa-circle-check text-primary mr-2"></i>
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
					<a href="https://github.com/kuzudb/kuzu/issues/" target="_blank" class="inline-block">
						<Button variant="outline">Get Started</Button>
					</a>
				</div>
				<div class="relative p-8 bg-background rounded-lg border-1 border-primary shadow-sm transition-all animate-glow">
					<div class="text-sm text-primary mb-2">Negotiable</div>
					<h3 class="text-2xl font-semibold mb-6">Custom Support</h3>
					<div class="h-px w-full bg-primary/20 mb-6"></div>
					<ul class="space-y-4 mb-8 text-left">
						<li class="flex items-center">
							<i class="fa-regular fa-circle-check text-primary mr-2"></i>
							Private issue tracker
						</li>
						<li class="flex items-center">
							<i class="fa-regular fa-circle-check text-primary mr-2"></i>
							Guaranteed response time
						</li>
						<li class="flex items-center">
							<i class="fa-regular fa-circle-check text-primary mr-2"></i>
							Deployment and performance advice
						</li>
					</ul>
					<a href="mailto:contact@kuzudb.com">
						<Button variant="default">Contact Us</Button>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Newsletter Section -->
	<section class="py-20 px-4">
		<div class="container mx-auto max-w-xl text-center">
			<h2 class="text-3xl font-bold mb-6">Stay Updated</h2>
			<p class="text-muted-foreground mb-8">Subscribe to our newsletter for the latest updates and news</p>
			<div class="flex gap-4 max-w-md mx-auto items-center">
				<input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 rounded-lg border bg-background" />
				<Button>Subscribe</Button>
			</div>
		</div>
	</section>
</div>
