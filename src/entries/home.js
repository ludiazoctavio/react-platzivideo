import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

const homeConatainer = document.getElementById('home-container')

render( <Home data={data} />, homeConatainer);