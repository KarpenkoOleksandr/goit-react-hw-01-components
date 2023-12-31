import { ProfileWrapper, Description, Avatar, Name, Tag, Location, StatsList, StatsItem, Label, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (<ProfileWrapper>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <StatsList>
    <StatsItem>
          <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatsItem>
  </StatsList>
</ProfileWrapper>
)}