<script>
  import { user } from "./_store.js";
  import { goto } from "@sapper/app";
</script>

{#if $user}
  This is protected page, you are {$user.username}
{:else}{goto('/login')}{/if}
