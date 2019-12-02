import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';
import TextArea from './components/textarea';

// import { directive } from '@babel/types';

class App extends React.Component {
  render () {
    return(
      <div className="wrapper">
      <Header />
      <Button />
      <TextArea />
      <Footer />
      </div>
    )
  }
}

export default App;
