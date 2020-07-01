import React, { Component } from 'react';
import { getPokemonByUrl } from '../../services/pokemon-service';
import './PokeCard.scss';

class PokeCard extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this.props.info.url);
  }

  async getData(url) {
    const data = await getPokemonByUrl(url);
    this.setState({ data });
  }

  render() {
    let { state, props, state: { data } } = this;

    return(
      <div className={`pokecard${!data ? ' pokecard--loading' : '' }`}>
        <div className='pokecard_content'>
          <figure className='pokecard_box'>
            <img alt={props.info.name}
                 className='pokecard_img'
                 src={data.sprites && data.sprites.front_default ? data.sprites.front_default : '' }
                 title={props.info.name} />
            <figcaption className='pokecard_info'>
              <h3 className='pokecard_info_title'>{props.info.name}</h3>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default PokeCard;
