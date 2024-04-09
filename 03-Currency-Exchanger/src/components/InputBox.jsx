import React, { useId } from "react";

// Here I am creating an input box component
function InputBox({
  // What is this I don't Know this
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // What useId will do ?
  const amountInputId = useId();

  return (
    // This CSS looks different because in this CSS user will apply there CSS
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Here This is input box */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(Number(e.target.value))
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => {
            // Whenever you are using loop in the jsx you have to use key attribute because loop will slow the performance of the React.
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

// Some good practice is to make a new js file import all the component to the that file and then export them.
