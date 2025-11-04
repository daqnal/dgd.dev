<script>
    import Button from "./Button.svelte";
    import One from "./One.svelte";
    import Two from "./Two.svelte";
    import Three from "./Three.svelte";

    let components = [One, Two, Three];

    let Component = $state(One);
</script>

<div class="main">
    <div class="content">
        <Component />
    </div>
    <div class="buttons-container">
        <Button id={1} />
        <Button id={2} />
        <Button id={3} />
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
