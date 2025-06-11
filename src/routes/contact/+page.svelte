<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { fade, fly } from 'svelte/transition';

	let name = "";
	let email = "";
	let company = "";
	let position = "";
	let user_message = "";
	let statusText = "";
	function handleContact() {
		name = name.trim()
		email = email.trim();
		company = company.trim();
		position = position.trim();
		user_message = user_message.trim();

		statusText = "";
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		const handleContactError = (error: any) => {
			statusText = "An error occured when sending, please try again later";
			console.error("Error contacting: ", error);
		};
		// message required
		if (user_message == ""){
			statusText = "Please fill out required fields";
			console.error("Required user message missing");
			return;
		}
		if (!emailRegex.test(email)) {
			statusText = "Please enter a valid email address.";
			console.error("Invalid email");
			return;
		}
		
		fetch("https://track.kuzudb.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name, 
				email,
				company,
				position,
				user_message,
				origin: "CONTACT_US"
			})
		})
			.then((response) => {
				if(!response.ok) {
					handleContactError(response.statusText);
				} else {
					console.log("Contacted with information:", {
						name: name,
						email: email,
						company: company,
						position: position,
						message: user_message
					});
					statusText = "Message sent successfully!";
				}
			})
			.catch((error) => {
				handleContactError(error);
			})		
	}

</script>

<svelte:head>
	<title>Contact Us - Kuzu</title>
	<meta
		name="description"
		content="Get in touch with the Kuzu team for support and consultancy"
	/>
</svelte:head>

<div class="container mx-auto px-4 py-20" in:fly={{ y: 20, duration: 400, delay: 200 }}>
	<div class="max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold mb-8" in:fade={{ duration: 400, delay: 300 }}>Contact Us</h1>
		
		<div class="grid md:grid-cols-2 gap-12">
			<!-- Contact Information -->
			<div class="transition-all" in:fade={{ duration: 400, delay: 400 }}>
				<h2 class="text-2xl font-semibold mb-6">Get in Touch</h2>
				<p class="text-muted-foreground mb-8">
                    We ensure timely responses, flexible coverage, feature prioritization, and use-case specific consultation.
				</p>
				
				<div class="space-y-4">
					<div class="flex items-center gap-3">
						<i class="fas fa-envelope text-primary"></i>
						<a href="mailto:contact@kuzudb.com" class="hover:text-primary transition-colors">
							contact@kuzudb.com
						</a>
					</div>
					<div class="flex items-center gap-3">
						<i class="fab fa-github text-primary"></i>
						<a href="https://github.com/kuzudb/kuzu" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
							github.com/kuzudb/kuzu
						</a>
					</div>
					<div class="flex items-center gap-3">
						<i class="fab fa-discord text-primary"></i>
						<a href="https://discord.gg/VtX2gw9Rug" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
							Join our Discord
						</a>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="bg-background p-6 rounded-lg border">
				<h2 class="text-2xl font-semibold ">Send us a Message</h2>
				<p class="mb-6 ml-2 text-sm text-muted-foreground"> * are required fields</p>
				<form class="space-y-4">

					<div>
						<label for="name" class="block text-sm font-medium mb-2">Name</label>
						<input
							type="name"
							id="name"
							class="w-full px-4 py-2 rounded-lg border bg-background"
							placeholder="John Doe"
							bind:value={name}
						/>
					</div>
					
					<div>
						<label for="email" class="block text-sm font-medium mb-2">Email *</label>
						<input
							type="email"
							id="email"
							class="w-full px-4 py-2 rounded-lg border bg-background"
							placeholder="your@email.com"
							bind:value={email}
						/>
					</div>

                    <div class="grid grid-cols-2 gap-6">
                        <div class="grid grid-rows">
                            <label for="company" class="block text-sm font-medium mb-2">Company</label>
                            <input
                                type="company"
                                id="company"
                                class="w-full px-4 py-2 rounded-lg border bg-background"
                                placeholder="KuzuDB"
								bind:value={company}
                            />
                        </div>
                        <div class="grid grid-rows">
                            <label for="name" class="block text-sm font-medium mb-2">Position</label>
                            <input
                                type="position"
                                id="position"
                                class="w-full px-4 py-2 rounded-lg border bg-background"
                                placeholder="Software Engineer"
								bind:value={position}
                            />
                        </div>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium mb-2">Message *</label>
						<textarea
							id="message"
							rows="4"
							class="w-full px-4 py-2 rounded-lg border bg-background"
							placeholder="How can we help you?"
							bind:value={user_message}
						></textarea>
					</div>
					<Button type="submit" 
							class="w-full" 
							onclick={() => { 
								handleContact();
							}}>
						Send Message
					</Button>
				</form>
				{#if statusText}
					<p class="text-muted-forground text-sm mt-4">
						{statusText}
					</p>
				{/if}
			</div>
		</div>
	</div>
</div> 