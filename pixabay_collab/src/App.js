import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Search from './components/Search';
import axios from 'axios';
import styles from './style/main.module.css';
//{styles.appBackground}
function App() {
  const [data, setData] = useState([])
  const [numberOfPage, setNumberOfPage] = useState(2);
  const [tempPicture, setTempPicture] = useState([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const search = (text) => {
    if (text.length > 0) {
      axios.get(`https://localhost:7088/api/Pixabay/getImages?promt=${text}`, {
        headers: {
          "Accept": "*",
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(res => {
          setCurrentSearch(text);
          setData(res.data.hits);
          console.log("Это",res.data.hits);
          setCache(text);
        })
    }
    else {
      alert("You must enter query!")
    }
  }

  function setCache(text) {
    axios({
      method: 'get',
      url: `https://localhost:7088/api/Pixabay/getImageByNamePageAndPerPage?promt=${text}&perPage=3&page=${numberOfPage}`,
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setTempPicture(res.data.hits);
      console.log(numberOfPage);
      console.log(res.data.hits);
    })

  }
  function deleteCard(event) {
    console.log(1);
    if (tempPicture.length == 0) {
      setNumberOfPage(numberOfPage + 1);
      setCache(currentSearch);
      console.log(2);
    } else {
      changePicture(event);
    }

  }
  function changePicture(e) {
    let mas = []
    for (let i = 0; i < data.length; i++) {
      if (i != e.target.id) {
        mas.push(data[i])
      } else {
        mas.push(tempPicture[0]);
        tempPicture.shift();
      }
    }

    setData(mas);
  }

  return (

    <div className={styles.App}>
      <Search Search={search}></Search>
      <Cards data={data} deleteCard={deleteCard}></Cards>
    </div>
  );
}
export default App;
