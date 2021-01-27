import React from 'react';
import './style.css';
import pokemonType from '../../helpers/pokemonTypes';

function Card({ pokemon }) {
    return (
        <div className="card">
            <div className="card_img">
                <img src={pokemon.sprites.front_default} alt="A type of pokemon"/>
            </div>
            <div className="card_name">
                {pokemon.name}
            </div>
            <div className="card_types">
                {pokemon.types.map(type => {
                    return (
                        <div className="card_type" style={{backgroundColor: pokemonType[type.type.name]}}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="card_info">
                <div className="card_data card_data-weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="card_data card_data-height">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="card_data card_data-ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;