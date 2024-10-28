import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  async function fetchMessage() {
    try {
      const resp = await axios.get("http://localhost:5000/API");
      setMessage(resp.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>Message: {message}</div>
  );
}

export default App;
