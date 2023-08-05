import React from 'react';
import server from '../../auth/apple';
import axios from 'axios';

const FormData = (props) => {
    function fetchData(){
        let Server2 = server + "/teamFormDetails";
      axios
        .post(Server2, "")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          alert(`Error creating account`);
          console.log(JSON.parse(res).message);
        });
    }
    fetchData();
  return (
    <div>
      formdata
    </div>
  );
}

export default FormData;
