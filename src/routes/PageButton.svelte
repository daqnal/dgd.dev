<script>
  let { title, icon: Icon, active = false, onclick } = $props();
</script>

<button
  {onclick}
  class="btn btn-circle tooltip tooltip-left text-xl w-[5vw] h-[5vw] {active
    ? 'btn-primary'
    : ''}"
  data-tip={title}
>
  <Icon />
</button>
