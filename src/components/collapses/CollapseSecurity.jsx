import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseSecurity = () => {
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
      <input type="checkbox" id="collapseCheckboxSecurity" className={`collapse__checkbox ${chevronClass} visually-hidden`} onClick={toggleCollapse} />
      <label htmlFor="collapseCheckboxSecurity" className="collapse">
        Sécurité
        <FontAwesomeIcon icon={faChevronUp} className={`collapse__chevron ${chevronClass}`} />
      </label>
      <div
        ref={contentRef}
        className={`collapse-container__presentation ${isCollapsed ? '' : 'open'}`}
        style={{ height: isCollapsed ? '0' : `${contentRef.current.scrollHeight}px` }}
      >
        <p className="collapse-container__text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </div>
    </div>
  );
};

export default CollapseSecurity;
