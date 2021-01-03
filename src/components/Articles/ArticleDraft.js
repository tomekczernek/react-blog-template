import styled from "styled-components";

function ArticleDraft({ className, id, title, shortText, createDate, avatar }) {
  return (
    <div className={className}>
      <img src={avatar} alt="Test"/>
      <TitleStyled>{title}</TitleStyled>
      <ShortTextStyled>{shortText}</ShortTextStyled>
      <CreateDateStyled>{createDate}</CreateDateStyled>
    </div>
  );
}

const ArticleDraftStyled = styled(ArticleDraft)`
  text-align: center;
  width: 260px;
  margin: 10px;
  padding: 10px;
  border: 1px solid grey;
  color: black; 
  &:hover{
    border-color: red;
  }
`;

const TitleStyled = styled.h2`
  color: red;
`;

const ShortTextStyled = styled.p`
  font-weight: bold;
`;

const CreateDateStyled = styled.p`
  color: green;
`;

export { ArticleDraft };
export default ArticleDraftStyled;
