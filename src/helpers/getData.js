import axios from 'axios';

const getData = (url) => {

    let {data} = axios.get(url);

  return (
    data
  )
}

export default getData