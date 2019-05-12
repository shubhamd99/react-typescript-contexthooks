type Dispatch = React.Dispatch<IAction>

export interface IState {
    episodes: Array<IEpisode>
    favourites: Array<IEpisode>
}

export interface IAction {
    type: string,
    payload: Array<IEpisode> | any
}

export interface IEpisode {
    id: number
    name: string
    image: { medium: string }
    summary: string
    url: string
    airtime: string
    runtime: string
  }

export interface IEpisodeProps {
    episodes: Array<IEpisode>
    store: { state: IState, dispatch: Dispatch }
    onAddFav: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction
    favourites: Array<IEpisode>
}
  