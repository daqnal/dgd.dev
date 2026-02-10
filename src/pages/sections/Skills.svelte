<script>
    import { skills } from "../../consts";
</script>

<div id="skills" class="flex flex-col place-items-center my-4">
    <h2 class="text-4xl section-title">Skills</h2>

    <div class="w-[65ch] max-w-full p-4 bg-base-200 rounded-box">
        {#each skills as { name, skills }, i}
            <span>{name}</span>
        {/each}
    </div>
</div>
