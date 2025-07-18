<script lang="ts">
	const testimonials = [
		
		{
			text: "🚀 Build Real-Time Knowledge Graphs with kuzudb + LLMs. Production-grade, ultra-performant, step-by-step. ✅ Kuzu: high-performance graph DB, written in C++ Perfect for anyone building a real-time knowledge base.",
			author: "Linghua Jin",
			role: "Founder of",
			company: "CocoIndex",
			image: "/community/linghua.jpg",
		},
		{
			text: "Stop guessing. Start asking your data bigger questions Most teams still scrape through text looking for keywords, hoping to stitch together some insight. But that approach misses the real shape of your domain ⇒ With a graph database like Kuzu, you actually map how everything connects—people, processes, decisions",
			author: "Todd Larsen",
			role:"CTO of",
			company:"AcreHedge Inc.",
			image: "/community/todd.jpg"
		},
    {
			text: "We were looking for an in-process graph database to run lineage queries: Kuzu is very fast and has great foundations as the team behind it, and handles all the strange inferences we throw at it.",
			author: "Jacopo Tagliabue",
			role: "Founder of",
			company: "Bauplan Labs",
			image: "/community/jacopo.jpg"
		},
		{
			text: "Ever wish your AI could show its work instead of guessing in a black box? With graph databases like Kuzu and AI-generated Cypher queries, you get exactly that.",
			author: "Nick Talwar",
			role: "CTO of",
			company: "Bottega8, Ex-Microsoft",
			image: "/community/nicktalwar.jpg",
		},
		{
			text: "Embedded DBs are having a renaissance. RDBMS: SQLite OLAP: DuckDB Graph: KuzuDB Search: Chroma The developer experience is so good on these. Things just work. Really cool to see.",
			author: "Chris Riccomini",
			role: "Software Engineer, Author, Investor, Advisor",
			company: "",
			image: "/community/criccomini.jpg",
		},
		{
			text: "1. KuzuDB seems faster than Neo4j across the board! (Upto 188x). 2. Features like vectorized query execution, morsel-driven parallelism, worst-case optimal joins, and factorized execution perhaps contribute to this. 3. Embeddability is a big usability win.",
			author: "ttanay666",
			role: "HackerNews",
			company: "",
			image: "",
		},
		{
			text: "Knowledge graphs are infinitely better than vector search for building the memory of AI agents. With five lines of code, you can build a knowledge graph with your data. When you see the results, you'll never go back to vector-mediocrity-land.",
			author: "Santiago Valdarrama",
			role: "Founder of",
			company: "Tideily",
			image: "/community/santiago.jpg"
		},
	];
</script>

<section class="relative py-20 bg-background overflow-hidden">
  <div class="container max-w-7xl mx-auto">
    <div class="h-[800px] overflow-hidden relative">
      <div class="columns-1 md:columns-2 lg:columns-3 gap-6">
        {#each testimonials as testimonial}
          <div class="mb-6 break-inside-avoid bg-background border rounded-lg p-6">
            <p class="text-foreground mb-4 text-left whitespace-pre-line">{testimonial.text}</p>
            <div class="flex items-center gap-3 pt-4 border-t mt-4 flex-none">
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
              <div class="text-left">
                <div class="font-semibold text-foreground">{testimonial.author}</div>
                <div class="text-xs text-muted-foreground">{testimonial.role} {testimonial.company}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section> 