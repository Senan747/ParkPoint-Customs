const API_URL = "https://api.example.com";

export const fetchData = async ({ restOfApiUrl }: { restOfApiUrl: string }) => {
  const response = await fetch(`${API_URL}/${restOfApiUrl}`);
  if (!response.ok) {
    throw new Error("It is not working");
  }
  return response.json();
};
