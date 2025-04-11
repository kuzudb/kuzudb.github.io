<script lang="ts">
	import KuzuLogo from "$lib/components/KuzuLogo.svelte";
	import { Mail, MapPin } from "lucide-svelte";
</script>

<footer class="bg-muted mt-20 border-t">
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
			<div class="space-y-4">
				<KuzuLogo
					textClass="text-muted-foreground"
					class="h-8 w-28"
				/>
				<p class="text-sm text-muted-foreground">
					Kù-zu ('bright' + 'to know') is a Sumerian word for "wisdom"
				</p>
				<p class="text-muted-foreground text-sm">
					A fast, modern graph database for really large graphs, with vector search and full text search built in
				</p>
				<div class="flex space-x-4 pt-2">
					<a
						href="https://github.com/kuzudb/kuzu"
						class="text-muted-foreground hover:text-foreground transition-colors"
						aria-label="GitHub"
					>
						<i class="fa-brands fa-github"></i>
					</a>
					<a
						href="https://twitter.com/kuzudb"
						class="text-muted-foreground hover:text-foreground transition-colors"
						aria-label="Twitter"
					>
						<i class="fa-brands fa-x-twitter"></i>
					</a>
					<a
						href="https://discord.gg/VtX2gw9Rug"
						class="text-muted-foreground hover:text-foreground transition-colors"
						aria-label="Discord"
					>
						<i class="fa-brands fa-discord"></i>
					</a>
				</div>
			</div>

			<div>
				<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
				<ul class="space-y-3">
					<li>
						<a
							href="https://docs.kuzudb.com"
							target="_blank"
							rel="noopener noreferrer"
							class="text-muted-foreground hover:text-foreground transition-colors text-sm"
							>Documentation</a
						>
					</li>
					<li>
						<a
							href="https://blog.kuzudb.com"
							class="text-muted-foreground hover:text-foreground transition-colors text-sm"
							>Blog</a
						>
					</li>
					<li>
						<a
							href="//kuzudb.com/privacy"
							class="text-muted-foreground hover:text-foreground transition-colors text-sm"
							>Privacy Policy</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="text-lg font-semibold mb-4">Contact</h3>
				<ul class="space-y-3">
					<li class="flex items-center space-x-2">
						<Mail class="h-4 w-4 text-muted-foreground" />
						<a
							href="mailto:contact@kuzudb.com"
							class="text-muted-foreground hover:text-foreground transition-colors text-sm"
							>contact@kuzudb.com</a
						>
					</li>
					<li class="flex items-center space-x-2">
						<MapPin class="h-4 w-4 text-muted-foreground" />
						<span class="text-muted-foreground text-sm"
							>295 Hagey Blvd, Waterloo, ON</span
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 pt-8 border-t text-center text-muted-foreground">
			<p class="text-sm">
				&copy; 2023 - {new Date().getFullYear()} Kùzu Inc. All rights reserved. Website
				designed by
				<a
					href="https://www.linkedin.com/in/kmaximoff/"
					class="text-primary hover:text-foreground transition-colors"
					>Kamran Maksimov</a
				>
			</p>
		</div>
	</div>
</footer>
