import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Option 1', 'Option 2'];
const LocationOptions=[
  'achham',
  'arghakhanchi',
  'baglung',
  'baitadi',
  'bajhang',
  'bajura',
  'banke',
  'bara',
  'bardiya',
  'bhaktapur',
  'bhojpur',
  'chitwan',
 'dadeldhura',
  'dailekh',
  'dang deukhuri',
  'darchula',
  'dhading',
  'dhankuta',
  'dhanusa',
  'dholkha',
  'dolpa',
  'doti',
  'gorkha',
  'gulmi',
  'humla',
  'ilam',
  'jajarkot',
  'jhapa',
  'jumla',
  'kailali',
  'kalikot',
  'kanchanpur',
  'kapilvastu',
  'kaski',
  'kathmandu',
  'kavrepalanchok',
  'khotang',
  'lalitpur',
  'lamjung',
  'mahottari',
  'makwanpur',
  'manang',
  'morang',
  'mugu',
  'mustang',
  'myagdi',
  'nawalparasi',
  'nuwakot',
  'okhaldhunga',
  'palpa',
  'panchthar',
  'parbat',
 'parsa',
  'pyuthan',
  'ramechhap',
  'rasuwa',
  'rautahat',
  'rolpa',
  'rukum',
  'rupandehi',
  'salyan',
  'sankhuwasabha',
  'saptari',
  'sarlahi',
  'sindhuli',
  'sindhupalchok',
  'siraha',
  'solukhumbu',
  'sunsari',
  'surkhet',
  'syangja',
  'tanahu',
 'taplejung',
  'terhathum',
  'udayapur'
]
export default function ControllableStates() {
  const [value, setValue] = React.useState(LocationOptions[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            console.log(newValue);
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={LocationOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}
