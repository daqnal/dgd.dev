<script>
    import Nav from "$lib/ui/Nav.svelte";
    import About from "./Sections/About.svelte";
    import Info from "./Sections/Info.svelte";
    import Landing from "./Sections/Landing.svelte";
    import Projects from "./Sections/Projects.svelte";
    import Skills from "./Sections/Skills.svelte";
</script>

<div class="flex flex-col items-center sm:items-start" id="top">
    <Nav />

    <div class="w-full sm:max-w-[90%] flex flex-col place-items-center">
        <!-- <Landing /> -->

        <div class="w-[65ch] max-w-[97%] mb-32">
            <!-- <About /> -->

            <Skills />

            <Projects />

            <Info />
        </div>
    </div>
</div>
