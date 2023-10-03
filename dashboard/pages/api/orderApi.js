export async function fetchOrder() {
    try {
      const response = await fetch("http://localhost:5000/api/v1/order");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.inventory;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  