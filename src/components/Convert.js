import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: API_KEY
        }
      });
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, text]); // Run any time we get a new value for language or text

  return (
    <div><h1 className="ui header">{translated}</h1></div>
  );
};

export default Convert;
