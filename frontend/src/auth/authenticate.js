const DB_URL = "http://localhost:3001";

async function makeMeLogin({ email, password }) {
  try {
    const response = await fetch(DB_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error(`Error occured in logging in ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error making post request", error);
  }
}
