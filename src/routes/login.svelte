<script>
  import { goto } from "@sapper/app";
  import post from "./_fetch.js";
  import { user } from "./_store.js";

  let username = "";
  let password = "";

  async function submit(event) {
    const response = await post(`auth/login`, "POST", { username, password });
    // TODO handle network errors
    // errors = response.errors;
    if (response.user) {
      $user = user;
      goto("/");
    }
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<section class="section">
  <div class="container">

    <h1>Login</h1>

    <form on:submit|preventDefault={submit}>
      <fieldset>
        <label for="username">
          <b>Username</b>
        </label>
        <input
          class="input"
          type="text"
          placeholder="Username"
          bind:value={username}
          required />
        <label for="password">
          <b>Password</b>
        </label>
        <input
          class="input"
          type="password"
          placeholder="Password"
          bind:value={password}
          required />
        <button
          class="button is-link"
          type="submit"
          disabled={!username || !password}>
          Login
        </button>
      </fieldset>
    </form>

  </div>
</section>
