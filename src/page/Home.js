import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/Header/Header";

import Properties from "../components/Properties";
import Footer from "../components/Footer";

function Home(props) {
    const [filterCriteria, setFilterCriteria] = useState(null);
    const filter = (criteria) => {
        console.log(criteria)
        setFilterCriteria(criteria)
    }



    return (
        <div>
            <Header filter={filter}/>
            <Properties criteria={filterCriteria}/>
            <Footer/>
        </div>

    );
}

export default Home;