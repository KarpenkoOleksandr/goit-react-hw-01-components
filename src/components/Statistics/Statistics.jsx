import { Section,  Title, StatList, StatItem, Label, Percentage} from "./Statistics.styled"

export const Statistics = ({title, stats}) => {
    return ( 
    <Section>
  <Title>Upload stats</Title>
 <StatList>
    {stats.map((item, index) => (
        <StatItem key={item.id} id={item.id} index={index}>  
        <Label>{item.label}</Label>
        <Percentage>{item.percentage}%</Percentage>
        </StatItem>
    ))}
    </StatList>
</Section>
)}