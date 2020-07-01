import React, { Component } from 'react';
import { getPokemons } from '../services/pokemon-service';
import './HomePage.scss';
import PokeCard from "../components/PokeCard/PokeCard";

class HomePage extends Component{
  constructor(props) {
    super(props);

    this.state = { loading: false, limit: 12,  pokeList: [] };
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  async getList() {
    const pokeList = await getPokemons(`limit=${this.state.limit}&offset=${this.state.limit}`);
    this.setState({ ...this.state, pokeList });
  }

  async addToList() {
    const limit = this.state.limit + 12;
    await this.setState({ ...this.state, limit, loading: true });

    this.getList();
    this.setState({ ...this.state, limit, loading: false });
  }

  render() {
    const { loading, pokeList } = this.state;

    return (
      <div className='l-page--home'>
        { pokeList.length ? (
          <div className='gridHome l-grid'>
            { pokeList.map((comp, ind) => (
              <div className='gridHome_item l-col--12 l-col--Xs4 l-col--Md3'
                   key={ind}>
                <PokeCard info={comp} />
              </div>)) }
          </div>
        ) : ('') }

        <div className="l-grid l-grid--centerX">
          <div className='l-col--12 l-col--Xs3 l-col--Md4 l-col--Lg3'>
            <button className={`button is-small is-fullwidth${loading ? ' is-loading' : ''}`}
                    onClick={() => this.addToList()}
                    type='button'>
              Carregar Mais
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
