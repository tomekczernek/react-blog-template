import styled from "styled-components";

import image from "../../images/avatars/1.jpg";

function ArticleDraft({ className, id, title, shortText, createDate, avatar }) {
  return (
    <div className={className}>
      <ImageStyled src={image} alt={`Zdjęcie: ${title}`}/>
      <ContainerStyled>
        <TitleStyled>{title}</TitleStyled>
        <ShortTextStyled>{shortText}</ShortTextStyled>
      </ContainerStyled>
    </div>
  );
}

const ArticleDraftStyled = styled(ArticleDraft)`
  background-color: white;
  text-align: center;
  max-width: 330px;
  margin: 10px;
  padding: 0;
  border: 1px solid #a5b1c2;
  color: black;
  transition: 0.3s;
  &:hover {
    -webkit-box-shadow: 0px 5px 12px 0px rgba(165, 177, 194,1.0);
    -moz-box-shadow: 0px 5px 12px 0px rgba(165, 177, 194,1.0);
    box-shadow: 0px 5px 12px 0px rgba(165, 177, 194,1.0);
  }
`;

const ContainerStyled = styled.div`
  padding: 10px;
`;

const ImageStyled = styled.img`
  width: 100%;
  max-height: 250px;
`;

const TitleStyled = styled.h2`
  color: #eb3b5a;
`;

const ShortTextStyled = styled.p`
  font-weight: bold;
`;

export { ArticleDraft };
export default ArticleDraftStyled;
