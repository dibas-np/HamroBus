import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from 'react-bootstrap';
import { red } from '@mui/material/colors';
import { Navigate, useNavigate } from 'react-router-dom';

const LocationOptions=[
  'Achham',
  'Arghakhanchi',
  'Baglung',
  'Baitadi',
  'Bajhang',
  'Bajura',
  'Banke',
  'Bara',
  'Bardiya',
  'Bhaktapur',
  'Bhojpur',
  'Chitwan',
  'Dadeldhura',
  'Dailekh',
  'Dang deukhuri',
  'Darchula',
  'Dhading',
  'Dhankuta',
  'Dhanusa',
  'Dholkha',
  'Dolpa',
  'Doti',
  'Gorkha',
  'Gulmi',
  'Humla',
  'Ilam',
  'Jajarkot',
  'Jhapa',
  'Jumla',
  'Kailali',
  'Kalikot',
  'Kanchanpur',
  'Kapilvastu',
  'Kaski',
  'Kathmandu',
  'Kavrepalanchok',
  'Khotang',
  'Lalitpur',
  'Lamjung',
  'Mahottari',
  'Makwanpur',
  'Manang',
  'Morang',
  'Mugu',
  'Mustang',
  'Myagdi',
  'Nawalparasi',
  'Nuwakot',
  'Okhaldhunga',
  'Palpa',
  'Panchthar',
  'Parbat',
  'Parsa',
  'Pyuthan',
  'Ramechhap',
  'Rasuwa',
  'Rautahat',
  'Rolpa',
  'Rukum',
  'Rupandehi',
  'Salyan',
  'Sankhuwasabha',
  'Saptari',
  'Sarlahi',
  'Sindhuli',
  'Sindhupalchok',
  'Siraha',
  'Solukhumbu',
  'Sunsari',
  'Surkhet',
  'Syangja',
  'Tanahu',
  'Taplejung',
  'Terhathum',
  'Udayapur'
]
export default function SearchBox() {
  const navigate = useNavigate();
  const [destination, setDestination] = React.useState(LocationOptions[0]);
  const [inputdestination, setInputDestination] = React.useState('');
  const [departure, setDeparture] = React.useState(LocationOptions[10]);
  const [inputdeparture, setInputDeparture] = React.useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
      if (inputdestination != null && inputdeparture != null) {
        let finaldeparture = inputdeparture.toLowerCase();
        let finaldestination = inputdestination.toLowerCase();
        navigate('/result/' + finaldeparture + '/' + finaldestination);
      };
  };
  return (
    <div className = 'input-group border border-success d-flex justify-content-center'
    id = "search-box" >
      < div className='input-group-prepend search-comp' >
        <Autocomplete
          value={departure}
          onChange={(event, newDepartureValue) => {
              console.log(newDepartureValue);
            setDeparture(newDepartureValue);
          }}
          inputdeparture={inputdeparture}
          onInputChange={(event, newInputDepartureValue) => {
            setInputDeparture(newInputDepartureValue);
          }}
          id="search-box-from"
          options={LocationOptions}
          sx = {
            {
              width: 300
            }
          }
          renderInput={(params) => <TextField {...params} label="From" />}
        />
      </div>
      < div className = 'input-group-prepend search-comp' >
        <Autocomplete
          value={destination}
          onChange={(event, newDestinationValue) => {
              console.log(newDestinationValue);
            setDestination(newDestinationValue);
          }}
          inputdestination={inputdestination}
          onInputChange={(event, newInputDestinationValue) => {
            setInputDestination(newInputDestinationValue);
          }}
          id="search-box-destination"
          options={LocationOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Destination" />}
        />
    </div>
    <div className='input-group-prepend search-button search-comp'>
      <Button
        variant="outline-info"
        className="btn btn-outline-info"
        type="submit"
        // disabled={disable}
        onClick={onSubmit}
        size="lg"
      >
        Search
      </Button>
    </div>
  </div>
    
  );
}
