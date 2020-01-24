<script>
  import { user } from "./_store.js";
  import { restCall } from "./_fetch.js";

  localStorage.removeItem("sapper"); // FIXME: Do not hardcode storage key

  async function logout() {
    const response = await restCall(`auth/logout`, "DELETE", {
      username: user.username
    });
    // TODO handle network errors
    // errors = response.errors;
    if (response.user) {
      $user = user;
      goto("/");
    }
  }
</script>

{#await logout()}
  <p>logging out</p>
{:then items}
  <p>Logged out</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
