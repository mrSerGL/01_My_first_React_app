import { useState, useEffect } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus('pending');
    // setPokemon(null);

    pokemonAPI //вынесли во воешнюю функцию
      .fetchPokemon(pokemonName)
      .then(pokemon => {   // порядок важен!!! Сначала данные!
        setPokemon(pokemon);
        setStatus('resolved');
      })

      .catch(error => {
        setPokemon(null);
        setError(error);
        setStatus('rejected');
       
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <div>entep pokemons name</div>;
  }

  if (status === 'pending') {
    return <PokemonPendingView pokemonName />;
  }

  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
