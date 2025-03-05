<script lang="ts">
	import { onMount } from 'svelte';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Button } from '$lib/components/ui/button';
	import { Terminal, Copy, Check } from 'lucide-svelte';
	import * as Select from "$lib/components/ui/select";
	import {latestVersion} from '$lib/utils/LatestVersion.json';

	let userOS = $state("linux");
	let selectedTab = $state<TabValue>("python");
	let selectedOSTab = $state(userOS);
	let copiedTimeout: ReturnType<typeof setTimeout>;
	let copiedCommand = $state("");
	let isMobile = $state(false);

	type OSType = 'macos' | 'windows' | 'linux';
	type TabValue = "python" | "nodejs" | "cli" | "cpp" | "rust" | "go" | "java";

	const languages = [
		{ value: "python", label: "Python" },
		{ value: "nodejs", label: "Node.js" },
		{ value: "cli", label: "CLI" },
		{ value: "cpp", label: "C/C++" },
		{ value: "rust", label: "Rust" },
		{ value: "go", label: "Go" },
		{ value: "java", label: "Java" },
		{ value: "wasm", label: "WASM" }
	];

	const triggerContent = $derived(
		languages.find((lang) => lang.value === selectedTab)?.label ?? "Select language"
	);

	onMount(() => {
		// Detect user's OS
		const platform = navigator.platform.toLowerCase();
		if (platform.includes('mac')) {
			userOS = 'macos';
			selectedOSTab = 'macos';
		} else if (platform.includes('win')) {
			userOS = 'windows';
			selectedOSTab = 'windows';
		} else {
			userOS = 'linux';
			selectedOSTab = 'linux';
		}

		// Check if mobile on mount and add resize listener
		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);

		return () => {
			if (copiedTimeout) clearTimeout(copiedTimeout);
			window.removeEventListener('resize', checkIfMobile);
		};
	});

	function checkIfMobile() {
		isMobile = window.innerWidth < 768; // md breakpoint
	}

	async function copyToClipboard(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			copiedCommand = text;
			if (copiedTimeout) clearTimeout(copiedTimeout);
			copiedTimeout = setTimeout(() => {
				copiedCommand = "";
			}, 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	}

	const installCommands = {
		python: 'pip install kuzu',
		nodejs: 'npm install kuzu',
		cli: {
			macos: 'brew install kuzu',
			windows: `https://github.com/kuzudb/kuzu/releases/download/v${latestVersion}/kuzu_cli-windows-x86_64.zip`,
			linux: `x86-64: https://github.com/kuzudb/kuzu/releases/download/v${latestVersion}/kuzu_cli-linux-x86_64.tar.gz\naarch64: https://github.com/kuzudb/kuzu/releases/download/v${latestVersion}/kuzu_cli-linux-aarch64.tar.gz`
		},
		cpp: {
			macos: `https://github.com/kuzudb/kuzu/releases/download/v${latestVersion}/libkuzu-osx-universal.tar.gz`,
			windows: `https://github.com/kuzudb/kuzu/releases/download/v${latestVersion}/libkuzu-windows-x86_64.zip`,
			linux: `x86-64: https://github.com/kuzudb/kuzu/releases/download/v${latestVersion}/libkuzu-linux-x86_64.tar.gz\naarch64: https://github.com/kuzudb/kuzu/releases/download/v${latestVersion}/libkuzu-linux-aarch64.tar.gz`
		},
		rust: 'cargo add kuzu',
		go: 'go get github.com/kuzudb/go-kuzu',
		java: `https://central.sonatype.com/artifact/com.kuzudb/kuzu`,
		wasm: `npm install kuzu-wasm`
	};
</script>

<section id="install" class="py-20 px-4">
	<div class="container mx-auto">
		<h2 class="text-3xl font-bold text-center mb-12">Install Kuzu</h2>
		<div class="max-w-4xl mx-auto">
			<Tabs value={selectedTab} onValueChange={(val: string) => selectedTab = val as TabValue} class="w-full">
				{#if isMobile}
					<div class="w-full mb-8">
						<Select.Root type="single" bind:value={selectedTab}>
							<Select.Trigger class="w-full">
								{triggerContent}
							</Select.Trigger>
							<Select.Content>
								<Select.Group>
									{#each languages as lang}
										<Select.Item value={lang.value} label={lang.label} />
									{/each}
								</Select.Group>
							</Select.Content>
						</Select.Root>
					</div>
				{:else}
					<TabsList class="grid grid-cols-8 mb-8">
						<TabsTrigger value="python">Python</TabsTrigger>
						<TabsTrigger value="nodejs">Node.js</TabsTrigger>
						<TabsTrigger value="cli">CLI</TabsTrigger>
						<TabsTrigger value="cpp">C/C++</TabsTrigger>
						<TabsTrigger value="rust">Rust</TabsTrigger>
						<TabsTrigger value="go">Go</TabsTrigger>
						<TabsTrigger value="java">Java</TabsTrigger>
						<TabsTrigger value="wasm">WASM</TabsTrigger>
					</TabsList>
				{/if}

				<TabsContent value="python" class="mt-4">
					<div class="relative">
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{installCommands.python}</code></pre>
						<Button 
							variant="ghost" 
							size="icon" 
							class="absolute top-2 right-2"
							onclick={() => copyToClipboard(installCommands.python)}
						>
							{#if copiedCommand === installCommands.python}
								<Check class="h-4 w-4" />
							{:else}
								<Copy class="h-4 w-4" />
							{/if}
						</Button>
					</div>
				</TabsContent>

				<TabsContent value="nodejs" class="mt-4">
					<div class="relative">
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{installCommands.nodejs}</code></pre>
						<Button 
							variant="ghost" 
							size="icon" 
							class="absolute top-2 right-2"
							onclick={() => copyToClipboard(installCommands.nodejs)}
						>
							{#if copiedCommand === installCommands.nodejs}
								<Check class="h-4 w-4" />
							{:else}
								<Copy class="h-4 w-4" />
							{/if}
						</Button>
					</div>
				</TabsContent>

				<TabsContent value="cli" class="mt-4">
					<Tabs value={selectedOSTab} onValueChange={(val: string) => selectedOSTab = val}>
						<TabsList>
							<TabsTrigger value="macos">macOS</TabsTrigger>
							<TabsTrigger value="windows">Windows</TabsTrigger>
							<TabsTrigger value="linux">Linux</TabsTrigger>
						</TabsList>
						{#each ['macos', 'windows', 'linux'] as os}
							<TabsContent value={os} class="mt-4">
								<div class="relative">
									<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{installCommands.cli[os as OSType]}</code></pre>
									<Button 
										variant="ghost" 
										size="icon" 
										class="absolute top-2 right-2"
										onclick={() => copyToClipboard(installCommands.cli[os as OSType])}
									>
										{#if copiedCommand === installCommands.cli[os as OSType]}
											<Check class="h-4 w-4" />
										{:else}
											<Copy class="h-4 w-4" />
										{/if}
									</Button>
								</div>
							</TabsContent>
						{/each}
					</Tabs>
				</TabsContent>

				<TabsContent value="cpp" class="mt-4">
					<Tabs value={selectedOSTab} onValueChange={(val: string) => selectedOSTab = val}>
						<TabsList>
							<TabsTrigger value="macos">macOS</TabsTrigger>
							<TabsTrigger value="windows">Windows</TabsTrigger>
							<TabsTrigger value="linux">Linux</TabsTrigger>
						</TabsList>
						{#each ['macos', 'windows', 'linux'] as os}
							<TabsContent value={os} class="mt-4">
								<div class="relative">
									<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{installCommands.cpp[os as OSType]}</code></pre>
									<Button 
										variant="ghost" 
										size="icon" 
										class="absolute top-2 right-2"
										onclick={() => copyToClipboard(installCommands.cpp[os as OSType])}
									>
										{#if copiedCommand === installCommands.cpp[os as OSType]}
											<Check class="h-4 w-4" />
										{:else}
											<Copy class="h-4 w-4" />
										{/if}
									</Button>
								</div>
							</TabsContent>
						{/each}
					</Tabs>
				</TabsContent>

				<TabsContent value="rust" class="mt-4">
					<div class="relative">
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{installCommands.rust}</code></pre>
						<Button 
							variant="ghost" 
							size="icon" 
							class="absolute top-2 right-2"
							onclick={() => copyToClipboard(installCommands.rust)}
						>
							{#if copiedCommand === installCommands.rust}
								<Check class="h-4 w-4" />
							{:else}
								<Copy class="h-4 w-4" />
							{/if}
						</Button>
					</div>
				</TabsContent>

				<TabsContent value="go" class="mt-4">
					<div class="relative">
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{installCommands.go}</code></pre>
						<Button 
							variant="ghost" 
							size="icon" 
							class="absolute top-2 right-2"
							onclick={() => copyToClipboard(installCommands.go)}
						>
							{#if copiedCommand === installCommands.go}
								<Check class="h-4 w-4" />
							{:else}
								<Copy class="h-4 w-4" />
							{/if}
						</Button>
					</div>
				</TabsContent>

				<TabsContent value="java" class="mt-4">
					<div class="relative">
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{installCommands.java}</code></pre>
						<Button 
							variant="ghost" 
							size="icon" 
							class="absolute top-2 right-2"
							onclick={() => copyToClipboard(installCommands.java)}
						>
							{#if copiedCommand === installCommands.java}
								<Check class="h-4 w-4" />
							{:else}
								<Copy class="h-4 w-4" />
							{/if}
						</Button>
					</div>
				</TabsContent>

				<TabsContent value="wasm" class="mt-4">
					<div class="relative">
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{installCommands.wasm}</code></pre>
						<Button 
							variant="ghost" 
							size="icon" 
							class="absolute top-2 right-2"
							onclick={() => copyToClipboard(installCommands.wasm)}
						>
							{#if copiedCommand === installCommands.wasm}
								<Check class="h-4 w-4" />
							{:else}
								<Copy class="h-4 w-4" />
							{/if}
						</Button>
					</div>
				</TabsContent>
			</Tabs>
		</div>
		<p class="mt-6 text-center text-muted-foreground">
			Version: {latestVersion}
		</p>
	</div>
</section> 
