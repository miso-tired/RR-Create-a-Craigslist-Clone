// Import data

// Import components
import './App.css';
import Searchbar from './searchbar.js'
import Directory from './directory.js'
import Gallery from './gallery.js'
import {postings} from './postings.js'
import Sidebar from './sidebar.js'


function App() {
  return (
    <div>
      <h1>Craigslist</h1>
      <div className="App">
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
    </div>
  );
}

export default App;
