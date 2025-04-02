const BASE_API_URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export async function getData() {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  const response = await fetch(`${BASE_API_URL}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error.message || "An error occurred while fetching cards.");
  }

  const data = await response.json();

  return data;
}
