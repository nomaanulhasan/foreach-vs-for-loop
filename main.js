import axios from 'axios';

// Function to fetch JSON data from a hypothetical API
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
}

// Function to compare the performance of forEach and for loop
function comparePerformance(data) {
  // Using forEach
  console.time('forEach took');
  data.forEach(item => {
    // Perform some operation on each item (e.g., access properties)
    const title = item.title;
  });
  console.timeEnd('forEach took');

  // Using for loop
  console.time('for loop took');
  for (let i = 0; i < data.length; i++) {
    // Perform some operation on each item (e.g., access properties)
    const title = data[i].title;
  }
  console.timeEnd('for loop took');
}

async function main() {
  const jsonData = await fetchData();

  if (jsonData.length > 0) {
    console.log('Performance comparison for 1000+ JSON data records:');
    comparePerformance(jsonData);
  } else {
    console.log('No data available for comparison.');
  }
}

main();
