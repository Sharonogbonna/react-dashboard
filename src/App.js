import logo from './logo.svg';
import Reviews from './components/Reviews';
import Average from './components/Average';
import Sentiment from './components/Sentiment';
import Visitors from './components/Visitors';
import Sidebar from './components/Sidebar';
import './App.css';
import './styles.css'


function App() {
  return (
    <div className='container'>
     <div className='sidebar'>
     <Sidebar />
     </div>
     <div className='all-4'>
     <div className='top3'>
     <div className='reviews'>
     <Reviews />
     </div>
     <div className='average-ratings'>
     <Average />
     </div>
     <div className='sentiment-analysis'>
     <Sentiment />
     </div>
     </div>
     <div className='website-visitors'>
     <Visitors />
     </div>
     </div>
     
    </div>
  );
}

export default App;
