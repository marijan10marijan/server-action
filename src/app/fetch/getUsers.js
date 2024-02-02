export const getUsers = async () => {
  const data = await fetch("http://localhost:4000/users", {
    cache: "no-store",
  });
  const reponse = await data.json();
  return reponse;
};
