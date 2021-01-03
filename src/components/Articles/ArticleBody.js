import styled from "styled-components";

function ArticleBody({ className, id, title, shortText, text, createDate }) {
  return (
    <div className={className}>
      <TitleStyled>{title}</TitleStyled>
      <CreateDateStyled>{createDate}</CreateDateStyled>
      <ShortTextStyled>{shortText}</ShortTextStyled>
      <TextStyled>{text}</TextStyled>
    </div>
  );
}

const ArticleBodyStyled = styled(ArticleBody)``;

const TitleStyled = styled.h1`
  color: #eb3b5a;
  padding: 15px 0;
`;

const CreateDateStyled = styled.p`
  font-size: 0.9rem;
  color: #fc5c65;
  padding: 5px 0;
`;

const ShortTextStyled = styled.p`
  font-weight: bold;
  padding: 10px 0;
`;

const TextStyled = styled.p`
  padding: 10px 0;
`;

export { ArticleBody };
export default ArticleBodyStyled;
