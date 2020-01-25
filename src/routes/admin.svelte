<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
  import { user } from "./_store.js";

  onMount(() => {
    if (!$user) {
      goto("login");
    }
  });
</script>

{#if $user}This is protected page, you are {$user.username}{/if}
