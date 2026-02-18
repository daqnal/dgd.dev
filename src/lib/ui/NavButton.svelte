<script>
    import { MediaQuery } from "svelte/reactivity";

    const small = new MediaQuery("min-width: 640px");
    let { elSelector, name, Icon } = $props();
</script>

<a href={elSelector}>
    <div class="tooltip" data-tip={name}>
        <button
            class="btn sm:btn-xl btn-circle hover:border-primary hover:border-3"
        >
            <Icon size={small.current ? "24" : "20"} />
        </button>
    </div>
</a>
