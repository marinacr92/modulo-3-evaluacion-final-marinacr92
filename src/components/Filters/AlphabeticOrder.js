import alphabeticIcon from '../../images/alphabeticIcon.png';

const AlphabeticOrder = ({ setAlphaOrder, alphaOrder }) => {
  const handleAlphabeticOrder = () => {
    setAlphaOrder(!alphaOrder);
  };

  return (
    <>
      <p className="form-label">Ordenar alfabéticamente</p>
      <button
        className={alphaOrder ? 'btn-active' : 'btn-inactive'}
        onClick={handleAlphabeticOrder}
      >
        <img src={alphabeticIcon} alt="" className="btn-alphabetic-icon" />
      </button>
    </>
  );
};

export default AlphabeticOrder;
