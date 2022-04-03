import { ReactComponent as DiscountIcon } from "../../assets/ui-icons/icon-discount.svg";
import Countdown from "../ui/Countdown/Countdown";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner__icon">
        <DiscountIcon />
      </div>
      <div className="Banner__content">
        <div>50% discount only valid for</div>
        <div className="Banner__timer">
          <Countdown minutes="15" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
