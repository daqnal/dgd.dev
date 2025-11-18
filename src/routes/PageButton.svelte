<script>
  let p = $props();
</script>

<button onclick={p.onclick} class="btn btn-circle text-xl w-[5vw] h-[5vw]">
  {p.icon}
</button>
