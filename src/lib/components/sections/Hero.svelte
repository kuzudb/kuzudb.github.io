<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { Button } from "$lib/components/ui/button";
	import { Github, ArrowRight } from "lucide-svelte";
	import { latestVersion } from "$lib/utils/LatestVersion.json";

	let section: HTMLElement;
	let mouseX = 0;
	let mouseY = 0;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let nodes: Array<{
		x: number;
		y: number;
		vx: number;
		vy: number;
		radius: number;
	}> = [];
	let animationFrame: number;

	function handleMouseMove(event: MouseEvent) {
		const rect = section.getBoundingClientRect();
		mouseX = event.clientX - rect.left;
		mouseY = event.clientY - rect.top;
	}

	function createNode() {
		return {
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 1.5,
			vy: (Math.random() - 0.5) * 1.5,
			radius: Math.random() * 5 + 4,
		};
	}

	function drawNode(node: (typeof nodes)[0]) {
		ctx.beginPath();
		ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
		ctx.fillStyle = "hsl(21, 90%, 48%)";
		ctx.fill();
	}

	function drawEdge(node1: (typeof nodes)[0], node2: (typeof nodes)[0]) {
		const distance = Math.hypot(node1.x - node2.x, node1.y - node2.y);
		if (distance < 150) {
			ctx.beginPath();
			ctx.moveTo(node1.x, node1.y);
			ctx.lineTo(node2.x, node2.y);
			ctx.strokeStyle = `rgba(255, 87, 34, ${1 - distance / 150})`;
			ctx.lineWidth = 1;
			ctx.stroke();
		}
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Update and draw nodes
		nodes.forEach((node) => {
			node.x += node.vx;
			node.y += node.vy;

			// Bounce off walls
			if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
			if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

			// Draw connections
			nodes.forEach((otherNode) => {
				if (node !== otherNode) {
					drawEdge(node, otherNode);
				}
			});
		});

		// Draw nodes on top of connections
		nodes.forEach(drawNode);

		animationFrame = requestAnimationFrame(animate);
	}

	function handleResize() {
		if (canvas) {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		}
	}

	onMount(() => {
		ctx = canvas.getContext("2d")!;
		handleResize();

		// Create nodes
		for (let i = 0; i < 50; i++) {
			nodes.push(createNode());
		}

		animate();

		window.addEventListener("resize", handleResize);

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener("resize", handleResize);
		};
	});
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section
	bind:this={section}
	class="relative flex flex-col items-center overflow-hidden py-16"
>
	<!-- Background Light Effect -->
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute h-[500px] aspect-square rounded-full bg-primary/10 blur-[120px] transition-all duration-300 ease-out"
			style="left: {mouseX}px; top: {mouseY}px; transform: translate(-50%, -50%); will-change: transform;"
		></div>
	</div>

	<!-- Hero Content -->
	<div class="flex-none px-4 text-center" in:fade={{ duration: 1000 }}>
		<div class="flex justify-center gap-4 mb-6">
			<a
				href="//github.com/kuzudb/kuzu/releases/tag/v{latestVersion}"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-orange-500/10 border border-primary/50 rounded-full flex items-center gap-2 px-6 py-2"
			>
				<Github class="w-4 h-4" />
				<span class="text-foreground font-medium animate-pulse">
					Kuzu version {latestVersion} released
				</span>
				<ArrowRight class="w-4 h-4" />
			</a>
		</div>
		<h1 class="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
			Embedded, scalable, blazing fast graph database
		</h1>
		<p
			class="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
		>
			Kuzu is the simplest way of transforming your data into a knowledge graph.
		</p>
		<div class="flex gap-4 justify-center mb-8">
			<a href="//github.com/kuzudb/kuzu">
				<Button size="lg" variant="default"
					><i class="fa-brands fa-github"></i>
					GitHub</Button
				>
			</a>
			<a href="#install">
				<Button size="lg" variant="outline">
					<i class="fa-solid fa-download"></i>
					Install</Button
				>
			</a>
		</div>
	</div>

	<!-- Canvas Animation -->
	<div class="relative w-full h-full min-h-80 max-w-5xl mx-auto">
		<canvas bind:this={canvas} class="absolute inset-0 w-full h-full"
		></canvas>
	</div>
</section>
