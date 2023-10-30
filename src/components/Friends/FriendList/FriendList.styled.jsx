import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
  margin: 0 auto;
  margin-bottom: $${p => p.theme.spacing(2)};
`;

