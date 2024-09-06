import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Pokeinfo from '../components/Pokeinfo';
import Axios from 'axios';


function ListPage(){
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl,setNextUrl] = useState();
    const [prevUrl,setPrevUrl] = useState();
    const [pokeDex,setPokeDex] = useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await Axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false)
        console.log("pokefun called ");
    };

    const getPokemon=async(res)=>{
        const pokemonData=await Promise.all(
            res.map(async(item)=>{
                const result= await Axios.get(item.url)
                console.log(result.data);
                console.log("getPokemon called ");
                return result.data;

            })
        );

        setPokeData(state=>{
            const updatedState = [...state, ...pokemonData];
            return updatedState.sort((a,b)=>(a.id>b.id ?1:-1));
        });
    };

    useEffect((e)=>{
        console.log("Useeffect called ");
        pokeFun();
    },1)

    return(
        <>
            <Header />
            <div className="container">
                <div className="left-content">
                    {console.log(pokeData)}
                    <Card 
                        pokemon={pokeData} 
                        loading={loading} 
                        infoPokemon={poke=>setPokeDex(poke)} 
                    />
                    <div className="pagenation">
                        {prevUrl && <button onClick={() => setUrl(prevUrl)}>Previous</button>}
                        {nextUrl && <button onClick={() => {setUrl(nextUrl)}}>Next</button>}
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>

        </>
    );
}

export default ListPage;