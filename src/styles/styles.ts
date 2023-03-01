import styled from 'styled-components'

export const BoardWrapper = styled.div`
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 410px;
  margin: 6rem auto 8.1rem auto;
  width: 329px;
`

export const HeaderWrappper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column
`

export const ImageWrapper = styled.div`
  img {
    width: 80%;
    margin-left: calc(329px * 0.1);
  } 
`

export const HeaderTextWrapper = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
`

export const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
`