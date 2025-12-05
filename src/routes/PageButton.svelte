<script>
  let { title, icon: Icon, active = false, onclick } = $props();
</script>

<button
  {onclick}
  class="btn btn-circle tooltip tooltip-left text-xl w-[4vw] h-[4vw] {active
    ? 'btn-primary'
    : ''}"
  data-tip={title}
>
  <Icon />
</button>
