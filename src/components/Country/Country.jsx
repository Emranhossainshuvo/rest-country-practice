import ProtoTypes from 'prop-types';



const Country = ({country}) => {
    console.log(country)
    const {name, flags} = country;

    return (
        <div className="bg-purple-300 hover:bg-purple-200 text-center border-2 border-solid
         border-slate-800 rounded-xl mb-5">
            <h3 className='text-2xl font-normal mb-4'>{name.common} </h3>    
            <img className='mx-auto mb-3' src={flags.png} alt="" />        
        </div>
    );
};

Country.propTypes = {
    country: ProtoTypes.object.isRequired
}

export default Country;