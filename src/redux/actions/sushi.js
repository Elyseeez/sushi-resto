import axios from 'axios';


export const fetchSushi = () => (dispatch) => {
  axios.get('http://localhost:3000/db.json').then(({data}) => {
    dispatch(setSushi(data.sushi));
  });
};

export const setSushi = (items) => ({
    type: 'SET_SUSHI',
    payload: items,
});