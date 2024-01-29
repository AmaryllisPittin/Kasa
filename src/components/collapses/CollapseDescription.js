import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseDescription = () => {
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
        Description
        <button className={`collapse__chevron ${chevronClass}`} onClick={toggleCollapse}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      {!isCollapsed && (
        <div ref={contentRef} className={`collapse-container__presentation ${isCollapsed ? '' : 'open'}`} >
          {/* Contenu à afficher lorsque l'élément n'est pas replié */}
          <p className="collapse-container__text"></p>
        </div>
      )}
    </div>
  );
};

export default CollapseDescription;