import axios from "axios"
import { useEffect, useState } from "react";
function Home() {

//let h=http://20.244.56.144/products/auth"
const baseURL ="http://20.244.56.144/products/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000";
  // axios
  //   .post("http://20.244.56.144/products/auth", {
  //   })
  //   .then((response) => {
  //     setPost(response.data);
  //     response.status(200)
  //   });

  const [post, setPost] = useState(null);
  axios
  .post("http://20.244.56.144/products/auth", {
    companyname:"goMart",
    cilentID:"37bb493c-73d3-47ea-8675-21f66ef9b735",
    ownerName:"Rahul",
    ownerEmail:"rahul@abc.edu",
    rollNo:"1"
  })
  .then((response) => {
    setPost(response.data);
  });
}
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);
  if (!post) return null;

  return (
    <>
      <h1>Helo</h1>
      {/* {console.log(post)} */}
    </>
  )
}
export default Home