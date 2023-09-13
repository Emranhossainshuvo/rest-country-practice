import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json()) 
        .then(data => setCountries(data))
    }, [])

    return (
        <div >
            <h3 className="text-center text-5xl font-semibold mb-5">Countries: {countries.length}</h3>            
            <div className="md:grid md:grid-cols-3 md:gap-3 container mx-auto">
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;