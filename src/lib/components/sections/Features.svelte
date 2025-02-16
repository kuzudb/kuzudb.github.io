<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Code, Database, Zap, Lock } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	const features: Array<{
		icon: ComponentType;
		title: string;
		description: string;
	}> = [
		{
			icon: Code,
			title: 'Graph-based Modeling & Querying',
			description: 'Property graph data model with Cypher query language support'
		},
		{
			icon: Database,
			title: 'Optimized Storage & Execution',
			description: 'Columnar storage, vectorized processing, and novel join algorithms'
		},
		{
			icon: Zap,
			title: 'Simple Integration',
			description: 'Embeddable, serverless integration with zero-copy Python support'
		},
		{
			icon: Lock,
			title: 'Free & Open Source',
			description: 'MIT Licensed, open-source with enterprise-grade features'
		}
	];
</script>

<section class="py-20 px-4 bg-muted/50">
	<div class="container mx-auto">
		<h2 class="text-3xl font-bold text-center mb-12">Core Features</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each features as feature}
				<div
					class="p-6 rounded-lg bg-background border transition-all hover:shadow-lg hover:-translate-y-1"
					in:fly={{ y: 20, duration: 600 }}
				>
					<svelte:component
						this={feature.icon}
						class="w-12 h-12 mb-4 text-primary"
					/>
					<h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
					<p class="text-muted-foreground">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section> 