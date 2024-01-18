import React, { useEffect, useState } from 'react';
import Calendrier from "../components/Calendrier.jsx";
import DivFooter from '../components/DivFooter.jsx';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import SelectPlanning from '../components/MenuDeroulantSalles.jsx';

function handleActivities(id_club){
  fetch(`https://apibacir.fly.dev/user/getActivity/}` + id_club,{
    method:'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(response => response.json())
    .then(data => {
      try{ 
        let activityInfos = data.data;
        localStorage.setItem("activity", JSON.stringify(activityInfos))
      } catch (err) {
        console.log(data.message)
      }
    })
}

function handleClub(){
  fetch('https://apibacir.fly.dev/admin/clubs/getAllClubs/2',{
    method:'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }})
    .then(response => response.json())
    .then(data => {
      try{ 
        console.log("ici on envoie les infos");
        let clubsInfos = data.data;
        localStorage.setItem("club",JSON.stringify(clubsInfos))
      } catch (err) {
        console.log(data.message)
      }
    })
}

handleClub();
let allClubs = [];
allClubs = JSON.parse(localStorage.getItem("club"));

// handleActivities();
// let allActivities = [];
// allActivities = JSON.parse(localStorage.getItem("activity"));
const allActivities = [
  { activity_name: 'Zumba café', start_time: '2024-01-18T10:00:00', end_time: '2024-01-18T12:00:00', room_id: 'Salle de musculation', club_name: 'BaCIR fit Lille Natio', club_id:'1' },
  { activity_name: 'Aquaponey', start_time: '2024-01-20T14:00:00', end_time: '2024-01-20T16:00:00', room_id: 'Salle de musculation', club_name: 'BaCIR fit Lille Natio', club_id:'1' },
  { activity_name: 'Crossfit', start_time: '2024-01-20T14:00:00', end_time: '2024-01-20T16:00:00', room_id: 'Salle de Yoga', club_name: 'BaCIR fit Lille Esquermes', club_id:'2' },
];

console.log(allActivities);

function Planning() {
  const initialData = [];
  allActivities.map((activity) => {
    initialData.push({
      title: activity.activity_name,
      start: activity.start_time,
      end: activity.end_time,
      salle: activity.room_id,  // Utilisez la salle (room_id) ou toute autre information pertinente
      club: activity.club_id,   // Utilisez l'ID du club ou toute autre information pertinente
      extendedProps: { isDejaInscrit: false },
    });
  });

  const [selectedClub, setSelectedClub] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleClubChange = (club) => {
    setSelectedClub(club);
    console.log(club);
    handleActivities(club);
  };

  useEffect(() => {
    filterDataByClub(selectedClub);
  }, [selectedClub]);

  const filterDataByClub = (club) => {
    if (club === '') {
      setFilteredData(initialData);
    } else {
      const filtered = initialData.filter((event) => event.club === club);
      setFilteredData(filtered);
    }
  };

  return (
    <div className="Planning" style={{ height: '89vh', overflow: 'auto' }}>
      <Header />
      <div>
        <SelectPlanning data={allClubs} onClubChange={handleClubChange} />

        <Calendrier data={filteredData} />
        <DivFooter />
      </div>
      <Footer />
    </div>
  );
}

export default Planning;
