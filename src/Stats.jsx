const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🧳 </em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.reduce(
    (total, current) => (total += current.packed ? 1 : 0),
    0
  );
  const percentage = Math.round((numPacked * 100) / numItems);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got Everything! Ready to Go ✈️"
          : `🪭 You have ${numItems} items on your list, and you are already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};
export default Stats;
