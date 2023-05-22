import axios from "axios";
// ff57555c;
import { useState, useEffect } from "react";
import "./App.css";
import * as ReactBootstrap from "react-bootstrap";
function App() {
  const [lyricsItem, setLyricsItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const lyricsFunction = async (title) => {
    try {
    await axios.get(`https://www.omdbapi.com?apikey=ff57555c&s=${title}`)
        .then((res) => {
          setLyricsItem(res.data.Search);
        });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    lyricsFunction("spiderman");
  }, []);

  return (
    <div className="App">
      {loading ? (
        lyricsItem.map((item) => {
          return (
            <>
              <img src={item.Poster} alt="" />
            </>
          );
        })
      ) : (
        <div className="spiner">
          <ReactBootstrap.Spinner animation="border" />
        </div>
      )}
    </div>
  );
}

export default App;
