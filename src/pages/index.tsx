import "./index.scss";
import Particle from "../components/particle/Particle";
import Header from "../components/layout/header/Header";

const Home = () => {
  return (
    <div className="home">
      <header className="title-section">
        {/* <Particle /> */}
        <Header />
      </header>
    </div>
  );
};

export default Home;
