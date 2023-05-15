import { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';

// import css from './HttpQueries.module.css';

export default function HttpQueriesHooked() {
  const [pokemonName, setPokemonName] = useState('');

  const handleFormSubmit = pokemonName => {
    setPokemonName(pokemonName);
  };

  return (
    <div style={{ width: 280, margin: '0 auto', padding: '8' }}>
      <PokemonForm submitPokemonName={handleFormSubmit} />
      <PokemonInfo pokemonName={pokemonName} />
      {/* <ToastContainer autoClose={3000}/> */}
    </div>
  );
}
