import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect, useState } from 'react';

const MenuDeroulantSalles = (props) => {
  const [salleOptions, setSalleOptions] = useState([]);
  const [selectedSalle, setSelectedSalle] = useState('');

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      const uniqueSalles = Array.from(new Set(props.data.map(event => event.salle)));
      setSalleOptions(uniqueSalles);

      // Mettre le premier élément en valeur par défaut
      if (uniqueSalles.length > 0 && !selectedSalle) {
        setSelectedSalle(uniqueSalles[0]);
        if (props.onSalleChange) {
          props.onSalleChange(uniqueSalles[0]);
        }
      }
    }
  }, [props.data, selectedSalle, props.onSalleChange]);

  const handleChange = (event) => {
    const selectedSalle = event.target.value;
    setSelectedSalle(selectedSalle);

    // Appeler la fonction de rappel pour informer le composant parent du changement de salle
    if (props.onSalleChange) {
      props.onSalleChange(selectedSalle);
    }
  };

  return (
    <FormControl fullWidth style={{width : "80%", margin : "10px"}}>
      <InputLabel id="salle-select-label">Choisissez une salle</InputLabel>
      <Select
        labelId="salle-select-label"
        id="salle-select"
        value={selectedSalle}
        label="Choisissez une salle"
        onChange={handleChange}
      >
        {salleOptions.map((salle) => (
          <MenuItem key={salle} value={salle}>
            {salle}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MenuDeroulantSalles;
