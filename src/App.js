import "./App.css";
import Row from "./components/Row";
import request from "./components/request/request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      <Banner />
      {/* Banner */}
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrow} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomance} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
