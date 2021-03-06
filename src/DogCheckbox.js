import React, {useState, useEffect} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import PetsIcon from '@material-ui/icons/Pets';

export default function DogCheckbox({dog, updateSelectedDogs}) {

  return (
      <FormControlLabel
        control={
          <Checkbox
            icon={<PetsIcon />}
            checkedIcon={<PetsOutlinedIcon />}
            // checked={state.checkedA}
            onChange={() => updateSelectedDogs(dog)}
            name={dog.name}
            color="primary"
          />
        }
        label={dog.name}
      />
  );
}