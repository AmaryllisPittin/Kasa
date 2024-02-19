import DataTabs from "../data.json";
import { useParams } from "react-router-dom";
import React from "react";

const Tags = () => {
    const { id } = useParams();
    const specificObject = DataTabs.find(item => item.id === id);
    const tags = specificObject ? specificObject.tags : [];

    return (
        <div className="logement-tags-container">
            {tags.map((tag, index) => (
                <div key={index} className="logement-tag">{tag}</div>
            ))}
        </div>
    );
};

export default Tags;
