import styled from 'styled-components';

const getRandomHexColor = index =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spacing(2)};
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(2)};
  max-width: 100%;
  width: 400px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.md};
  border: 1px solid ${p => p.theme.colors.black};
`;

export const Title = styled.h2`
  padding: ${p => p.theme.spacing(4)};
  border-bottom: 1px solid #d3d5e3;
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  font-size:  24px;
  text-transform: capitalize;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: ${p => p.theme.spacing(4)};
  width: 100%;
  height: 100%;
  background-color: ${props => getRandomHexColor(props.index)};
  border-radius: ${p => p.theme.radii.sl};
  border: none;
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${p => p.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${p => p.theme.colors.white};
`;