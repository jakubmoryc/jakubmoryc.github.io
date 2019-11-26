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
    screenWidth: undefined
  }

  updateWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth})
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
  handleLoad = () => {
    document.querySelector('.App').classList.remove('blur')
  }

  componentDidMount() {
    this.setState({
      scrollPos: window.pageYOffset,
      showNavbar: true,
      screenWidth: window.innerWidth
    })

    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('load', this.handleLoad)
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  
  render() {
    return (
      <div className="App">
        <Navbar showNavbar={this.state.showNavbar} toggleTheme={this.toggleTheme}/>
        <main>
          <Jumbotron/>
          <Projects screenWidth={this.state.screenWidth}/>
          <Contact/>
          <Footer/>
        </main>
      </div>
    );
  }
}

export default App;
