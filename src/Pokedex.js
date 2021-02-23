import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { index: 0 };

  }

  handleClick = () => {
    if ([this.state.index] < this.props.pokemons.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

  render() {
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={ this.props.pokemons[this.state.index] } pokemon={ this.props.pokemons[this.state.index] } />
        </div>
        <button onClick={ this.handleClick }>Next Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;