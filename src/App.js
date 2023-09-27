import './App.css';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Row from './component/Row';
import requests from './request'; 

function App() {
  return (
    <div >
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending in India" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        
    </div>
  );
}

export default App;
