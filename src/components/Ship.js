import React from "react";
import { css } from "emotion";

function Ship({ ship }) {
  const shipStyle = css`
    margin: 40px auto;
    width: 49%;
    background-color: #cbe0ff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    overflow: hidden;
    padding: 40px;
  `;

  const shipName = css`
    margin: 10px;
  `;
  const shipClass = css`
    margin: 10px;
  `;
  const shipImg = css`
    margin: 10px;
  `;

  return (
    <div className={shipStyle}>
      <div className={shipName}>
        <h2 align="center">{ship.name}</h2>
      </div>
      <div className={shipClass} align="center">
        <span>{ship.class}</span>
      </div>
      <div className={shipImg} align="center">
        <img src={ship.image} alt={ship.name} width="50%"></img>
      </div>
    </div>
  );
}

export default Ship;
