import styled from 'styled-components';

function Loading({className, message}){
    return(
        <div className={className}>
            <LoadingMessage>{message}</LoadingMessage>
        </div>
    );
}

const LoadingStyled = styled(Loading)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 990;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
`;

const LoadingMessage = styled.p`
    color: white;
    font-weight: bold;
    position: absolute;
`;

export {Loading};
export default LoadingStyled;