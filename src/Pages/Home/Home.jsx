import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import CardSection from "../../Components/CardSection/CardSection";
import Contact from "../../Components/ContactSection/Contact";
import Blog from "../../Components/BlogSection/Blog";


const Home = () => {
  const loadedData = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <div className="my-32 space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-6">
          {
            loadedData?.map(data => <CardSection
              key={data._id}
              data={data}
            ></CardSection>)
          }
        </div>
        <div  className="my-32 md:px-32  space-y-32">
        <Contact></Contact>
        <Blog></Blog>
        </div>
      </div>
    </div>
  );
};

export default Home;