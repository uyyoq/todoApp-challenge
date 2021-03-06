import Navbar from "../Components/Navbar/Navbar";
import List from "../Components/List/list";
import Tentang from "../Components/Tentang/tentang";
import DemoSederhana from "../Components/Demo Sederhana/demoSederhana";
import Testimoni from "../Components/Testimoni/testimoni";
import Kontak from "../Components/Kontak/kontak";
import Footer from "../Components/Footer/footer";

const cloud = "/bg-cover/cloud.svg";
const everest = "/bg-cover/everest.svg"

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Tentang />
      {/* <div className="bg-line w-full h-96"></div> */}
      <img src={cloud} className="w-full h-auto select-none" />
      <List />
      <DemoSederhana />
      <Testimoni />
      <Kontak
      />
      {/* <img src={everest} className="w-full h-auto select-none" /> */}
      {/* <div className="bg-everest w-full h-96"></div> */}
      <Footer
        facebook="/sosial media/facebook.svg"
        instagram="/sosial media/instagram.svg"
        twitter="/sosial media/twitter.svg"
      />


      <style jsx>{`
        .bg-line {
          background-image: url(${cloud});
          background-repeat: no-repeat;
        }
        .bg-everest {
          background-image: url(${everest});
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default Home;
