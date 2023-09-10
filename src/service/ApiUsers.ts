export const ApiUsers = async () => {
  const result = await fetch('https://fakestoreapi.com/users')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return result;
};
