import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseEquipment = ({ equipments }) => {
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
    <div className="collapse-container special-collapse-logement">
      <input type="checkbox" id="collapseCheckboxEquipment" className={`collapse__checkbox ${chevronClass} visually-hidden`} onClick={toggleCollapse} />
      <label htmlFor="collapseCheckboxEquipment" className="collapse collapse-size-logement collapse-equipment">
        Equipement
        <FontAwesomeIcon icon={faChevronUp} className={`collapse__chevron ${chevronClass}`} />
      </label>
      <div
        ref={contentRef}
        className={`collapse-container__equipment ${isCollapsed ? '' : 'open'}`}
        style={{ height: isCollapsed ? '0' : `${contentRef.current.scrollHeight}px` }}
      >
          <p className="collapse-container__text">
          {equipments && equipments.map((equipment, index) => (
              <div key={index} className="equipment">{equipment}</div>
            ))}
          </p>
        </div>
    </div>
  );
};

export default CollapseEquipment;