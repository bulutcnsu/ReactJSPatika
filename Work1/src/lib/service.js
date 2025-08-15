import axios from 'axios';

const getData = async function (userId) {

  const data = null;


try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const data = {
      user: userResponse.data,
      posts: postResponse.data
    };

   console.log('User:', data.user);
    console.log('Posts:', data.posts);

    return data;

  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
};


export default getData;