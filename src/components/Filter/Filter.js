export const Filter = ({ filterHeader, value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">
        <p>{filterHeader}</p>
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </>
  );
};
