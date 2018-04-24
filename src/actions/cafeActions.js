import axios from 'axios';

import { apiUrl } from "../config/constants"

export const getCafes = (params) =>
  axios.get(`${apiUrl}/api/cafes`).then(response => {
    return response.data.map(cafe => {
      cafe.image = cafe.pictures[0] != undefined
        ? {url: `${apiUrl}/${cafe.pictures[0].url.replace('.jpg', '-100x100.jpg')}`}
        : require('../themes/logo.png')
      return cafe;
    });
  });

export const getCafe = (params) => {
  const {id} = params;

  return axios.get(`${apiUrl}/api/cafes/${id}`)
    .then(response => {
      const cafe = response.data;

      cafe.image = cafe.pictures[0] != undefined
        ? {url: `${apiUrl}/${cafe.pictures[0].url}`}
        : require('../themes/logo.png')

      cafe.images = cafe.pictures.map(picture => {
        return {url: `${apiUrl}/${picture.url}`, id:picture.id}
      })
      return cafe;
    })
    .catch(error => {
      console.log(error);
    });
}