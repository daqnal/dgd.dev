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

<div id="nav" class="fixed flex w-full h-full z-9 place-content-center">
    <div
        class="fixed flex place-items-center gap-3 bottom-4 bg-neutral-content/10 rounded-full p-2 backdrop-blur-md shadow-lg"
    >
        {#each buttons as { elSelector, name, Icon }}
            <NavButton {elSelector} {name} {Icon} />
        {/each}

        <button
            class="btn btn-circle btn-sm sm:btn-md tooltip hover:border-primary hover:border-3"
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
