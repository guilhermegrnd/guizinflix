import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import OnOff from '../../components/OnOff';

function Settings() {

  const [value, setValue] = useState(false);

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

  const toggleTheme = () => {
    console.log(value);
    if(!value) {
      setValue(true);
      changeColors(darkMode);
    } else {
      setValue(false);
      changeColors(lightMode);
    }
  }

  return (
    <PageDefault>
      <h1>Configurações</h1>
      <OnOff 
        label="Dark Theme"
        isOn={value}
        onColor="#00FF00"
        handleToggle={toggleTheme}
      />
    </PageDefault>
  );
}

export default Settings;
