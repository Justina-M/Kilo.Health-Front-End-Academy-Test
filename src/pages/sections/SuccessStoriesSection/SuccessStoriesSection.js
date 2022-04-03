import Testimonials from "../../../components/ui/Testimonials/Testimonials";
import Button from "../../../components/ui/Button/Button";
import emilyImg from "../../../assets/testimonials/emily.png";
import kylieImg from "../../../assets/testimonials/kylie.png";
import jesicaImg from "../../../assets/testimonials/jesica.png";

const TESTIMONIALS = [
  {
    author: "Emily, 28",
    authorDetails: "Delaware, NJ",
    rating: 5,
    imgSrc: emilyImg,
    testimonial:
      "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
  },
  {
    author: "Kylie, 40",
    authorDetails: "Los Angeles",
    rating: 5,
    imgSrc: kylieImg,
    testimonial:
      "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
  },
  {
    author: "Jesica, 51",
    authorDetails: "San Francisco, CA",
    rating: 4,
    imgSrc: jesicaImg,
    testimonial:
      "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
  },
];

const SuccessStoriesSection = () => {
  return (
    <div className="SuccessStoriesSection">
      <Testimonials data={TESTIMONIALS} />
      <div className="SuccessStoriesSection__cta">
        <Button>Get my plan</Button>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
