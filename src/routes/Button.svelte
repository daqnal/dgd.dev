<script>
    let p = $props();
</script>

<button onclick={p.onclick}>
    {p.id}
</button>

<style>
    button {
        width: 100px;
        height: 100px;
        font-size: x-large;
    }
</style>
