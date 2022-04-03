import { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import Layout from "../components/layouts/Layout";
import Accordion from "../components/ui/Accordion/Accordion";
import SectionHeading from "../components/ui/SectionHeading/SectionHeading";
import FaqSection from "./sections/FaqSection/FaqSection";
import PositiveYogaSection from "./sections/PositiveYogaSection/PositiveYogaSection";
import SuccessStoriesSection from "./sections/SuccessStoriesSection/SuccessStoriesSection";
import YogaProgramSection from "./sections/YogaProgramSection/YogaProgramSection";

const CheckoutPage = () => {
  return (
    <Fragment>
      <Banner />
      <Layout>
        <section id="yoga-programs" className="max-content-width max-width-730">
          <SectionHeading type="subheading">
            Over <strong>52 147</strong> plans ordered.
          </SectionHeading>
          <SectionHeading type="h1">
            Get access to your yoga program now!
          </SectionHeading>
          <YogaProgramSection />
        </section>
        <section id="success-stories" className="max-content-width mt-40">
          <SectionHeading type="h3">
            Hear success stories from our clients
          </SectionHeading>
          <SuccessStoriesSection />
        </section>
        <section id="positive-yoga" className="max-width-730 mt-40">
          <PositiveYogaSection />
        </section>
        <section id="faq" className="max-content-width max-width-730 mt-40">
          <SectionHeading type="h3">Frequently Asked Questions</SectionHeading>
          <FaqSection />
          <Accordion />
        </section>
        <section
          id="start-your-yoga-program"
          className="max-content-width max-width-730 mt-40"
        >
          <SectionHeading type="h2">
            Start your yoga program today!
          </SectionHeading>
          <YogaProgramSection />
        </section>
      </Layout>
    </Fragment>
  );
};

export default CheckoutPage;
