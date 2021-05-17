import React, { useState, useEffect } from 'react';
import Input from './Input';
import axios from 'axios';

function HomePage() {
  const [urlData, setUrlData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        'https://raw.githubusercontent.com/invictustech/test/main/README.md'
      );
      setUrlData(data.data);
    };
    fetchData();
  }, []);

  let dataArray = urlData.replace(/[,.&;0-9]/gi, (x) => ''); //removes everything except words
  //console.log(dataArray);
  dataArray = dataArray.replace(/[-(\r\n|\n|\r)]/gi, (x) => ''); //removes new line or tab space
  //console.log(dataArray);
  dataArray = dataArray.split(' ');
  dataArray = dataArray.map((item) => item.toUpperCase());

  const uniqueSet = new Set(dataArray);
  let uniqueArray = Array.from(uniqueSet);
  uniqueArray = uniqueArray.filter((item) => item !== '');

  //console.log(uniqueArray);
  //console.log(dataArray);
  let frequencyObject = {};

  for (let index in uniqueArray) frequencyObject[uniqueArray[index]] = 0;

  for (let index in dataArray) frequencyObject[dataArray[index]]++;
  //console.log(frequencyObject);

  const frequencyArray = [];

  for (let val in frequencyObject)
    frequencyArray.push([val, frequencyObject[val]]);
  //console.log(frequencyArray);

  frequencyObject = null;

  frequencyArray.sort((a, b) => {
    return b[1] - a[1];
  });

  return (
    <div>
      <Input frequencyArray={frequencyArray} arrayLength={uniqueArray.length} />
    </div>
  );
}

export default HomePage;
