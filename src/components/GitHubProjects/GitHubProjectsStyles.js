import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.minxl} {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media ${props => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  width: 90%;
  margin: auto;
  background: #212D45;
  border-radius: 12px;
  height: 100%;
  padding: 24px;
  /* box-shadow: 3px 3px 10px rgb(0 0 0 / 35%); */

  &:nth-child(3) {
    img {
      object-position: 0 -54px;
    }
  }

  @media ${props => props.theme.breakpoints.minxl} {
    width: 100%;
  }  

  @media ${props => props.theme.breakpoints.md} {
    padding: 16px;
    
    display: flex;
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 12px;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 8px;
  height: 130px;
  object-fit: cover;
  object-position: top;
`;

export const BoxTitle = styled.p`
  margin: 2rem 0;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.minxl} {
    font-size: 24px;
    font-weight: 600;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 14px;
  }
`;

export const BoxTxt = styled.p`
  margin-top: 2em;
  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.minxl} {
    font-size: 14px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
    margin-top: 1rem;
    height: 160px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 13px;
    line-height: 14px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1em 0;
  margin-top: 1em;
  gap: 12px;

  @media ${props => props.theme.breakpoints.md} {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.4rem;
  text-align: center;
  width: 90px;
  background: #945dd6;
  border-radius: 8px;
  padding: 0.4rem 0.5rem;

  @media ${props => props.theme.breakpoints.minxl} {
    font-size: 1.1rem;
    width: 75px;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 78px;
    font-size: 1.2rem;
    padding: 0.4rem 0.6rem;
  }
`;

export const BoxLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2em;

  @media ${props => props.theme.breakpoints.md} {
    margin-top: auto;
  }
`;

export const BoxLink = styled.a`
  color: white;
  font-size: 1em;
  padding: .8rem 1.5em;
  background: #945DD6;
  border-radius: 25px;
  transition: 0.5s;
  font-weight: 500;
  &:hover{
    background: #13ADC7;
  }
`;



export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`;