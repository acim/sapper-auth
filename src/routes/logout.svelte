<script>
  import { user } from "./_store.js";
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  onMount(async () => {
    localStorage.clear();
    return await fetch("auth/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: data ? JSON.stringify(data) : null
    });
  });
</script>
