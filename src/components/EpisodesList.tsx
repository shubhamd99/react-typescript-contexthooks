import React from 'react'
import { IEpisode } from '../store/interfaces';

export default function EpisodesList(props: any): Array<JSX.Element> {

  const { episodes, onAddFav, favourites, store } = props
  const { state, dispatch } = store;

    return episodes.map((episode: IEpisode) => {
        return (
          <div key={episode.id} className="card mb-4 mr-3 shadow" style={{'width': '18rem'}}>
            <img src={episode.image.medium} className="card-img-top" alt={`rick-morty-${episode.name}`} />
            <div className="card-body">
              <h5 className="card-title">{episode.name}</h5>
              <p className="card-text"><strong>Airtime:</strong> {episode.airtime}, <strong>RunTime:</strong> {episode.runtime}</p>
              <p className="card-text">{episode.summary}</p>
              <div className="btn-group">
                <a className="btn btn-success" href={episode.url} target="_blank" rel="noopener noreferrer">Watch</a>
                <button type="button" className="btn btn-warning" onClick={() => onAddFav(state, dispatch, episode)}>
                  { favourites.find((fav: IEpisode) => fav.id === episode.id) ? 'Remove Fav' : 'Add Fav' }
                </button>
              </div>
            </div>
          </div>
        )
    })
}
