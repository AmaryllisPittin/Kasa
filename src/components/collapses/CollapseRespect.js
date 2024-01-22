import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseRespect = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <button className="collapse-container__button" onClick={toggleCollapse}>
        Respect
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      {!isCollapsed && (
        <div className="collapse-container__presentation">
          {/* Contenu à afficher lorsque l'élément n'est pas replié */}
          <p className="collapse-container__text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
      )}
    </div>
  );
};

export default CollapseRespect;