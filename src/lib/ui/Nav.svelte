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
    class="flex place-items-end place-content-center sm:place-items-center fixed right-0 bottom-4 sm:w-[10%] w-full h-[100vh]"
>
    <!-- <progress
        class="progress progress-primary w-56 rotate-90"
        value={0}
        max="100"></progress> -->

    <div
        class="flex sm:flex-col gap-2 w-fit place-items-center bg-base-300/50 sm:bg-base-300/0 rounded-full p-2 backdrop-blur-md"
    >
        {#each buttons as { elSelector, name, Icon }}
            <NavButton {elSelector} {name} {Icon} />
        {/each}

        <button
            class="btn btn-circle tooltip tooltip-left"
            data-tip="Toggle theme"
        >
            <label class="swap swap-rotate">
                <input
                    type="checkbox"
                    class="theme-controller"
                    value="emerald"
                />
                <Sun class="swap-off w-5 m-auto" />
                <Moon class="swap-on w-5 m-auto" />
            </label>
        </button>
    </div>
</div>
