import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseRespect = () => {
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
    <div className="collapse-container">
      <div className="collapse">
        Respect
        <button className={`collapse__chevron ${chevronClass}`} onClick={toggleCollapse}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      {!isCollapsed && (
        <div ref={contentRef} className={`collapse-container__presentation ${isCollapsed ? '' : 'open'}`} >
          <p className="collapse-container__text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
      )}
    </div>
  );
};

export default CollapseRespect;