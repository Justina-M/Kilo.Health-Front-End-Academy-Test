import IconList from "../../../components/ui/IconList/IconList";
import PricingTable from "../../../components/ui/PricingTable/PricingTable";
import planImg from "../../../assets/program-features/plan.png";
import exerciseImg from "../../../assets/program-features/exercise.png";
import shoeImg from "../../../assets/program-features/shoe.png";
import dietImg from "../../../assets/program-features/diet.png";
import whistleImg from "../../../assets/program-features/whistle.png";
import smartwatchImg from "../../../assets/program-features/smartwatch.png";
import bookcheckImg from "../../../assets/program-features/bookcheck.png";

const PRICING_CARDS_DATA = [
  {
    title: "6 month plan",
    flag: "Save 50%",
    price: "9.99",
    duration: "month",
    total: "119.94",
    totalDiscount: "59.94",
    discountType: "billed every 6 months",
  },
  {
    title: "3 month plan",
    price: "14.99",
    duration: "month",
    total: "59.97",
    totalDiscount: "44.97",
    discountType: "billed every 3 months",
  },
  {
    title: "1 month plan",
    price: "19.99",
    duration: "month",
    discountType: "Billed monthly",
  },
];

const PROGRAMS_LIST = [
  {
    title: "A personalized yoga program",
    body: "Completely safe and focused on your key goals",
    imgSrc: planImg,
  },
  {
    title: "Easy & enjoyable yoga workouts for your level",
    body: "Program adjusts to your level and pace",
    imgSrc: exerciseImg,
  },
  {
    title: "No special preparation needed",
    body: "Perfect for begginners! Requires no special preparation or equipment",
    imgSrc: shoeImg,
  },
  {
    title: "Daily motivation & accountability",
    body: "Track your progress, develop a healthy routine, reach goals faster",
    imgSrc: dietImg,
  },
  {
    title: "Browse from various yoga challenges",
    body: "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
    imgSrc: whistleImg,
  },
  {
    title: "Easy access on any device",
    body: "Do your yoga anywhere across all types of devices",
    imgSrc: smartwatchImg,
  },
  {
    title: "A complete guide to get started",
    body: "Best tips, guidelines, advice, and recommendations for successful practice",
    imgSrc: bookcheckImg,
  },
];

const YogaProgramSection = () => {
  return (
    <div className="YogaProgramSection">
      <div className="YogaProgramSection__pricing-heading">
        <h3>
          Choose your plan and get{" "}
          <span className="text-primary">7 days free trial</span>
        </h3>
      </div>
      <div className="YogaProgramSection__pricing-table">
        <PricingTable data={PRICING_CARDS_DATA} />
      </div>
      <div className="YogaProgramSection__features-heading">
        <h3>What's in my program?</h3>
      </div>
      <IconList data={PROGRAMS_LIST} className="YogaProgramSection__features" />
    </div>
  );
};

export default YogaProgramSection;
