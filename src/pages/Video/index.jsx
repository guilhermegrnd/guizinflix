import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos';
import categoriesRepository from '../../repositories/categories';

function VideoAdd() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  const categoryTitles = categories.map((item) => item.title);

  const newVideo = {
    title: 'Vídeo Padrão',
    url: '',
    category: '',
  };
  const { handleChange, values } = useForm(newVideo);

  useEffect(() => {
    categoriesRepository.getAll().then((response) => {
      setCategories([...response]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de video </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categorySelected = categories.find((category) => category.id === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: categorySelected,
        }).then((response) => {
          console.log(response);

          history.push('/');
        });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          name="category"
          value={values.categoryId}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link className="ButtonLink" to="/category/add">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default VideoAdd;
