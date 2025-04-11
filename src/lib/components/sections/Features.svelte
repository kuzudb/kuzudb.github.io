<script lang="ts">
	import { fly } from 'svelte/transition';
	import { DatabaseZap, Expand, Code, LockOpen, LayoutDashboard, Puzzle } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	const features: Array<{
		icon: ComponentType;
		title: string;
		description: string;
	}> = [
		{
			icon: DatabaseZap,
			title: 'Embedded',
			description: 'Runs in-process, no external servers. Stores on-disk or in-memory'
		},
		{
			icon: Expand,
			title: 'Fast and Scalable',
			description: 'Columnar storage, vectorized processing, and novel join algorithms',
			link: 'https://blog.kuzudb.com/post/what-every-gdbms-should-do-and-vision/'
		},
		{
			icon: Code,
			title: 'Cypher',
			description: 'Property graph data model with Cypher query language support',
		},
		{
			icon: LockOpen,
			title: 'Open-source',
			description: 'Free and open-source (MIT licensed) with support options'
		},
		{
			icon: LayoutDashboard,
			title: 'Full-featured',
			description: 'Graph-native full-text search index, HNSW vector index, algorithms package, and more'
		},
		{
			icon: Puzzle,
			title: 'AI and Data Ecosystem',
			description: 'Works with LangChain, PyTorch Geometric, LlamaIndex, Pandas, Parquet, Iceberg, and more'
		}
	];
</script>

<section class="py-20 px-4 bg-muted/50">
	<div class="container mx-auto">
		<h2 class="text-3xl font-bold text-center mb-12">Kuzu at a Glance</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
					{#if feature.link}
						<a href={feature.link} class="text-primary" target="_blank">
							Learn more
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section> 