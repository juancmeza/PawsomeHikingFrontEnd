import React, {useState, useEffect} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import PetsIcon from '@material-ui/icons/Pets';

export default function CheckboxLabels({user, userDogs}) {

  // const API = 'http://localhost:3000/users'

  // useEffect(() => {
  //   userDogs(user.id)
  // })


  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    selected: [],
    // userDogs: userDogs,
    profile: {}
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const selectedDogs = () => {
      const sel = []
      
    }  
    // setState({...state, selected: })
    console.log(state)
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            icon={<PetsOutlinedIcon />}
            checkedIcon={<PetsIcon />}
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="Dog1"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<PetsOutlinedIcon />}
            checkedIcon={<PetsIcon />}
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Dog2"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<PetsOutlinedIcon />}
            checkedIcon={<PetsIcon />}
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        }
        label="Dog3"
      />
    </FormGroup>
  );
}