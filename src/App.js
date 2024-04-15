import './App.css';
import OurDoctorPage from './Components/OurDoctorPage/OurDoctorPage'
import Paragraph from './Components/Paragraph1/Paragraph'
import Card from './Components/Crad1/Card'
import Cards from './Components/Card2/Cards'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import JoinUs from './Components/JoinUs/JoinUs'
import Paragraphs from './Components/Paragraph2/Paragraphs';
import AnchorCard from './Components/Card3/AnchorCard';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <OurDoctorPage />
        <Paragraph />
        <Card />
        <Cards/>
        <Paragraphs/>
        <AnchorCard/>
        <JoinUs/> 
      </main>
     <Footer />
    </div>
  );
}

export default App;
