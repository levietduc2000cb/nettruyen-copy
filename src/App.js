import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.scss";
import Header from "./layout/Header/Header";
import NavBar from "./layout/NavBar/NavBar";
import NotifyBlock from "./layout/NotifyBlock/NotifyBlock";
import RecommendedStory from "./components/RecommendedStory/RecommendedStory";
import WrapperBodyHome from "./components/WrapperBodyHome/WrapperBodyHome";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <NotifyBlock></NotifyBlock>
      <RecommendedStory></RecommendedStory>
      <WrapperBodyHome></WrapperBodyHome>
      <Footer></Footer>
    </div>
  );
}

export default App;
