<script>
  import { user } from "./../routes/_store.js";
  export let segment;
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
      <a href="logout">logout</a>
    {/if}
  </ul>
</nav>
