const Country = ({country}) => {
    console.log(country)
    const {name, flags} = country;

    return (
        <div className="bg-slate-200 border-2 border-solid
         border-slate-800 rounded-xl mb-5 p-4">
            <h3>Name: {name.common} </h3>    
            <img src={flags.png} alt="" />        
        </div>
    );
};

export default Country;