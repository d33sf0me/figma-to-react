import React from "react";
import { GroupWrapper } from "../../../../../../../../components/GroupWrapper/GroupWrapper";
import styled from "styled-components";

const StyledOverlap = styled.div`
  height: 331px;
  left: 20px;
  position: absolute;
  top: 20px;
  width: 769px;

  & .group-10 {
    height: 331px;
    left: 0;
    position: absolute;
    top: 0;
    width: 769px;

    & .overlap-group-5 {
      height: 331px;
      position: relative;
      width: 759px;

      & .neon-constellation-wrapper {
        background-color: var(--black);
        border: 1px solid;
        border-color: var(--grey);
        border-radius: 10px;
        height: 301px;
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 759px;

        & .neon-constellation {
          height: 41px;
          left: -1px;
          object-fit: cover;
          position: absolute;
          top: 6px;
          width: 81px;
        }
      }

      & .text-wrapper-21 {
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent;
        background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
        background-clip: text;
        color: transparent;
        font-family: "Roboto", Helvetica;
        font-size: 26px;
        font-weight: 600;
        left: 30px;
        letter-spacing: 0;
        line-height: 33.8px;
        position: absolute;
        text-fill-color: transparent;
        top: 30px;
        width: 530px;
      }

      & .text-wrapper-22 {
        color: var(--grey);
        font-family: var(--text-font-family);
        font-size: var(--text-font-size);
        font-style: var(--text-font-style);
        font-weight: var(--text-font-weight);
        left: 50px;
        letter-spacing: var(--text-letter-spacing);
        line-height: var(--text-line-height);
        position: absolute;
        top: 141px;
        width: 680px;
      }

      & .text-wrapper-23 {
        color: var(--grey);
        font-family: var(--text-font-family);
        font-size: var(--text-font-size);
        font-style: var(--text-font-style);
        font-weight: var(--text-font-weight);
        left: 50px;
        letter-spacing: var(--text-letter-spacing);
        line-height: var(--text-line-height);
        position: absolute;
        top: 164px;
        width: 680px;
      }

      & .text-wrapper-24 {
        color: var(--grey);
        font-family: var(--text-font-family);
        font-size: var(--text-font-size);
        font-style: var(--text-font-style);
        font-weight: var(--text-font-weight);
        left: 50px;
        letter-spacing: var(--text-letter-spacing);
        line-height: var(--text-line-height);
        position: absolute;
        top: 118px;
        width: 680px;
      }

      & .text-wrapper-25 {
        color: var(--grey);
        font-family: var(--text-font-family);
        font-size: var(--text-font-size);
        font-style: var(--text-font-style);
        font-weight: var(--text-font-weight);
        left: 30px;
        letter-spacing: var(--text-letter-spacing);
        line-height: var(--text-line-height);
        position: absolute;
        top: 207px;
        width: 570px;
      }

      & .ellipse-2 {
        background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
        border-radius: 3.5px;
        height: 7px;
        left: 30px;
        position: absolute;
        top: 126px;
        width: 7px;
      }

      & .ellipse-3 {
        background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
        border-radius: 3.5px;
        height: 7px;
        left: 30px;
        position: absolute;
        top: 149px;
        width: 7px;
      }

      & .ellipse-4 {
        background: linear-gradient(180deg, rgb(170.01, 99.91, 193.37) 0%, rgb(5, 216, 232) 100%);
        border-radius: 3.5px;
        height: 7px;
        left: 30px;
        position: absolute;
        top: 172px;
        width: 7px;
      }

      & .vector-2 {
        height: 5px;
        left: 29px;
        position: absolute;
        top: 60px;
        width: 144px;
      }

      & .group-11 {
        height: 71px;
        left: 0;
        position: absolute;
        top: 260px;
        width: 759px;

        & .overlap-group-6 {
          height: 71px;
          position: relative;

          & .frame-13 {
            background-color: var(--black);
            border: 1px solid;
            border-color: var(--grey);
            border-radius: 10px;
            height: 71px;
            left: 379px;
            overflow: hidden;
            position: absolute;
            top: 0;
            width: 380px;

            & .text-wrapper-26 {
              color: var(--white);
              font-family: "Roboto", Helvetica;
              font-size: 16px;
              font-weight: 400;
              height: 21px;
              left: 0;
              letter-spacing: 0;
              line-height: 20.8px;
              position: absolute;
              text-align: center;
              top: 24px;
              width: 401px;
            }
          }

          & .frame-14 {
            background-color: var(--black);
            border: 1px solid;
            border-color: var(--grey);
            border-radius: 10px;
            height: 71px;
            left: 0;
            overflow: hidden;
            position: absolute;
            top: 0;
            width: 380px;

            & .text-wrapper-27 {
              color: var(--white);
              font-family: "Roboto", Helvetica;
              font-size: 16px;
              font-weight: 400;
              height: 21px;
              left: 0;
              letter-spacing: 0;
              line-height: 20.8px;
              position: absolute;
              text-align: center;
              top: 24px;
              width: 360px;
            }
          }
        }
      }
    }
  }

  & .group-70 {
    background-color: var(--violet) !important;
    left: 577px !important;
    position: absolute !important;
    top: 200px !important;
  }
`;

export const Overlap = () => {
  return (
    <StyledOverlap>
      <div className="group-10">
        <div className="overlap-group-5">
          <div className="neon-constellation-wrapper">
            <img className="neon-constellation" alt="Neon constellation" src="/img/neon-constellation-2-1.png" />
          </div>
          <div className="text-wrapper-21">ДОКРУТКА (ОПТИМИЗАЦИЯ) МОНЕТИЗАЦИИ САЙТА</div>
          <p className="text-wrapper-22">Произведем подборых лучших рекламных сетей под ваш сайт;</p>
          <p className="text-wrapper-23">Поможем с правильным размещением и выводом рекламных блоков.</p>
          <div className="text-wrapper-24">Разработаем стратегию монетизации сайта;</div>
          <p className="text-wrapper-25">Цена за услугу формируется на основе дельты от дохода x1 - x3.</p>
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <img className="vector-2" alt="Vector" src="/img/vector-5-1.svg" />
          <div className="group-11">
            <div className="overlap-group-6">
              <div className="frame-13">
                <div className="text-wrapper-26">ЗАКАЗАТЬ УСЛУГУ</div>
              </div>
              <div className="frame-14">
                <div className="text-wrapper-27">ЧИТАТЬ ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GroupWrapper className="group-70" />
    </StyledOverlap>
  );
};