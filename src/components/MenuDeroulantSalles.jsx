import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const MenuDeroulantSalles = (props) => {
  const [clubOptions, setClubOptions] = useState([]);
  const [selectedClub, setSelectedClub] = useState('');

  useEffect(() => {
    console.log(props)
    if (props.data && props.data.length > 0) {
      let data = JSON.parse(props.data)
      const uniqueClubs = Array.from(new Set(data.map(club => club.club_name)));
      setClubOptions(uniqueClubs);

      // Mettre le premier élément en valeur par défaut
      if (uniqueClubs.length > 0 && !selectedClub) {
        setSelectedClub(uniqueClubs[0]);
        if (props.onClubChange) {
          props.onClubChange(uniqueClubs[0]);
        }
      }
    }
  }, [props.data, selectedClub, props.onClubChange]);

  const handleChange = (event) => {
    const selectedClub = event.target.value;
    setSelectedClub(selectedClub);

    // Appeler la fonction de rappel pour informer le composant parent du changement de club
    if (props.onClubChange) {
      props.onClubChange(selectedClub);
    }
  };

  return (
    <FormControl fullWidth style={{ width: '80%', margin: '10px' }}>
      <InputLabel id="club-select-label">Choisissez un club</InputLabel>
      <Select
        labelId="club-select-label"
        id="club-select"
        value={selectedClub}
        label="Choisissez un club"
        onChange={handleChange}
      >
        {clubOptions.map((club) => (
          <MenuItem key={club} value={club}>
            {club}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MenuDeroulantSalles;
