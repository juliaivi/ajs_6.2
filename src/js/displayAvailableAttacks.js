export default function displayAvailableAttacks(obj) {
  const { special } = obj;
  const result = [];
  special.forEach((el) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = el;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
