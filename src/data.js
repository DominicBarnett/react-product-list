import data from './data.json' assert { type: "json" };
export default data;

const categories = [...new Set(data.map(product => product.category))];
// const uniqueCategories = [...new Set(categories)]
// console.log(categories); 

const categoryCounts = data.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
  
//   console.log(categoryCounts);

  const categoryNameCounts = Object.entries(
    data.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, count]) => ({ name, count }));
  
//   console.log(categoryNameCounts);
export { data, categoryCounts };