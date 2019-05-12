import React from 'react';
import { Store } from '../../store/Store';
import { IEpisodeProps } from '../../store/interfaces';
import Spinner from '../Spinner/Spinner';

import { onAddFav } from '../../store/Actions';

const EpisodesList = React.lazy<any>(() => import('../EpisodesList'))

export default function FavPage(): JSX.Element {
  const {state, dispatch} = React.useContext(Store)

  const episodeProps: IEpisodeProps = {
    episodes: state.favourites,
    store: {state, dispatch},
    onAddFav: onAddFav,
    favourites: state.favourites
}   

  return (
    <React.Fragment>
        <React.Suspense fallback={<div><Spinner /></div>}>
             <EpisodesList {...episodeProps} />
         </React.Suspense>
    </React.Fragment>
  )
}
