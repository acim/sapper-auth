<script>
  import { user } from "./_store.js";
  import { restCall } from "./_fetch.js";
  import { goto } from "@sapper/app";

  localStorage.clear();

  async function logout() {
    const response = await restCall(`auth/logout`, "DELETE");
    // TODO handle network errors
    // errors = response.errors;
  }
</script>

{#await logout()}
  <p>logging out</p>
{:then}
  {console.log('HERE')} {goto('.')}
{:catch error}
  <p style="color: red">{error}</p>
{/await}
