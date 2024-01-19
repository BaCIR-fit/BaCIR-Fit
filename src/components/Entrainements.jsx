// Entrainements.js
import React, { useEffect } from 'react';
import './Entrainements.css';
import axios from 'axios';


function getRoom(room_id){
  fetch('https://apibacir.fly.dev/admin/rooms/getRoom/' + room_id,{
    method:'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(response => response.json())
    .then(data => {
    try{ 
        let room = data.data;
        localStorage.setItem("room",JSON.stringify(room))
    } catch (err) {
        console.log(data.message)
    }
  })
}

function getClub(club_id){  
  fetch('https://apibacir.fly.dev/admin/clubs/getClubById' + club_id,{
    method:'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(response => response.json())
    .then(data => {
    try{ 
        let club = data.data;
        localStorage.setItem("club",JSON.stringify(club))
    } catch (err) {
        console.log(data.message)
    }
  })
}

function getActivity(activity_id){  
  fetch('https://apibacir.fly.dev/admin/clubs/getClubById' + activity_id,{
    method:'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(response => response.json())
    .then(data => {
    try{ 
        let activity = data.data;
        localStorage.setItem("activity",JSON.stringify(activity))
    } catch (err) {
        console.log(data.message)
    }
  })
}


const Entrainements = () => {
  // const entrainements = [
  //   { date: '2024-01-01', time: '10:00', salle: 'Salle A', type: 'Cardio', duration: 60 },
  //   { date: '2024-01-05', time: '15:30', salle: 'Salle B', type: 'Musculation', duration: 45 },
  // ];

  
const handlePage = () => {
  console.log(document.cookie)
  // fetch('https://apibacir.fly.dev/user/getLogs',{
    fetch('http://localhost:3000/ user/getLogs',{
   method:'GET',
   credentials:"include",
   headers: {
    'accept':'application/json',
      // 'Cookie':"SessionID"+sessionStorage.getItem('SessionID'),
     'Content-type': 'application/json; charset=UTF-8',
   },

  })
   .then(response => response.json())
   .then(data => {
   try{ 
       console.log("ici on envoie les logs");
       let logsUser = data.data;
       localStorage.setItem("entrainements",JSON.stringify(logsUser))
   } catch (err) {
       console.log(data.message)
   }
 }).catch((err) => console.log(err))
}
  handlePage()

  let historiqueEntrainement = JSON.parse(localStorage.getItem("entrainements"))
  console.log(historiqueEntrainement)
  
  return (
    <div>
      <h2>Historique des entrainements</h2>
      <ul>
        {historiqueEntrainement.map((entrainement, index) => {

          getRoom(entrainement.room_id)
          getClub(entrainement.room_id)
          let roomName = JSON.parse(localStorage.getItem("room"))
          let clubName = JSON.parse(localStorage.getItem("club"))

          return(

          <li key={index}>
            <div className="row">
              <div className="column">
                <p>entrainement.date</p>
                <p>{entrainement.workout_time}</p>
                <p>{roomName.room_name}</p>
              </div>
              <div className="column">
                <p>{entrainement.workout_duration} minutes</p>
                <p>{entrainement.activity_id}</p>
          
                <p>{clubName.club_name}</p>
              </div>
            </div>
          </li>
        )})}
      </ul>
    </div>
  );
};

export default Entrainements;
