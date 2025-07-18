<script>
    import { Button } from "$lib/components/ui/button";
</script>

<section class="py-20 px-4 bg-muted/50">
    <div class="container max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
            <!-- Logo Scroll -->
            <div class="p-8 bg-background rounded-lg border hover:shadow-lg transition-all flex flex-col h-[36rem] min-h-[28rem] mx-auto w-full max-w-md md:mr-8">
                <h3 class="text-2xl font-semibold mb-6 text-center md:text-left">
                    Trusted by
                </h3>
                <div class="h-px w-full bg-border mb-6"></div>
                <div class="grid grid-cols-2 gap-6 overflow-hidden flex-1">
                    <!-- Animated vertical scroll column (upwards) -->
                    <div class="flex flex-col gap-8 animate-logo-scroll-vertical items-center">
                        <div class="flex items-center justify-center">
                            <img src="/img/at&t.png" loading="lazy" alt="AT&T" class="block dark:hidden h-12 w-auto" role="presentation"  />
                            <img src="/img/at&t-light.png" loading="lazy" alt="AT&T" class="hidden dark:block h-12 w-auto" role="presentation" />
                        </div>
                        <img loading="lazy" src="/img/alibaba.png" alt="Alibaba" class="h-12 w-auto max-w-[120px] object-contain" role="presentation"/>
                        <div class="flex items-center justify-center">
                            <img src="/img/basf.png" loading="lazy" alt="BASF" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/basf-light.png" loading="lazy" alt="BASF" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <div class="flex items-center justify-center">
                            <img src="/img/bauplan.png" loading="lazy" alt="Bauplan" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/bauplan-light.png" loading="lazy" alt="Bauplan" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <div class="flex items-center justify-center">
                            <img src="/img/databricks.png" loading="lazy" alt="Databricks" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/databricks-light.png" loading="lazy" alt="Databricks" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <img loading="lazy" src="/img/gtt.png" alt="GTT" class="h-12 w-auto max-w-[120px] object-contain" role="presentation"/>
                        <img loading="lazy" src="/img/ibm.png" alt="IBM" class="h-12 w-auto max-w-[120px] object-contain" role="presentation"/>
                        <!-- Duplicate for seamless scroll -->
                        <div class="flex items-center justify-center">
                            <img src="/img/at&t.png" loading="lazy" alt="AT&T" class="block dark:hidden h-12 w-auto" role="presentation" />
                            <img src="/img/at&t-light.png" loading="lazy" alt="AT&T" class="hidden dark:block h-12 w-auto" role="presentation" />
                        </div>
                        <img loading="lazy" src="/img/alibaba.png" alt="Alibaba" class="h-12 w-auto max-w-[120px] object-contain" aria-hidden="true" role="presentation"/>
                        <div class="flex items-center justify-center" aria-hidden="true">
                            <img src="/img/basf.png" loading="lazy" alt="BASF" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/basf-light.png" loading="lazy" alt="BASF" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <div class="flex items-center justify-center" aria-hidden="true">
                            <img src="/img/bauplan.png" loading="lazy" alt="Bauplan" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/bauplan-light.png" loading="lazy" alt="Bauplan" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <div class="flex items-center justify-center" aria-hidden="true">
                            <img src="/img/databricks.png" loading="lazy" alt="Databricks" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/databricks-light.png" loading="lazy" alt="Databricks" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <img loading="lazy" src="/img/gtt.png" alt="GTT" class="h-12 w-auto max-w-[120px] object-contain" aria-hidden="true" role="presentation"/>
                        <img loading="lazy" src="/img/ibm.png" alt="IBM" class="h-12 w-auto max-w-[120px] object-contain" aria-hidden="true" role="presentation"/>
                    </div>
                    <!-- Animated vertical scroll column (downwards) -->
                    <div class="flex flex-col gap-8 animate-logo-scroll-vertical-reverse items-center">
                        <div class="flex items-center justify-center">
                            <img src="/img/jpmorgan.png" loading="lazy" alt="JPMorgan" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/jpmorgan-light.png" loading="lazy" alt="JPMorgan" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <img loading="lazy" src="/img/microsoft.png" alt="Microsoft" class="h-12 w-auto max-w-[120px] object-contain" role="presentation"/>
                        <div class="flex items-center justify-center">
                            <img src="/img/nvidia.png" loading="lazy" alt="Nvidia" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/nvidia-light.png" loading="lazy" alt="Nvidia" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <div class="flex items-center justify-center">
                            <img src="/img/paloalto.png" loading="lazy" alt="PaloAlto" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/paloalto-light.png" loading="lazy" alt="PaloAlto" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <img loading="lazy" src="/img/rbc.png" alt="RBC" class="h-12 w-auto max-w-[120px] object-contain" role="presentation"/>
                        <img loading="lazy" src="/img/salesforce.png" alt="Salesforce" class="h-12 w-auto max-w-[120px] object-contain" role="presentation"/>
                        <div class="flex items-center justify-center">
                            <img src="/img/visteon.png" loading="lazy" alt="Visteon" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/visteon-light.png" loading="lazy" alt="Visteon" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <!-- Duplicate for seamless scroll -->
                        <div class="flex items-center justify-center" aria-hidden="true">
                            <img src="/img/jpmorgan.png" loading="lazy" alt="JPMorgan" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/jpmorgan-light.png" loading="lazy" alt="JPMorgan" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <img loading="lazy" src="/img/microsoft.png" alt="Microsoft" class="h-12 w-auto max-w-[120px] object-contain" aria-hidden="true" role="presentation"/>
                        <div class="flex items-center justify-center" aria-hidden="true">
                            <img src="/img/nvidia.png" loading="lazy" alt="Nvidia" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/nvidia-light.png" loading="lazy" alt="Nvidia" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <div class="flex items-center justify-center" aria-hidden="true">
                            <img src="/img/paloalto.png" loading="lazy" alt="PaloAlto" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/paloalto-light.png" loading="lazy" alt="PaloAlto" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                        <img loading="lazy" src="/img/rbc.png" alt="RBC" class="h-12 w-auto max-w-[120px] object-contain" aria-hidden="true" role="presentation"/>
                        <img loading="lazy" src="/img/salesforce.png" alt="Salesforce" class="h-12 w-auto max-w-[120px] object-contain" aria-hidden="true" role="presentation"/>
                        <div class="flex items-center justify-center" aria-hidden="true">
                            <img src="/img/visteon.png" loading="lazy" alt="Visteon" class="block dark:hidden h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                            <img src="/img/visteon-light.png" loading="lazy" alt="Visteon" class="hidden dark:block h-12 w-auto max-w-[120px] object-contain" role="presentation" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Open Source -->
            <div class="flex flex-col h-full mx-auto w-full max-w-md md:border-l md:pl-8">
                <div class="p-8 bg-background rounded-l-lg border shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                    <h3 class="text-2xl font-semibold text-center md:text-left mb-6">
                        Open Source
                    </h3>
                    <div class="h-px w-full bg-border mb-6"></div>
                    <ul class="space-y-4 mb-8 text-left">
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            In-process architecture
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            High performance at scale
                        </li>
                        <li class="flex items-center ">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            Graph-native features
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            AI and Data ecosystem integration
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            MIT-licensed
                        </li>
                    </ul>
                    <a href="//github.com/kuzudb/kuzu/" target="_blank" class="mt-auto">
                        <Button variant="outline">Get Started</Button>
                    </a>
                </div>
            </div>
            <!-- Enterprise Edition -->
            <div class="flex flex-col h-full mx-auto w-full max-w-md">
                <div class="relative p-8 bg-background rounded-r-lg border-1 border-primary shadow-sm transition-all animate-glow h-full flex flex-col">
                    <h3 class="text-2xl font-semibold text-center md:text-left mb-6">Enterprise Edition</h3>
                    <div class="h-px w-full bg-primary/20 mb-6"></div>
                    <ul class="space-y-4 mb-8 text-left">
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            All open source features
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            Standalone server deployment
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            Enterprise security
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            Observability
                        </li>
                        <li class="flex items-center">
                            <i class="fa-regular fa-circle-check text-primary mr-2"></i>
                            Data backup and recovery
                        </li>
                    </ul>
                    <div class="flex flex-row gap-6 mt-auto">
                        <a href="/product">
                            <Button variant="default">Learn More</Button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<style>
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

