import classes from './TeeTimes.module.css'
import TeeTime from './TeeTime';
import Card from '../UI/Card';
import React, { useState, useEffect } from 'react';
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Rich",
    time: "3:27",
    teeNbr: 1,
  },
  {
    id: "m2",
    name: "Warren",
    time: "3:27",
    teeNbr: 1,
  },
  {
    id: "m3",
    name: "Tom",
    time: "3:27",
    teeNbr: 1,
  },
  {
    id: "m4",
    name: "Dick",
    time: "3:27",
    teeNbr: 1,
  },
  {
    id: "m5",
    name: "Malz",
    time: "3:36",
    teeNbr: 2,
  },
  {
    id: "m6",
    name: "Seif",
    time: "3:36",
    teeNbr: 2,
  },
  {
    id: "m7",
    name: "Al",
    time: "3:36",
    teeNbr: 2,
  },
  {
    id: "m8",
    name: "Fizz",
    time: "3:36",
    teeNbr: 2,
  },
];
const TeeTimes = () => {
  console.log('teetimes');
  const [teeTimes, setTeeTimes] = useState(DUMMY_MEALS);
  // const fetchMovies = () => {
  //   fetch("https://react-e2481-default-rtdb.firebaseio.com/movies.json") 
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((jsonData) => {
  //       const movieKeys = Object.keys(jsonData);
  //       const moreMeals = movieKeys.map((movieKey) => {
  //         const movie = jsonData[movieKey];
  //         return {
  //           id: movie.id,
  //           name: movie.name,
  //           time: movie.description,
  //           teeNbr: movie.price,
  //         };
  //       });
  //       const newMeals = [...DUMMY_MEALS, ...moreMeals];
  //       setTeeTimes(newMeals);
  //     })
  //     .catch(error => {
  //       console.log("we got an error", error);
  //     })
  //     ;
  // };
  // useEffect(() => {
  //   fetchMovies();
  // }, []);
  const teeTimeList = teeTimes.map((teeTime) => (<TeeTime key={teeTime.id} teeTime={teeTime}/>));
  const teeGroup1 = renderTeeTimes(teeTimeList, 0, 4);
  const teeGroup2 = renderTeeTimes(teeTimeList, 4, 8);
  const teeGroup3 = renderTeeTimes(teeTimeList, 8, 12);
  return (
    <React.Fragment>
    <Card>
      <ul>
      {teeGroup1}
      </ul>
    </Card>
    <Card>
      <ul>
      {teeGroup2}
      </ul>
    </Card>
    </React.Fragment>
  );
};
function renderTeeTimes(teeTimes, startAt, upTo) {
  const teeTimeList = [];
  for (let i = startAt; i < upTo && i < teeTimes.length;i++) {
      teeTimeList.push(teeTimes[i]);
  }
  return teeTimeList;
}
export default TeeTimes;
