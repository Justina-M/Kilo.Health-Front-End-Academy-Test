import { Fragment } from "react";

const SectionHeading = ({ type = "h1", children }) => {
  let heading;

  if (type === "h1")
    heading = <h1 className="SectionHeading__h1">{children}</h1>;
  if (type === "h2")
    heading = <h2 className="SectionHeading__h2">{children}</h2>;
  if (type === "h3")
    heading = <h3 className="SectionHeading__h3">{children}</h3>;
  if (type === "h4")
    heading = <h4 className="SectionHeading__h4">{children}</h4>;
  if (type === "h5")
    heading = <h5 className="SectionHeading__h5">{children}</h5>;
  if (type === "h6")
    heading = <h6 className="SectionHeading__h6">{children}</h6>;
  if (type === "subheading")
    heading = <h6 className="SectionHeading__subheading">{children}</h6>;

  return <Fragment>{heading}</Fragment>;
};

export default SectionHeading;
