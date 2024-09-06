import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function InfoPage(){
    const navigate = useNavigate();
    return(
        <>
            <Header />
            <div className="cont">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyBCSPs4MgvFtCY8T-roDTxd1rvErY540uA&s" className='homeImg' />
            <div className="head2">
                <h2>Next.js pokedex</h2>
                <p className="parapoke">This is a personal project in order to learn more about Next.js. The main aim is to compare static rendering with server-side rendering. It is a working pokedex for the Kanto region. This particular page is statically generated at build time.</p>
                <button className="handle" onClick={() => navigate("/pokemon")}>Go to Pokedex</button>
            </div>
        </div>


        </>
    );
}

export default InfoPage;