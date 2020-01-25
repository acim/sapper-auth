<script>
  import { goto } from "@sapper/app";
  import { user } from "./../routes/_store.js";
  export let segment;

  async function logout() {
    try {
      await fetch("auth/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      $user = null;
      goto(".");
    } catch (e) {
      console.log(e);
    }
  }
</script>

<nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">home</a>
    </li>
    <li>
      <a class:selected={segment === 'admin'} href="admin">admin</a>
    </li>
    {#if $user}
      <button class="button is-link" on:click={logout}>Logout</button>
    {/if}
  </ul>
</nav>
