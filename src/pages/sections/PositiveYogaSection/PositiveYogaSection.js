import IconList from "../../../components/ui/IconList/IconList";
import checkBoxImg from "../../../assets/checkbox-green.png";
import appPhoneMockupSrc from "../../../assets/app-phone-mockup.png";

const PositiveYogaSection = () => {
  const POSITIVE_YOGA_FEATURES = [
    {
      body: "Each program adapts to your age or fitness level",
      imgSrc: checkBoxImg,
    },
    {
      body: "Mindful way to exercise and get real results",
      imgSrc: checkBoxImg,
    },
    {
      body: "Effective and long-term lasting results",
      imgSrc: checkBoxImg,
    },
    {
      body: "Suited activities that benefit both the mind and body",
      imgSrc: checkBoxImg,
    },
    {
      body: "Low-intensity but highly-effective workouts",
      imgSrc: checkBoxImg,
    },
    {
      body: "Extra attention to muscle, joint and back health",
      imgSrc: checkBoxImg,
    },
  ];

  return (
    <div className="PositiveYogaSection">
      <div className="PositiveYogaSection__right max-content-width">
        <h3>Is Positive Yoga right for me?</h3>
        <div className="PositiveYogaSection__list">
          <IconList data={POSITIVE_YOGA_FEATURES} />
        </div>
      </div>
      <div className="PositiveYogaSection__left">
        <h3 className="max-content-width">Start your yoga journey now!</h3>
        <div className="PositiveYogaSection__image">
          <div className="max-content-width">
            <img src={appPhoneMockupSrc} alt="App" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositiveYogaSection;
