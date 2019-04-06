import axios from 'axios';
 
        axios
        .get("https://songsrestapi.azurewebsites.net/api/Songs")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    


const data={
    songs:[]
  
  }


export default data;