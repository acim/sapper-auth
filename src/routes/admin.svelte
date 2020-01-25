<script context="module">
  export async function preload(page, session) {
    console.log("admin.svelte-session.user: ", session.user);
  }
</script>

<script>
  import { user } from "./_store.js";
  import { goto } from "@sapper/app";

  if (!$user) {
    if (process.browser) {
      goto("/login");
    }
  }
  console.log("admin.svelte-user: ", $user);
</script>

{#if process.browser}This is protected page, you are {$user.username}{/if}
