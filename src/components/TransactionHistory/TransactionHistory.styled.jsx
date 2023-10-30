import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(2)};
  max-width: 100%;
  width: 400px;
  border-radius: ${p => p.theme.radii.md};
`;

export const TableHead = styled.thead`
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.white};
  font-size: 16px;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  :hover {
   background-color: rgb(234, 244, 165);
   color: ${p => p.theme.colors.accent};}
`;

export const TableHeader = styled.th`
  padding: 0.5rem 0;
  padding-left: ${p => p.theme.spacing(2)};
  text-align: center;

  :first-child {
    border-top-left-radius: ${p => p.theme.radii.md};
  }

  :last-child {
    border-top-right-radius: ${p => p.theme.radii.md};
`;

export const TableBody = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const CustomTableRow = styled(TableRow)`
   background-color: ${p =>
    p.index % 2 === 0 ? p.theme.colors.secondary : 'transparent'};
`;

export const TableData = styled.td`
  border-right: 0.125rem solid #e9edff;
  text-align: center;

  :hover {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.secondary};
    font-weight: 700;
`;

export const CapitalizeTableData = styled(TableData)`
  text-transform: capitalize;
`;