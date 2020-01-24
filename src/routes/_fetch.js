export default async function restCall(url = "", method = "GET", data = {}) {
  // try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: data ? JSON.stringify(data) : null
    });
    return await response.json();
  // } catch (e) {
  //   throw new Error(e);
  // }
}
