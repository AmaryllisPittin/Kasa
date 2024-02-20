import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseDescription = ({ description }) => {
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
      <input type="checkbox" id="collapseCheckboxSecurity" className={`collapse__checkbox ${chevronClass} visually-hidden`} onClick={toggleCollapse} />
      <label htmlFor="collapseCheckboxSecurity" className="collapse collapse-size-logement collapse-description">
        Description
        <FontAwesomeIcon icon={faChevronUp} className={`collapse__chevron ${chevronClass}`} />
      </label>
      <div
        ref={contentRef}
        className={`collapse-container__description ${isCollapsed ? '' : 'open'}`}
        style={{ height: isCollapsed ? '0' : `${contentRef.current.scrollHeight}px` }}
      >
        <p className="collapse-container__text">{description}</p>
      </div>
      </div>
      )}

export default CollapseDescription;

