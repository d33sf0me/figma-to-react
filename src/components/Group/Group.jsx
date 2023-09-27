import React from "react";
import styled from "styled-components";

const StyledGroup = styled.div`
  height: 480px;
  width: 320px;

  & .frame-6 {
    border: 1px solid;
    border-color: var(--grey);
    border-radius: 10px;
    height: 480px;
    overflow: hidden;
  }

  & .overlap-2 {
    height: 431px;
    left: -30px;
    position: relative;
    top: 19px;
    width: 380px;
  }

  & .overlap-group-3 {
    height: 431px;
    left: 0;
    position: absolute;
    top: 0;
    width: 380px;
  }

  & .text-wrapper-12 {
    color: var(--grey);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    left: 50px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 0;
    width: 290px;
  }

  & .rectangle-5 {
    background-color: var(--black);
    filter: blur(50px);
    height: 60px;
    left: 0;
    position: absolute;
    top: 315px;
    width: 380px;
  }

  & .ellipse {
    height: 60px;
    left: 50px;
    position: absolute;
    top: 371px;
    width: 60px;
  }

  & .text-wrapper-13 {
    color: var(--white);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    left: 130px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 375px;
    white-space: nowrap;
  }

  & .text-wrapper-14 {
    color: var(--violet);
    font-family: var(--text-font-family);
    font-size: var(--text-font-size);
    font-style: var(--text-font-style);
    font-weight: var(--text-font-weight);
    left: 130px;
    letter-spacing: var(--text-letter-spacing);
    line-height: var(--text-line-height);
    position: absolute;
    top: 404px;
    white-space: nowrap;
  }
`;

export const Group = ({ className }) => {
  return (
    <StyledGroup className={`group ${className}`}>
      <div className="frame-6">
        <div className="overlap-2">
          <div className="overlap-group-3">
            <p className="text-wrapper-12">
              Команда &#39;Название компании&#39; - это настоящие профессионалы, которые знают, как привлечь и удержать
              внимание. Их способность мыслить за пределами стандартных рамок приносит удивительные результаты. Они
              создают эмоциональные истории, способные запоминаться надолго.
              <br />
              Кроме того, они сильно привлекает внимание своим подходом к клиентам. Их коммуникация прозрачная...
            </p>
            <div className="rectangle-5" />
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-29-4.png" />
          </div>
          <div className="text-wrapper-13">Иван Иванов</div>
          <div className="text-wrapper-14">@ivan_ivanov</div>
        </div>
      </div>
    </StyledGroup>
  );
};
