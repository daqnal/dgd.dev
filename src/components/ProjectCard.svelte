<script>
    let { title, images, Icon, link, desc, Markdown } = $props();
</script>

<div class="collapse collapse-arrow bg-base-100">
    <input type="radio" title="my-accordion-2" checked="checked" />
    <div class="collapse-title font-semibold flex gap-2">
        <!-- <Icon class="w-5 inline" /> -->
        <span>{title}</span>
    </div>
    <div class="collapse-content">
        <img src={images[0]} alt={title} class="rounded-t-box" />
        <article class="prose w-full bg-base-200 p-4 rounded-b-box">
            <!-- <Markdown /> -->
        </article>
    </div>
</div>
