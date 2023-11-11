import Header from "../components/Header";
import { Link } from "react-router-dom";
import Hero from "../assets/images/home-heroimg.png";
import FooterLanding from "../components/FooterLanding";

function Home() {
  return (
    <>
      <Header />
      <div className="flex row items-center text-white bg-gradient-to-b from-[#011638] from-90% via-[#011638] via-30% to-[#326298] to-10%">
        <div className="p-8 sm:p-24 text-center sm:text-left">
          <h2 className="font-extrabold text-4xl sm:text-5xl">
            All-in-one classroom in a virtual space
          </h2>
          <p className="mt-4 mb-4 sm:mt-8">
            ClassConnect is your virtual classroom to engage with classmates and
            teachers to build meaningful friendships.
          </p>
        </div>
        <img className="hidden sm:inline" src={Hero} alt="Hero Image" />
      </div>
      <div className="items-center bg-[#EEC643]">
        <div className="p-24 text-center ">
          <h2 className="font-extrabold text-2xl">
            Engagement that you are missing in your virtual class.
          </h2>
          <p className="mt-8">
            Learn more about our mission and our team
            <Link className="underline mx-1 hover:text-white" to="/about">
              here
            </Link>
            .
          </p>
        </div>
      </div>
      <FooterLanding />
    </>
  );
}

export default Home;
