export const options = {
  method: "GET",
  params: { limit: "20" },
  headers: {
    "X-RapidAPI-Key": "df51ad7083msh5d60df4881c25d8p1c8c3fjsnc6d078cb7ceb",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  // console.log(data);
  return data;
};
