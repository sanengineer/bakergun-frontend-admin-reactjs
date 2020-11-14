const urlPublic = "http://localhost:8080/api/v1";
const urlAdmin = "http://localhost:8080/admin-api/v1";

export const getAllUsers = async () => {
  const response = await fetch(`${urlAdmin}/user-game`);

  return await response.json();
};

export const createUser = async (data) => {
  const response = await fetch(`${urlPublic}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log(response);

  return await response.json();
};

export const searchByUsername = async(username) {

    const response = await fetch(`${urlAdmin}/user-game?username=${username}`)

}
