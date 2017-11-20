import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Todo from "./features/todos/containers";
import "./App.css";

import store from './redux/store';

const App = () => 
<Provider store={store}>
    <Todo />
</Provider>;

export default App;
