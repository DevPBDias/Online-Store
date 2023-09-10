export const ApiProducts = async () => {
  const result = await fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return result;
};
