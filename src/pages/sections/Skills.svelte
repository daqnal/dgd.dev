<script>
    import { skillGroups } from "../../consts";

    const colorCategories = [
        "primary",
        "accent",
        "success",
        "warning",
        "error",
    ];
</script>

<div id="skills" class="flex flex-col place-items-center my-4">
    <h2 class="text-4xl section-title">Skills</h2>

    <div
        class="flex flex-col w-[65ch] max-w-full gap-4 p-4 bg-base-200 rounded-box"
    >
        {#each skillGroups as { name, skills }, i}
            <div class="bg-base-100 rounded-box p-4">
                <h3 class="text-xl text-center mb-4">{name}</h3>

                <div class="flex flex-wrap gap-2 place-content-evenly">
                    {#each skills as { name, desc, proficiency }, j}
                        <div
                            class={desc || proficiency ? "tooltip" : ""}
                            data-tip={`${desc ? desc : ""} ${proficiency ? "Proficiency level: " + proficiency + "." : ""}`}
                        >
                            <div
                                class="badge badge-lg badge-soft badge-{colorCategories[
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
