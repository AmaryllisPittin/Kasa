import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseEquipment = ({ equipments }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const chevronClass = isCollapsed ? '' : 'rotated';
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isCollapsed ? '0' : `${contentRef.current.scrollHeight}px`;
    }
  }, [isCollapsed]);

  return (
    <div className="collapse-container special-collapse-logement">
      <div className="collapse collapse-size-logement collapse-equipment">
        Equipements
        <button className={`collapse__chevron ${chevronClass}`} onClick={toggleCollapse}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      {!isCollapsed && (
        <div ref={contentRef} className={`collapse-container__presentation-logement collapse-equipment ${isCollapsed ? '' : 'open'}`} >
          <p className="collapse-container__text">
          {equipments && equipments.map((equipment, index) => (
              <div key={index} className="equipment">{equipment}</div>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default CollapseEquipment;