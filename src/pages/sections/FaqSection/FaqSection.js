import Accordion from "../../../components/ui/Accordion/Accordion";
import Button from "../../../components/ui/Button/Button";

const FAQ = [
  {
    heading: "What happens after I order?",
    content:
      "<p>After you place your order, we get to work!</p><p>Based on the questions you answered in the quiz, we'll craft your personal plan to your level with recomendations on how to improve.</p>",
  },
  {
    heading: "Where I can access my plan?",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
  },
  {
    heading: "How can I cancel my subscription?",
    content:
      "<p>Lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>",
  },
  {
    heading: "Why this program is paid?",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
  },
];

const FaqSection = () => {
  return (
    <div className="FaqSection">
      <Accordion data={FAQ} />
      <div className="FaqSection__cta">
        <Button>Get my plan</Button>
      </div>
    </div>
  );
};

export default FaqSection;
