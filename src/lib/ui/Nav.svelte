<script>
    import NavButton from "./NavButton.svelte";
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
    class="z-1 fixed flex w-full place-content-center lg:h-full lg:place-items-center lg:place-content-end"
>
    <div
        class="fixed lg:relative lg:h-fit flex lg:flex-col md:scale-[80%] place-items-center gap-3 bottom-4 lg:bottom-0 lg:right-8 bg-neutral-content/15 rounded-full p-2 backdrop-blur-md shadow-lg"
    >
        {#each buttons as { elSelector, name, Icon }}
            <NavButton href={elSelector} {name} {Icon} />
        {/each}

        <button
            class="btn btn-circle btn-sm sm:btn-md tooltip lg:tooltip-left hover:border-primary hover:border-3"
            data-tip="Toggle theme"
        >
            <label class="swap swap-rotate">
                <input
                    type="checkbox"
                    class="theme-controller"
                    value="emerald"
                />
                <Sun class="swap-off w-4 sm:w-5 m-auto" />
                <Moon class="swap-on w-4 sm:w-5 m-auto" />
            </label>
        </button>
    </div>
</div>
