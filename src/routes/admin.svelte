<script>
  import { user } from "./_store.js";
  import { goto } from "@sapper/app";

  if (!$user) {
    if (process.browser) {
      goto("/login");
    }
  }
  console.log($user);
</script>

{#if process.browser}
This is protected page, you are {$user.username}
{/if}