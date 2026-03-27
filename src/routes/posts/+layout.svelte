<script lang="ts">
  import { Sun, Moon } from "@lucide/svelte";

  let { children } = $props();
</script>

<div class="w-full flex place-items-center bg-base-200 p-2">
  <div>
    <btn class="bg-base-100 py-1 px-2 rounded-field">dgd.dev/posts</btn>
  </div>

  <div class="flex-grow flex place-content-center gap-2">
    <a
      href="/"
      class="btn btn-outline bg-base-100 hover:bg-base-content/25 btn-sm">/</a
    >

    <a
      href="/posts"
      class="btn btn-outline bg-base-100 hover:bg-base-content/25 btn-sm"
      >/posts</a
    >
  </div>

  <div>
    <button
      class="btn btn-circle bg-base-100 btn-sm tooltip tooltip-left btn-outline hover:bg-base-content/25 btn-sm"
      data-tip="Toggle theme"
    >
      <label class="swap swap-rotate">
        <input type="checkbox" class="theme-controller" value="emerald" />
        <Sun class="swap-off w-4" />
        <Moon class="swap-on w-4" />
      </label>
    </button>
  </div>
</div>

{@render children()}
