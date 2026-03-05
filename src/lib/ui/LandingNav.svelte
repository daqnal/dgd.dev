<script>
    import LandingNavButton from "./LandingNavButton.svelte";
    import {
        Smile,
        Scroll,
        BrainCircuit,
        Presentation,
        Info,
        Sun,
        Moon,
    } from "@lucide/svelte";

    const buttons = [
        { elSelector: "#top", name: "Landing", Icon: Smile },
        { elSelector: "#about", name: "About", Icon: Scroll },
        { elSelector: "#skills", name: "Skills", Icon: BrainCircuit },
        { elSelector: "#projects", name: "Projects", Icon: Presentation },
        { elSelector: "#info", name: "Info", Icon: Info },
    ];
</script>

<div
    id="nav"
    class="z-1 pointer-events-none fixed flex w-full place-content-center lg:w-full lg:h-full lg:place-items-center lg:place-content-end"
>
    <div
        class="fixed pointer-events-auto lg:relative lg:h-fit flex lg:flex-col md:scale-[80%] place-items-center gap-1 sm:gap-3 bottom-8 lg:bottom-0 lg:right-8 bg-white/10 rounded-full p-2 backdrop-blur-lg shadow-xl border-2 border-base-content/20"
        data-tip="Posts"
    >
        {#each buttons as { elSelector, name, Icon }}
            <LandingNavButton href={elSelector} {name} {Icon} />
        {/each}

        <button
            class="btn btn-circle btn-sm bg-base-200/70 backdrop-blur-lg sm:btn-md tooltip lg:tooltip-left border-0 hover:border-primary hover:border-3 border-2 border-base-content/50"
            data-tip="Posts"
        >
            <a
                href="/posts"
                class="w-full h-full flex place-content-center place-items-center"
            >
                <Scroll class="w-4 sm:w-5" />
            </a>
        </button>

        <button
            class="btn btn-circle btn-sm bg-base-200/70 backdrop-blur-lg sm:btn-md tooltip lg:tooltip-left border-0 hover:border-primary hover:border-3 border-2 border-base-content/50"
            data-tip="Toggle theme"
        >
            <label class="swap swap-rotate w-full h-full">
                <input
                    type="checkbox"
                    class="theme-controller"
                    value="emerald"
                />
                <Sun class="swap-off w-4 sm:w-5" />
                <Moon class="swap-on w-4 sm:w-5" />
            </label>
        </button>
    </div>
</div>
