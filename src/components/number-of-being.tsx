export interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNumberOfBeings: (value: string) => void;
}
export const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
}) => (
  <div>
    <label htmlFor="numberOfBeingsInput">Number of beings</label>
    <input
      type="text"
      name="numberOfBeings"
      id="NumberOfBeingsInput"
      value={numberOfBeings}
      onChange={(e) => onChangeNumberOfBeings(e.target.value)}
    ></input>
  </div>
);
