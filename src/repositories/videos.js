import configs from '../config';

const URL_VIDEOS = `${configs.URL_BACKEND}/videos`;

async function create(object) {
  const response = await fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  throw new Error('Não foi possível cadastrar os dados :/');
}

export default {
  create,
};
