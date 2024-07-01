import styled, { css } from 'styled-components';
import { ContentTypeE } from '@module/types/content';

const InputFormLayout = styled.div`
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  max-width: ${props => props.theme.maxDeviceWidth};
  min-width: ${props => props.theme.minDeviceWidth};
  height: 100vh;
  max-height: calc(100vh - 20px);
  margin-top: 10px;
  padding: 30px 15px 100px;
  background-color: ${props => props.theme.colors.white};
`;

const InfoTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
  line-height: 38px;
  text-align: center;
`;

const InfoLogo = styled.div<{ type?: ContentTypeE }>`
  overflow: hidden;
  width: 190px;
  height: 43px;
  margin: 25px auto 0;
  background: url(${props =>
      `${props.theme.imageUrl}/common/title_saju_logo.webp`})
    no-repeat center center;
  background-size: cover;
  text-indent: -9999px;

  ${props =>
    props &&
    props.type === ContentTypeE.Tarot &&
    css`
      background-image: url('${props.theme
        .imageUrl}/common/title_tarot_logo.webp');
    `}
`;

const InfoContentName = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  line-height: 42px;
  color: ${props => props.theme.colors.black};
  text-align: center;
`;

const InfoContentPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 12px;
  border-radius: 6px;
  background-color: #f8f8f8;
  font-size: 26px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

const DiscountPriceWrap = styled.div`
  border-radius: 6px;
  background-color: #f8f8f8;
  padding: 12px 0px;
`;

const InfoContentOldPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 9px;
  font-size: 30px;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  line-height: 27px;
  text-decoration: line-through;
`;

const InfoContentDiscountPriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: 9px;
`;

const InfoContentDiscountPrice = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  line-height: 46px;
  padding: 0px 15px;
`;

const InfoContentDiscountPercent = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  line-height: 46px;
  background-color: #e01f27;
  padding: 0px 12px;
`;

const InfoDescription = styled.p`
  margin-top: 12px;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  line-height: 22px;
  text-align: center;
`;

const FormDescription = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  line-height: 19px;
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 10px;
  right: -5px;
  overflow: hidden;
  width: 32px;
  height: 32px;
  margin: 0 16px 15px auto;
  border: none;
  background: url(${props => `${props.theme.imageUrl}/common/close.svg`})
    no-repeat center center;
  background-size: 16px;
  appearance: none;
  cursor: pointer;
  text-indent: -9999px;
`;

export {
  InputFormLayout,
  InfoTitle,
  InfoLogo,
  InfoContentName,
  InfoContentPrice,
  InfoDescription,
  FormDescription,
  CloseButton,
  DiscountPriceWrap,
  InfoContentOldPrice,
  InfoContentDiscountPriceWrap,
  InfoContentDiscountPrice,
  InfoContentDiscountPercent,
};
