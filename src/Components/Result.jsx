import { calculateInvestmentResults } from "../util/investment";
export default function ({ input }) {
const resultData = calculateInvestmentResults(input)
console.log(resultData)
  return (
    <>
      <p>Results ...</p>
    </>
  );
}
