<script lang="ts">
	import { fly } from "svelte/transition";
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Linkedin } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";

	const teamMembers = [
		{
			name: "Semih Salihoğlu",
			role: "CEO & Co-founder",
			image: "Semih.png",
			linkedin:
				"https://www.linkedin.com/in/semih-saliho%C4%9Flu-0512612a/",
			background: [
				"Stanford University, PhD",
				"Associate Professor at",
				"University of Waterloo",
			],
		},
		{
			name: "Ardan Arac",
			role: "CPO & Co-founder",
			image: "Ardan.png",
			linkedin: "https://www.linkedin.com/in/ardan-arac-85b5533a/",
			background: [
				"Princeton University, BSE",
				"ex-Senior Director of Product at",
				"Google",
			],
		},
		{
			name: "Guodong Jin",
			role: "Software Engineer & Co-founder",
			image: "Guodong.png",
			linkedin: "https://www.linkedin.com/in/guodongjin/",
			background: [
				"Renmin University of China, PhD",
				"ex-Postdoc Researcher at",
				"University of Waterloo",
			],
		},
		{
			name: "Xiyang Feng",
			role: "Software Engineer & Co-founder",
			image: "Xiyang.png",
			linkedin: "https://www.linkedin.com/in/xiyangfeng/",
			background: ["University of Waterloo, MMath"],
		},
		{
			name: "Ziyi Chen",
			role: "Software Engineer & Co-founder",
			image: "Ziyi.png",
			linkedin: "https://www.linkedin.com/in/ziyi-chen-133547178",
			background: ["University of Waterloo, BCS"],
		},
		{
			name: "Chang Liu",
			role: "DevOps Engineer & Co-founder",
			image: "Chang.png",
			linkedin: "https://www.linkedin.com/in/mewim/",
			background: ["University of Waterloo, MMath"],
		},
		{
			name: "Benjamin Winger",
			role: "Software Engineer",
			image: "Benjamin.png",
			background: ["University of Waterloo, BCS"],
		},
		{
			name: "Prashanth Rao",
			role: "AI Engineer",
			image: "Prashanth.png",
			linkedin: "https://www.linkedin.com/in/prrao87/",
			background: [
				"Simon Fraser University, MSc",
				"University of Michigan, MS",
			],
		},
	];
</script>

<section class="py-20 px-4 bg-muted/50">
	<div class="container mx-auto">
		<h2 class="text-3xl font-bold text-center mb-6">Our Team</h2>
		<p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
			Kùzu is built by a team of developers at Kùzu Inc, a company based
			in Waterloo, Ontario, Canada. Reach out to us at <a
				href="mailto:contact@kuzudb.com"
				class="text-primary hover:underline">contact@kuzudb.com</a
			>.
		</p>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto"
		>
			{#each teamMembers as member}
				<div class="h-full" in:fly={{ y: 20, duration: 600 }}>
					<Card class="h-full ">
						<CardContent
							class="h-full p-6 flex flex-col items-center text-center "
						>
							<div
								class="w-28 h-28 rounded-full overflow-hidden mb-4 bg-orange-50 ring-2 ring-primary/10 flex-shrink-0"
							>
								<img
									src="/team/{member.image}"
									alt={member.name}
									class="w-full h-full object-cover"
								/>
							</div>
							<h3 class="font-semibold text-lg mb-1">
								{member.name}
							</h3>
							<p class="text-sm text-muted-foreground mb-4">
								{member.role}
							</p>
							{#if member.background}
							{#each member.background as background}
								<p
									class="text-sm text-muted-foreground flex-grow"
								>
									{background}
								</p>
							{/each}
							{/if}
							{#if member.linkedin}
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="w-full mt-6"
								>
									<Button
										variant="outline"
										size="sm"
										class="w-full gap-2"
									>
										<Linkedin class="w-4 h-4" />
										<span class="text-xs"
											>Connect on LinkedIn</span
										>
									</Button>
								</a>
							{/if}
						</CardContent>
					</Card>
				</div>
			{/each}
		</div>
	</div>
</section>
