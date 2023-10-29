import { Table, TableHead, TableRow, TableHeader, TableBody, CustomTableRow, TableData, CapitalizeTableData } from "./TransactionHistory.styled";


export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((item, index) => {
                    return (
                        <TableRowData
                            key={item.id}
                            id={item.id}
                            type={item.type}
                            amount={ item.amount }
                            currency={item.currency}
                            index={index}
                        />
                    )
                })}
            </TableBody>
        </Table>
    )
}

export const TableRowData = ({ type, amount, currency, index }) => {
    return (
        <CustomTableRow index={index}>
            <CapitalizeTableData>{type}</CapitalizeTableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </CustomTableRow>
    )
}