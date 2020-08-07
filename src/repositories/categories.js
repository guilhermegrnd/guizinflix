import configs from '../config';

const URL_CATEGORIES = `${configs.URL_BACKEND}/categories`;

async function getAllWithVideos() {
  const response = await fetch(`${URL_CATEGORIES}?_embed=videos`);

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  throw new Error('Não foi possível pegar os dados :/');
}

async function getAll() {
  const response = await fetch(`${URL_CATEGORIES}`);

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  throw new Error('Não foi possível pegar os dados :/');
}

export default {
  getAllWithVideos,
  getAll,
};
