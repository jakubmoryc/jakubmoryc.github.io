import React from 'react';
import './css/app.css';

import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  state = {
    scrollPos: undefined,
    showNavbar: false,
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    if (this.state.scrollPos > currentScrollPos) {
      this.setState({
        showNavbar: true
      })
    } else {
      this.setState({
        showNavbar: false
      })
    }
    this.setState({
      scrollPos: currentScrollPos
    })
  }

  componentDidMount() {
    this.setState({
      scrollPos: window.pageYOffset,
      showNavbar: true
    })
    window.addEventListener('scroll', this.handleScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  
  render() {
    return (
      <div className="App">
        <Navbar showNavbar={this.state.showNavbar} toggleTheme={this.toggleTheme}/>
        <main>
          <Jumbotron/>
          <Projects/>
          <Contact/>
          <Footer/>
        </main>
      </div>
    );
  }
}

export default App;
