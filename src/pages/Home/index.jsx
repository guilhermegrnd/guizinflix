import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import Menu from '../../components/Header/index';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import categoriesRepository from '../../repositories/categories';
import './index.css';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos().then((data) => {
      setCategories(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <PageDefault>
      <Menu />

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      {categories.map((item, index) => {
        if (index === 0) {
          return (
            <div key={item.id}>
              <BannerMain
                videoTitle={item.videos[0].title}
                url={item.videos[0].url}
                videoDescription="O que é Front-end? "
              />

              <Carousel
                ignoreFirstVideo
                category={item}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={`${item.id}`}
            category={item}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
