import React, { useState, useEffect, useCallback } from 'react';
import PageDefault from '../../components/PageDefault';
import OnOff from '../../components/OnOff';
import settingsRepository from '../../repositories/settings';

function Settings() {

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {

    const html = document.querySelector("html");

    const lightMode = {
      background: "#FFFFFF",
      backgroundHeader: "#000000",
      colorText: "#000000"
    };

    const darkMode = {
      background: "#000000",
      backgroundHeader: "#FFFFFF",
      colorText: "#FFFFFF"
    };

    const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

    const changeColors = (colors) => {
      Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]));
    };

    const changeTheme = (darkTheme) => {
      if(darkTheme) {
        changeColors(darkMode);
      } else {
        changeColors(lightMode);
      }
    };

    let darkSettings = false;

    if(darkTheme) {
      setDarkTheme(false);
      changeTheme(false);
      darkSettings = false;
    } else {
      setDarkTheme(true);
      changeTheme(true);
      darkSettings = true;
    }

    settingsRepository.update({
      darkTheme: darkSettings,
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }, [darkTheme,setDarkTheme]);

  useEffect(() => {
    settingsRepository.getAll().then((data) => {
      setDarkTheme(data.darkTheme);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Configurações</h1>
      <OnOff 
        label="Dark Theme"
        isOn={darkTheme}
        onColor="#00FF00"
        handleToggle={toggleTheme}
      />
    </PageDefault>
  );
}

export default Settings;
