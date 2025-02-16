<script lang="ts">
	import * as Carousel from "$lib/components/ui/carousel/index.js";

	const testimonials = [
		{
			text: "In line with our philosophy of 'building a lakehouse from spare parts', we were looking for an in-process graph database to run lineage queries: Kùzu is very fast and has great foundations as the team behind it, and handles all the strange inferences we throw at it.",
			author: "Jacopo Tagliabue",
			role: "Founder of",
			company: "Bauplan Labs",
			image: "/community/jacopo.jpg"
		},
		{
			text: "Embedded DBs are having a renaissance. RDBMS: SQLite, OLAP: DuckDB, Graph: KuzuDB, Search: Chroma. The developer experience is so good on these. Things just work. Really cool to see.",
			author: "Chris Riccomini",
			role: "@criccomini",
			image: "/community/criccomini.jpg"
		},
		{
			text: "Kùzu is a really good graph database. If DuckDB is as an emerging power in the relational database world, there is Kùzu in the GDBMS world, and it is open source and faithful to the basics.",
			author: "Jeong Yitae",
			role: "@jeongiitae",
			image: "/community/jandland2.jpg"
		},
		{
			text: "KuzuDB has straightforward integrations with Polars, NetworkX, Pandas, PyArrow and...Torch Geometric! Meaning that you can export data towards Graph Machine Learning with one method call.",
			author: "Francois Vanderseypen",
			role: "Data Scientist",
			image: "/community/francoisvanderseypen.jpeg"
		},
		{
			text: "One of my favorite recent discoveries is @kuzudb. Super lightweight and supports the Cypher query language, such a nice project for graph analytics.",
			author: "Chris Norman",
			role: "@chr_norm",
			image: "/community/chr_norm.jpg"
		}
	];

</script>

<section class="py-20">
	<div class="container mx-auto">
		<h2 class="text-3xl font-bold text-center mb-12">What People Say</h2>
		<div 
			class="relative" 
			role="region"
			aria-label="Testimonials carousel"
		>
			<Carousel.Root
				opts={{
					align: "start",
					loop: true,
					containScroll: "trimSnaps"
				}}
				class="w-full"
			>
				<Carousel.Content class="-ml-6">
					{#each testimonials as testimonial}
						<Carousel.Item class="pl-6 md:basis-1/2 lg:basis-1/3">
							<div class="h-full">
								<div class="bg-background rounded-lg border p-8 hover:shadow-lg transition-all h-full flex flex-col">
									<div class="relative flex-grow">
										<svg 
											class="absolute -top-2 -left-2 w-8 h-8 text-primary/20" 
											fill="currentColor" 
											viewBox="0 0 24 24"
										>
											<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
										</svg>
										<p class="text-lg text-muted-foreground relative z-10 pt-4 line-clamp-[8]">
											{testimonial.text}
										</p>
									</div>
									<div class="flex items-center gap-4 pt-6 mt-auto border-t">
										{#if testimonial.image}
											<div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
												<img
													src={testimonial.image}
													alt={testimonial.author}
													class="w-full h-full object-cover"
												/>
											</div>
										{:else}
											<div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
												<span class="text-xl font-bold text-primary">
													{testimonial.author[0]}
												</span>
											</div>
										{/if}
										<div class="min-w-0">
											<p class="font-semibold truncate">{testimonial.author}</p>
											<p class="text-sm text-muted-foreground truncate">
												{testimonial.role}
												{#if testimonial.company}
													<span class="text-primary ml-1">{testimonial.company}</span>
												{/if}
											</p>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<div class="flex items-center justify-end gap-2 mt-8">
					<Carousel.Previous 
						class="relative left-auto right-auto translate-x-0 translate-y-0" 
					/>
					<Carousel.Next 
						class="relative left-auto right-auto translate-x-0 translate-y-0"
					/>
				</div>
			</Carousel.Root>
		</div>
	</div>
</section> 