<script context="module">
  export async function preload(page, session) {
    console.log(session);
  }
</script>

<script>
  import { user } from "./_store.js";
</script>

This is admin page {user.username}
