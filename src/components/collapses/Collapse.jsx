import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, text, id, equipments, isEquipement }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const chevronClass = isCollapsed ? '' : 'rotated';
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (contentRef.current) {
      contentRef.current.style.height = isCollapsed ? `${contentRef.current.scrollHeight}px` : '0';
    }
  };

  return (
    <div>
      <input type="checkbox" id={id} className={`collapse__checkbox ${chevronClass} visually-hidden`} />
      <label htmlFor={id} className="collapse collapse-about">
        {title}
        <FontAwesomeIcon icon={faChevronUp} className={`collapse__chevron ${chevronClass}`} onClick={toggleCollapse} />
      </label>
      <div ref={contentRef} className={`collapse-container__presentation ${isCollapsed ? '' : 'open'}`} style={{ height: isCollapsed ? '0' : `${contentRef.current.scrollHeight}px` }} >
        {isEquipement 
        ? 
        <p className="collapse-container__text">
          {equipments && equipments.map((equipment, index) => (
              <div key={index} className="equipment">{equipment}</div>
            ))}
        </p> 
        : 
        <p className="collapse-container__text">{text}</p> 
        }

      </div>
    </div>
  );
};

export default Collapse;