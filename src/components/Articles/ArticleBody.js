import { Link } from "react-router-dom";
import styled from "styled-components";

function ArticleBody({ className, id, title, shortText, text, createDate }) {
  return (
    <div className={className}>
      <TitleStyled>{title}</TitleStyled>
      <CreateDateStyled>{createDate}</CreateDateStyled>
      <ShortTextStyled>{shortText}</ShortTextStyled>
      <TextStyled>{text}</TextStyled>
      <LinkBtnBack className="link-btn-back" to="/blog">
        Powrót
      </LinkBtnBack>
    </div>
  );
}

const ArticleBodyStyled = styled(ArticleBody)``;

const TitleStyled = styled.h1`
  margin: 0;
  color: #eb3b5a;
  padding: 15px 0;
`;

const CreateDateStyled = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #fc5c65;
  padding: 10px 0;
`;

const ShortTextStyled = styled.p`
  margin: 0;
  font-weight: bold;
  padding: 15px 0;
`;

const TextStyled = styled.p`
  margin: 0;
  padding: 15px 0 50px 0;
`;

const LinkBtnBack = styled(Link)`
  color: white;
  font-weight: bold;
  padding: 8px 12px;
  background-color: #fc5c65;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: #eb3b5a;
  }
`;

export { ArticleBody };
export default ArticleBodyStyled;
