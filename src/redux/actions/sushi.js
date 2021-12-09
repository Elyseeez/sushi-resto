import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchSushi = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios.get('http://localhost:3000/db.json').then(({data}) => {
    dispatch(setSushi(data.sushi));
  });
};

export const setSushi = (items) => ({
    type: 'SET_SUSHI',
    payload: items,
});