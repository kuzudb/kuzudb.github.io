<script lang="ts">
    import { Button } from "$lib/components/ui/button"
    import { fade, fly } from 'svelte/transition';

    // Waitlist logic
    let email = "";
    let statusText = "";
    let waitlistLoading = false;
    function handleWaitlistJoin() {
        email = email.trim();

        statusText = "";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const handleWaitlistError = (error: any) => {
            statusText = "There was an error joining the waitlist, please try again later.";
            console.error("Error joining: ", error);
        };
        if (!emailRegex.test(email)) {
            statusText = "Please enter a valid email address.";
            console.error("Invalid email");
            return;
        }

        waitlistLoading = true;
        fetch("https://track.kuzudb.com", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ 
                email: email, 
                origin: "WAITLIST" 
            }),
        })
            .then((response) => {
                waitlistLoading = false;
                if (!response.ok) {
                    handleWaitlistError(response.statusText);
                } else {
                    console.log("Joined with information:", {
                        email: email
                    })
                    statusText = "You've joined the waitlist! 🎉";
                }
            })
            .catch((error) => {
                waitlistLoading = false;
                handleWaitlistError(error);
            });
    }
</script>

<section class="py-20 px-4 bg-background">


    <div class="container max-w-5xl mx-auto" in:fly={{ y: 20, duration: 400, delay: 200 }}>
        <h2 class="text-3xl font-bold mb-12 text-center" in:fade={{ duration: 400, delay: 300 }}>Products</h2>

        <div id="waitlist-form" class="max-w-lg w-full mx-auto bg-background border rounded-xl shadow-lg p-10 flex flex-col items-center mb-20">
            <h1 class="text-2xl font-bold mb-4 text-center" in:fade={{ duration: 400, delay: 400 }}>Join the Waitlist</h1>
            <p class="text-muted-foreground mb-8 text-center">
                Be the first to know when we launch! Enter your email below to join our exclusive waitlist and get early access, updates, and more.
            </p>
            <div class="w-full flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    class="px-4 py-3 rounded-lg border bg-background w-full"
                    bind:value={email}
                    on:keydown={(e) => e.key === 'Enter' && handleWaitlistJoin()}
                    disabled={waitlistLoading}
                />
                <Button class="w-full" onclick={handleWaitlistJoin} disabled={waitlistLoading}>
                    {waitlistLoading ? "Joining..." : "Join Waitlist"}
                </Button>
            </div>
            {#if statusText}
                <p class="text-muted-foreground text-sm mt-4 text-center">{statusText}</p>
            {/if}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" in:fade={{ duration: 400, delay: 400 }}>
            
            <!-- Open Source -->
            <div class="h-full">
                <div class="p-8 bg-background rounded-l-lg border shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                    <h3 class="text-2xl font-semibold text-center md:text-left mb-6">
                        Open Source
                    </h3>
                    <div class="h-px w-full bg-border mb-6"></div>
                    <ul class="space-y-4 mb-8 text-left">
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2 align-top"></i>
                            <span><span class="font-bold">In-process architecture:</span> Runs embedded within your application</span>
                        </li>
                        
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">High performance at scale:</span> Engineered for speed on very large graphs</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">Graph-native features:</span> Full-text search index, vector index, inbuilt graph algorithms, and more</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">AI and Data ecosystem integration:</span> Compatible with popular ML/AI frameworks and data pipelines</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">MIT-licensed:</span> Active community support and optional paid services</span>
                        </li>
                      
                    </ul>
                    <a href="//github.com/kuzudb/kuzu/" target="_blank" class="mt-auto">
                        <Button variant="outline">Get Started</Button>
                    </a>
                </div>
            </div>
            <!-- Enterprise Edition -->
            <div class="h-full">
                <div class="relative p-8 bg-background rounded-r-lg border-1 border-primary shadow-sm transition-all animate-glow h-full flex flex-col">
                    <h3 class="text-2xl font-semibold text-center md:text-left mb-6">Enterprise Edition</h3>
                    <div class="h-px w-full bg-primary/20 mb-6"></div>
                    <ul class="space-y-4 mb-8 text-left">
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">All open source features</span> plus additional closed-source capabilities </span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">Standalone server deployment:</span> Designed for enterprise production use</span>
                        </li>
                        
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">Enterprise security:</span> Includes authentication, role-based access control, and secure data transmission</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">Observability:</span> Built-in logging, monitoring, and performance analytics</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            <span><span class="font-bold">Data backup and recovery:</span> Automated periodic backup with point-in-time restore</span>
                        </li>
                    </ul>
                    <a href="#" class="mt-auto" on:click|preventDefault={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Button variant="default">Join our Waitlist</Button>
                    </a>
                </div>
            </div>      
        </div>
    </div>
   
</section>


<style>
    html {
        scroll-behavior: smooth;
    }
    @keyframes logo-scroll-vertical {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-50%);
        }
    }
    .animate-logo-scroll-vertical {
        animation: logo-scroll-vertical 15s linear infinite;
        width: 100%;
        will-change: transform;
    }
    .animate-logo-scroll-vertical-reverse {
        animation: logo-scroll-vertical 15s linear infinite reverse;
        width: 100%;
        will-change: transform;
    }
</style>