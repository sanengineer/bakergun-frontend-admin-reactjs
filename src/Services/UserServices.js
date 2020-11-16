const urlPublic = "http://localhost:8080/api/v1";
const urlAdmin = "http://localhost:8080/admin-api/v1";

export const getAllUsers = async () => {
  const response = await fetch(`${urlAdmin}/user-game`);

  console.log("UserService.js_getAllUsers_response: ", response);
  return await response.json();
};

export const createUser = async (data) => {
  const response = await fetch(`${urlPublic}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log("UserService.js_createUser_response: ", response);

  return await response.json();
};

export const searchByUsername = async (searchUsername) => {
  const response = await fetch(
    `${urlAdmin}/user-game?username=${searchUsername}`
  );

  console.log("UserService.js_searchByUsername_response: ", response);
  console.log(
    "UserService.js_searchByUsername_searchUsername: ",
    searchUsername
  );

  return await response.json();

  // await fetch(
  //   `${urlAdmin}/user-game?username=${searchUsername}`
  // ).then(response => {
  //   if (response.status === 200) {
  //     console.log("UserService.js_searchByUsername_response: ", response);
  //     console.log(
  //       "UserService.js_searchByUsername_searchUsername: ",
  //       searchUsername
  //     );
  //     return response.json();
  //   }
  // });
};
