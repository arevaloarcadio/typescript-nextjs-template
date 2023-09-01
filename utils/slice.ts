import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

interface Film {
  data: any;
  views: number;
}

interface State {
  films: Film[];
}

const initialState: State = {
  films: []
};

export const sliceViews = createSlice({
  name: "views",
  initialState,
  reducers: {
    // Action to set the authentication status
    incrementViews(state, action) {
      const film = state.films.find(film => {
        return film.data['Title'] === action.payload['Title'];
      });

      if (film === undefined) {
        state.films.push({ 
          data: action.payload,
          views: 1 
        });
      } else {
        state.films.forEach(film => {
          if (film.data['Title'] === action.payload['Title']) {
            film.views += 1;
          }
        });
      }
      return state;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
 /* extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },*/
});

/*const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT_VIEWS':
      const film = state.films.find(film => {
        return film.title === action.payload.title;
      });
      if (film === undefined) {
        state.films.push({ title: action.payload.title, views: 1 });
      } else {
        state.films.forEach(film => {
          if (film.title === action.payload.title) {
            film.views += 1;
          }
        });
      }
      return state;
    default:
      return state;
  }
};*/

export const { incrementViews } = sliceViews.actions;

export const selectFilmsState = (state: AppState) => {
  return state.views.films
};

export default sliceViews.reducer;