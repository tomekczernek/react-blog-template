import styled from 'styled-components';

const ArticleContainer = (className) => {
    return <div className={className}></div>;
};

const ArticleContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export {ArticleContainer};
export default ArticleContainerStyled;
