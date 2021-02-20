import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        q: text,
        target: language.value,
        key: API_KEY
      }
    });
    console.log(language, text);
  }, [language, text]); // Run any time we get a new value for language or text

  return (
    <div>
    </div>
  );
};

export default Convert;
