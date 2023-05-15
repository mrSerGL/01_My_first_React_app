import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';

export default function PokemonForm({ submitPokemonName }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      // toast.error('Введите имя покемона.');
      alert('Введите имя покемона.');
      return;
    }

    submitPokemonName(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">Найти</button>
    </form>
  );
}
