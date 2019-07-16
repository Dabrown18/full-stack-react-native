import * as ActionTypes from './types';
import nyt from '../../config/nyt';
import {myKey} from "../../lib/myKey";

export const loadNews = () => {
  return async (dispatch) => {
    const response = await nyt.get(`/svc/topstories/v2/science.json?api-key=${myKey}`);
    console.log('Response Data: ', response);

    dispatch({
      type: ActionTypes.LOAD_NEWS,
      payload: response.data
    })
  }
};
