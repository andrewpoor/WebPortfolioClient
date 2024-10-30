import { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [aboutContent, setContent] = useState({
    isLoading: true,
    isError: false,
  });

  async function fetchContent() {
    try {
      const { data } = await axios.get("http://localhost:5000/API/about");
      setContent({ isLoading: false, isError: false, data: data });
    } catch (error) {
      console.log(error.message);
      setContent({ isLoading: false, isError: true });
    }
  }

  useEffect(() => {
    fetchContent();
  }, []);

  const { isLoading, isError, data } = aboutContent;

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Something went wrong. Please try again later.</div>;
  } else {
    const { name, title, bio } = data;

    return (
      <>
        <h1>{name}</h1>
        <h3>{title}</h3>
        <p className="multiline-paragraph">{bio}</p>
      </>
    );
  }
}
export default About;
