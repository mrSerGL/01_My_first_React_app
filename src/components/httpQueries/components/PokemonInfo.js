import { Component } from 'react';
// import PokemonDataView from './PokemonDataView';
// import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';
// import pokemonAPI from '../services/pokemon-api';

const Status = {
  // IDLE: 'idle',
  // PENDING: 'pending',
  // RESOLVED: 'resolved',
  // REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      // console.log('name is changed')

      this.setState({ loading: true });
      this.setState({ error: null });


      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`i do not know pokemon ${this.props.pokemonName} !`),
          );
        })
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => {
          this.setState({ error })
          this.setState({pokemon: null})
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        {/* {error && <p>{error.message}</p>} */}
        {error ? <p>{error.message}</p> : null}
        {loading && <div>loading...</div>}
        {!pokemonName && <div>entep pokemons name</div>}
        {pokemon && (
          <div>
            {/* {this.state.pokemon.name} */}
            <p>Hello! I am {pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt="Pokemon name"
              width="280"
            />
          </div>
        )}
      </div>
    );
  }
}

// export default class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     error: null,
//     status: Status.IDLE,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevName !== nextName) {
//       this.setState({ status: Status.PENDING });

//       setTimeout(() => {
//         pokemonAPI
//           .fetchPokemon(nextName)
//           .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
//           .catch(error => this.setState({ error, status: Status.REJECTED }));
//       }, 3000);
//     }
//   }

//   render() {
//     const { pokemon, error, status } = this.state;
//     const { pokemonName } = this.props;

//     if (status === 'idle') {
//       return <div>Введите имя покемона.</div>;
//     }

//     if (status === 'pending') {
//       return <PokemonPendingView pokemonName={pokemonName} />;
//     }

//     if (status === 'rejected') {
//       return <PokemonErrorView message={error.message} />;
//     }

//     if (status === 'resolved') {
//       return <PokemonDataView pokemon={pokemon} />;
//     }
//   }
// }
