import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CollapseSecurity = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <button className="collapse-container__button" onClick={toggleCollapse}>
        Sécurité
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      {!isCollapsed && (
        <div className="collapse-container__presentation">
          {/* Contenu à afficher lorsque l'élément n'est pas replié */}
          <p className="collapse-container__text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
      )}
    </div>
  );
};

export default CollapseSecurity;