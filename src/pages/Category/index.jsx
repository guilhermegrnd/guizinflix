import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import categoriesRepository from '../../repositories/categories';

function CategoryAdd() {
  const newCategory = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(newCategory);

  const [categories, setCategories] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    clearForm();
  }

  useEffect(() => {
    categoriesRepository.getAll().then((response) => {
      setCategories([...response]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.title}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((item) => (
          <li key={`${item.id}`}>
            {item.title}
          </li>
        ))}
      </ul>

      <Link className="ButtonLink" to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CategoryAdd;
