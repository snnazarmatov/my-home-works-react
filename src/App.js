import React from 'react';
import Heading from './Components/Heading'
import Heading1 from './Components/Heading1';
import Heading2 from './Components/Heading2';
import { SECTION } from './Components/styles'; 


import './App.css'

function App() {
    return (
        <SECTION>
            <Heading/>
            <Heading1/>
            <Heading2/>
        </SECTION>
    )
}

export default App;
