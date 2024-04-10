import PropTypes from "prop-types";

NutritionalData.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

function NutritionalData({ name, value }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-black text-sm">{value}</div>
      <div className="text-gray-400 text-xs">{name}</div>
    </div>
  );
}
export default NutritionalData;
