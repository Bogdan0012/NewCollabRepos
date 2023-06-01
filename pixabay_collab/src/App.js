import { useState } from 'react';
import './App.css';
import Cards from './Cards';
import Search from './Search';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  const search = (text) => {
    if (text.length > 0) {
      axios.get(`http://sikoko7815-001-site1.atempurl.com/api/Pixabay/getImages?promt=${text}`, {
        headers: {
          "Accept": "*",
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(res => {
          setData(res.data.hits)
        })
    }
    else{
      alert("You must enter query!")
    }
  }
  return (
    <div className="App">
      <Search Search={search}></Search>
      <Cards data={data}></Cards>
    </div>
  );
}
export default App;
