// Modify the fetchSuppliers function to return the 'supplier' array directly
export async function fetchSuppliers() {
  try {
    const response = await fetch("http://localhost:5000/api/v1/supplier");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.supplier; // Return the 'supplier' array
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
