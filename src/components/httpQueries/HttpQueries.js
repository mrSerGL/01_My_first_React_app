import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';

// import css from './HttpQueries.module.css';

export default class HttpQueries extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    // console.log(pokemonName);
    this.setState({ pokemonName });
  };

  render() {
    return (
    
      <div style={{ width: 280, margin: '0 auto', padding: '8' }}>
         <h2>Hooked pokemons HTTP queries</h2>
       
        <PokemonForm submitPokemonName={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName}/>
        {/* <ToastContainer autoClose={3000}/> */}
      </div>
    );

    //* === "неправильный способ" ======

    //   state = {
    //     pokemon: null,
    //     loading: false,
    //   };

    // componentDidMount() {
    // this.setState({ loading: true });

    //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //       .then(res => res.json())
    //       .then(pokemon => this.setState({ pokemon }))
    //       .finally(()=>this.setState({ loading: false }));
    //   }

    //   render() {
    //     console.log(this.state.pokemon);

    //     return (
    //       <div style={{ width: 280, margin: '0 auto', padding: '8' }}>
    //         {/* <ToastContainer autoClose={3000}/> */}
    //         {this.state.loading && <h1>loading...</h1>}
    //         {this.state.pokemon && (
    //           <div>I am Pokemon {this.state.pokemon.name} </div>
    //         )}
    //       </div>
    //     );
    //    }
  }
}
