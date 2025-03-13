import "./App.css";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Experience from "./components/Experience";
import { useState } from "react";

function App() {
  const [isHidden, setHidden] = useState(false);
  let schools = ["Tallinn University", "Tribhuvan University"];
  let experience = [
    {
      title: "Verification specialist",
      company: "Veriff",
      desc: "Detail-oriented professional with experience verifying documents, data, and credentials to ensure accuracy and compliance. Skilled in conducting thorough reviews, identifying discrepancies, and communicating findings effectively. Adept at working with confidential information, maintaining accuracy under deadlines, and collaborating with teams to streamline verification processes.",
    },
    {
      title: "QA specialist",
      company: "Veriff",
      desc: "Detail-oriented professional with experience verifying documents, data, and credentials to ensure accuracy and compliance. Skilled in conducting thorough reviews, identifying discrepancies, and communicating findings effectively. Adept at working with confidential information, maintaining accuracy under deadlines, and collaborating with teams to streamline verification processes. ",
    },
    {
      title: "Market researcher",
      company: "Veriff",
      desc: "Analytical and detail-oriented professional with experience gathering and analyzing market data to identify trends, consumer behavior, and competitive insights. Skilled in conducting surveys, interpreting research findings, and providing actionable recommendations to drive business decisions. Adept at using qualitative and quantitative research methods to uncover opportunities and optimize marketing strategies. ",
    },
  ];
  return (
    <>
      <Header />
      <Education schools={schools} />
      <button
        onClick={() => {
          setHidden(!isHidden);
        }}
      >
        hide desc
      </button>
      <Experience list={experience} isSum={isHidden} />
      <Footer />
    </>
  );
}

export default App;
