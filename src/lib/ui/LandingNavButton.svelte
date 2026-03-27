<script>
  import { MediaQuery } from "svelte/reactivity";

  const small = new MediaQuery("min-width: 640px");
  let { href, name, Icon } = $props();
</script>

<a {href}>
  <div class="tooltip lg:tooltip-left" data-tip={name}>
    <button
      class="btn sm:btn-xl btn-circle border-0 hover:border-primary hover:border-3 border-2 border-base-content/50 bg-base-200/70 backdrop-blur-lg"
    >
      <Icon size={small.current ? "24" : "20"} />
    </button>
  </div>
</a>
