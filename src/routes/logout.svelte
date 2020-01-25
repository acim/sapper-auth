<script>
  import { goto } from "@sapper/app";
  import { user } from "./_store.js";

  (async function logout() {
    try {
      await fetch("auth/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (e) {
      console.log(e);
    }
  })();
  $user = null;
  goto("/");
</script>
