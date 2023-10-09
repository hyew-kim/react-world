export const getData = async () => {
  const res = await fetch('https://api.realworld.io/api/articles?limit=10&offset=0');
  return await res.json();
};
