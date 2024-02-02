import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/?',
  params: {
    key: '40978174-ffe177c23d6ae125947cd54e5',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  },
});

export const getAllPosts = () => {
  return instance.get('/');
};

export const searchImage = (q, page = 1) => {
  return instance.get('&', {
    params: {
      q,
      page,
    },
  });
};
