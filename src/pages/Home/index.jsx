import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import Menu from '../../components/Header/index';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import categoriesRepository from '../../repositories/categories';
import settingsRepository from '../../repositories/settings';
import './index.css';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos().then((data) => {
      setCategories(data);
    }).catch((err) => {
      console.log(err);
    });

    settingsRepository.getAll().then((data) => {
      if(data.darkTheme) {
        const html = document.querySelector("html");

        const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();
          
        const changeColors = (colors) => {
          Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]));
        };

        changeColors({
          background: "#000000",
          backgroundHeader: "#FFFFFF",
          colorText: "#FFFFFF"
        });
      }
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
                videoDescription={item.videos[0].description}
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
