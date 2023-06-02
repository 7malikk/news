const paginate = (data) => {
  const perPage = 10;
  const pages = Math.ceil(data.length / perPage);

  const newData = Array.from({ length: pages }, (_, index) => {
    const begin = index * perPage;
    return data.slice(begin, begin + perPage);
  });

  return newData;
};

export default paginate;
