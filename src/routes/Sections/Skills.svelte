<script>
    import { skillGroups } from "../../consts.ts";

    const colorCategories = [
        "badge-primary",
        "badge-accent",
        "badge-success",
        "badge-warning",
        "badge-error",
    ];
</script>

<div>
    <h2 id="skills" class="text-4xl text-center mb-4 mt-8">Skills</h2>

    <div class="bg-base-200 rounded-box">
        {#each skillGroups as { name, skills }, i}
            <div class="p-4">
                <h3 class="text-xl text-center mb-4">{name}</h3>

                <div class="flex flex-wrap gap-2 place-content-evenly">
                    {#each skills as { name, desc, proficiency }, j}
                        <div
                            class={desc || proficiency ? "tooltip" : ""}
                            data-tip={`${desc ? desc : ""} ${proficiency ? "Proficiency level: " + proficiency + "." : ""}`}
                        >
                            <div
                                class="cursor-help badge badge-lg badge-soft {colorCategories[
                                    i
                                ]}"
                            >
                                {name}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
