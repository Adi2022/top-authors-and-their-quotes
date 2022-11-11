import React, { useEffect, useState } from "react";
import Header from "./Layouts/Header";
import Routing from "./Routing";
import Swal from "sweetalert2";

const App = () => {
 
  Swal.fire(
   {
    position: 'top',
    icon: 'info',
    title: 'Best Authors , Top Quotes',
    timer: 1800,
    confirmButtonColor: '#3085d6',
    background: '#fff',
    
   }
  )
 

  return (
    <div>
  <Routing/>
    </div>
  );
};

export default App;
