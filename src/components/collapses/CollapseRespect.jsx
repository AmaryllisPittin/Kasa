import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseRespect = () => {
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
    <div className="collapse-container">
      <input type="checkbox" id="collapseCheckboxRespect" className={`collapse__checkbox ${chevronClass} visually-hidden`} onClick={toggleCollapse} />
      <label htmlFor="collapseCheckboxRespect" className="collapse">
        Respect
        <FontAwesomeIcon icon={faChevronUp} className={`collapse__chevron ${chevronClass}`} />
      </label>
      <div
        ref={contentRef}
        className={`collapse-container__presentation ${isCollapsed ? '' : 'open'}`}
        style={{ height: isCollapsed ? '0' : `${contentRef.current.scrollHeight}px` }}
      >
        <p className="collapse-container__text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </div>
    </div>
  );
};

export default CollapseRespect;