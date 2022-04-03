import { useState, useEffect } from "react";
import { ReactComponent as ChevronUp } from "../../../assets/ui-icons/chevron-up.svg";
import { ReactComponent as ChevronDown } from "../../../assets/ui-icons/chevron-down.svg";

const AccordionItem = ({ id, heading, content, expand }) => {
  const [isCollapsed, setIsCollapsed] = useState(!expand);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const itemContent = document.querySelector(
      `.Accordion__item--${id} .Accordion__item-content`
    );

    if (itemContent) {
      if (isCollapsed) {
        itemContent.style.height = 0;
        itemContent.style.paddingBottom = 0;
      } else {
        itemContent.style.height = itemContent.scrollHeight + "px";
        itemContent.style.paddingBottom = "1.6rem";
      }
    }
  }, [id, isCollapsed]);

  return (
    <div className={`Accordion__item Accordion__item--${id}`}>
      <button className="Accordion__item-header" onClick={handleToggleCollapse}>
        <h5>{heading}</h5>
        <div className="Accordion__chevron">
          {isCollapsed ? <ChevronDown /> : <ChevronUp />}
        </div>
      </button>
      <div className="Accordion__item-content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default AccordionItem;
