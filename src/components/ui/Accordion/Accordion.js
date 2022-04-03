import AccordionItem from "./AccordionItem";

const Accordion = ({ data = [] }) => {
  return (
    <div className="Accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          heading={item.heading}
          content={item.content}
          expand={index === 0}
        />
      ))}
    </div>
  );
};

export default Accordion;
