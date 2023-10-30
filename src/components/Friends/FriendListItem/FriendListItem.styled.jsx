import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${p => p.theme.spacing(8)};
  margin: 0 auto;
  padding: ${p => p.theme.spacing(2)};
  max-width: 100%;
  width: 400px;
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.background};
`;

export const Status = styled.span`
  display: block;
  margin-left: 25px;
  width: 18px;
  height: 18px;
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: ${p => p.theme.radii.sl};
  border: 1px solid ${p => p.theme.colors.white};
`;

export const Name = styled.p`
  margin-left: 10px;
  color: ${p => p.theme.colors.white};
  font-size: 24px;
  font-weight: 700;
`;