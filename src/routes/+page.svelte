<script>
    import Nav from "$lib/ui/Nav.svelte";
    import About from "./Sections/About.svelte";
    import Info from "./Sections/Info.svelte";
    import Landing from "./Sections/Landing.svelte";
    import Projects from "./Sections/Projects.svelte";
    import Skills from "./Sections/Skills.svelte";
</script>

<div class="flex flex-col items-center" id="top">
    <Nav />

    <Landing />

    <div class="w-[65ch] mb-32">
        <About />

        <Skills />

        <Projects />

        <Info />
    </div>
</div>
