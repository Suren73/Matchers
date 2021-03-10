export default function sortHealth(data) {
  const sortUsers = [];
  Object.keys(data)
    .sort((a, b) => data[b].health - data[a].health)
    .forEach((index) => sortUsers.push(data[index]));
  return sortUsers;
}
