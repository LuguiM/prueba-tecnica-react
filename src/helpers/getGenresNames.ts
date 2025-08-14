export const getGenresNames = (
  genres: { id: number; name: string }[],
  ids?: number[] | { id: number; name: string }[]
) => {
  if (!ids || ids.length === 0) return "";

  // Si es un array de objetos con id y name
  if (typeof ids[0] === "object" && "id" in ids[0]) {
    return (ids as { id: number; name: string }[])
      .map(gObj => genres.find(g => g.id === gObj.id)?.name)
      .filter(Boolean)
      .join(", ");
  }

  // Si es un array de números
  return (ids as number[])
    .map(id => genres.find(g => g.id === id)?.name)
    .filter(Boolean)
    .join(", ");
};
