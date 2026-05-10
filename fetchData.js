/**
 * Fetch data from the API endpoint
 * @returns {Promise<any>} The fetched data
 */
async function fetchData() {
  try {
    const response = await fetch("https://getdatafromapi.com/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("ankit"),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Export for use in other modules
export { fetchData };

// Made with Bob
