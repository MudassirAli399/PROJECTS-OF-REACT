function Inputbox({
  label,
  currencyoptions,
  selectedcurrency,
  oncurrencychange,
  amount,
  onAmountChange,
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');

        .inputbox-wrapper {
          font-family: 'Syne', sans-serif;
          margin: 0;
        }

        .inputbox-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 10px 4px;
        }

        .inputbox-row {
          display: flex;
          border: 1.5px solid #222;
          border-radius: 12px;
          overflow: hidden;
          background: #0d0d0d;
          box-shadow: 0 4px 24px rgba(0,0,0,0.35);
          transition: box-shadow 0.2s;
        }

        .inputbox-row:focus-within {
          box-shadow: 0 0 0 2px #f0e040, 0 4px 24px rgba(0,0,0,0.4);
        }

        .inputbox-amount {
          font-family: 'DM Mono', monospace;
          font-size: 28px;
          font-weight: 500;
          color: #f5f5f5;
          background: transparent;
          border: none;
          outline: none;
          padding: 18px 20px;
          width: 200px;
          flex: 1;
          min-width: 0;
          -moz-appearance: textfield;
        }

        .inputbox-amount::-webkit-outer-spin-button,
        .inputbox-amount::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }

        .inputbox-currency-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 14px 18px;
          background: #161616;
          border-left: 1.5px solid #222;
          min-width: 100px;
          gap: 4px;
        }

        .inputbox-currency-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          font-weight: 600;
        }

        .inputbox-select {
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #f0e040;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          padding-right: 4px;
          letter-spacing: 0.05em;
        }

        .inputbox-select option {
          background: #1a1a1a;
          color: #f5f5f5;
          font-weight: 600;
        }
      `}</style>

      <div className="inputbox-wrapper">
        <p className="inputbox-label">{label}</p>
        <div className="inputbox-row">
          <input
            className="inputbox-amount"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            type="number"
            placeholder="0.00"
          />
          <div className="inputbox-currency-panel">
            <span className="inputbox-currency-label">Currency</span>
            <select
              className="inputbox-select"
              value={selectedcurrency}
              onChange={(e) => oncurrencychange(e.target.value)}
            >
              {currencyoptions?.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inputbox;