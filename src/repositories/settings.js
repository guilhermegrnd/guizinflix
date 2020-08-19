import configs from '../config';

const URL_SETTINGS = `${configs.URL_BACKEND}/settings`;

async function getAll() {
  const response = await fetch(`${URL_SETTINGS}`);

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  throw new Error(JSON.stringify(response));
}

async function update(object) {
  const response = await fetch(`${URL_SETTINGS}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  throw new Error(JSON.stringify(response));
}

export default {
  getAll,
  update,
};
