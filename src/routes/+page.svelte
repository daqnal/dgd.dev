<script>
    import Button from "./Button.svelte";
    import One from "./One.svelte";
    import Two from "./Two.svelte";
    import Three from "./Three.svelte";

    let components = [One, Two, Three];

    let currentComponentIdx = $state(0);

    function handleClick(index) {
        currentComponentIdx = index;
    }
</script>

<div class="main">
    <div class="content">
        {#each [components[currentComponentIdx]] as Comp}
            <Comp />
        {/each}
    </div>
    <div class="buttons-container">
        <Button id={1} onclick={() => handleClick(0)} />
        <Button id={2} onclick={() => handleClick(1)} />
        <Button id={3} onclick={() => handleClick(2)} />
    </div>
</div>

<style>
    .main {
        display: flex;
        width: 100%;
        height: 100%;
    }
    .buttons-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: end;
        justify-content: center;
        gap: 25px;
    }
    .content {
        flex-grow: 1;
    }
</style>
