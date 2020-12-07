import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About_Us from "./components/About_Us"
import Support_Us from "./components/Support_Us"
import Donate_Us from "./components/Donate_Us"
import Gallery from "./components/Gallery"
import Contact_Us from "./components/Contact_Us"
import Footer from "./components/Footer"
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact>
		  <Navbar />
		  <Home />
		  <Footer />
        </Route>
		<Route path="/About_Us" >
          <Navbar />
          <About_Us />
          <Footer />
        </Route>
		<Route path="/Support_Us" >
			<Navbar />
			<Support_Us/>
			<Footer />
        </Route>
        <Route path="/Donate_Us" >
          <Navbar />
          <Donate_Us />
          <Footer />
        </Route>
		<Route path="/Gallery" >
          <Navbar />
          <Gallery />
          <Footer />
        </Route>
		<Route path="/Contact_Us" >
          <Navbar />
          <Contact_Us />
          <Footer />
        </Route>
      </Router>

    )
  }
}
export default App;
