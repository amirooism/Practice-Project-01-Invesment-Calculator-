import { calculateInvestmentResults, formatter } from "../util/investment";
export default function ({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* we are using map to turn this data array into an array full of jsx elments 
        which can be renders on screen by react , we have 10 years so we get data for everyyear*/}
        {resultData.map((yearData) => {
          //becuase we have list tr* we should have key, and the best key is year becuase we have 10
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvesmnet = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              {/* We need 5 table data becuase we have 5 colums setup */}
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvesmnet)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
