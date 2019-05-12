import React from 'react'
import { Store } from '../../store/Store';
import { IEpisodeProps } from '../../store/interfaces';
import Spinner from '../Spinner/Spinner';
import { fetchData, onAddFav } from '../../store/Actions';

const EpisodesList = React.lazy<any>(() => import('../EpisodesList'))

export default function HomePage(): JSX.Element {
    const {state, dispatch} = React.useContext(Store)
  
React.useEffect(() => {
    state.episodes.length === 0 && fetchData(dispatch)
    })


    const episodeProps: IEpisodeProps = {
        episodes: state.episodes,
        store: {state, dispatch},
        onAddFav: onAddFav,
        favourites: state.favourites
    }      

    console.log(state)
  return (
    <React.Fragment>
        <React.Suspense fallback={<div><Spinner /></div>}>
             <EpisodesList {...episodeProps} />
         </React.Suspense>
    </React.Fragment>
  )
}
