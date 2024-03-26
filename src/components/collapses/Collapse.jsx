import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, text, id, equipments, isEquipement, isAbout = false }) => { // isAbout = false indique une valeur par défaut
  const [isCollapsed, setIsCollapsed] = useState(true);
  const chevronClass = isCollapsed ? '' : 'rotated';
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (contentRef.current) {
      contentRef.current.style.height = isCollapsed ? `${contentRef.current.scrollHeight}px` : '0';
    }
  };

  const containerClass = isAbout ? 'collapse-container-about' : 'collapse-container';

  return (
    <div className={containerClass} onClick={toggleCollapse}>
  <input type="checkbox" id={id} className={`collapse__checkbox ${chevronClass} visually-hidden`} />
  <label htmlFor={id} className="collapse collapse-label">
    {title}
    <FontAwesomeIcon icon={faChevronUp} className={`collapse__chevron ${chevronClass}`} />
  </label>
  <div className="collapse-container__dimensions" onClick={(e) => e.stopPropagation()}>
    <div ref={contentRef} className={`collapse-container__presentation ${isCollapsed ? '' : 'open'}`} style={{ height: isCollapsed ? '0' : `${contentRef.current.scrollHeight}px` }}>
      {isEquipement ? (
        <div className="collapse-container__text">
          {equipments &&
            equipments.map((equipment, index) => (
              <div key={index} className="equipment">
                {equipment}
              </div>
            ))}
        </div>
      ) : (
        <p className="collapse-container__text">{text}</p>
      )}
    </div>
  </div>
</div>

  );
};

export default Collapse;
