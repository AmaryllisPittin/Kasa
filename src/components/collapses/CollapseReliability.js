import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseReliability = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <button className="collapse-container__button" onClick={toggleCollapse}>
        Fiabilité
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      {!isCollapsed && (
        <div className="collapse-container__presentation">
          {/* Contenu à afficher lorsque l'élément n'est pas replié */}
          <p className="collapse-container__text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
      )}
    </div>
  );
};

export default CollapseReliability;