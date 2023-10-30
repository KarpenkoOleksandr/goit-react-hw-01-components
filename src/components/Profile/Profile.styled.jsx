import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(4)};
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 100%;
  width: 400px;
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.background};
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(2)};
  border-radius: ${p => p.theme.radii.md};
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  border: 1px solid ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};
`;

export const InfoText = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: 16px;
`;

export const Name = styled(InfoText)`
  color: ${p => p.theme.colors.white};
  font-size: 16px;
  font-weight: 700;
`;

export const Tag = styled(InfoText)`
color: ${p => p.theme.colors.primary};
`;

export const Location = styled(InfoText)`
color: ${p => p.theme.colors.secondary};
`;

export const StatsList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.spacing(2)}px;
  width: 100%;
`;

export const StatsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: ${p => p.theme.colors.primary};
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
font-weight: 500;
`;

export const Quantity = styled(StatsInfo)`
  color: ${p => p.theme.colors.secondary};
  font-weight: 700;
`;

