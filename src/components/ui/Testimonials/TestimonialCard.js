import { ReactComponent as Star } from "../../../assets/ui-icons/star.svg";

const TestimonialCard = ({
  author,
  authorDetails,
  rating = 5,
  imgSrc,
  testimonial,
}) => {
  const maxRating = 5;

  let rated = parseInt(rating);
  if (rated > maxRating) rated = maxRating;
  if (rated < 0) rated = 0;

  let unrated = maxRating - rated;

  return (
    <div className="TestimonialCard">
      <div className="TestimonialCard__author">{author}</div>
      <div className="TestimonialCard__author-details">{authorDetails}</div>
      <div className="TestimonialCard__ratings">
        {[...Array(rated)].map((item, index) => (
          <Star key={index} className="TestimonialCard__rated" />
        ))}
        {[...Array(unrated)].map((item, index) => (
          <Star key={index} />
        ))}
      </div>
      <img className="TestimonialCard__image" src={imgSrc} alt={author} />
      <p className="TestimonialCard__testimonial">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
