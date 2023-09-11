interface TwoPlusTwoProps {
  twoPlusTwo: string;
  onChangeTwoPlusTwo: (value: string) => void;
}
export const TwoPlusTwo: React.FC<TwoPlusTwoProps> = ({
  twoPlusTwo,
  onChangeTwoPlusTwo,
}) => (
  <div>
    <label htmlFor="twoPlusTwoSelect">What is 2+2?</label>

    <select
      name="twoPlusTwo"
      id="twoPlusTwoSelect"
      onChange={(e) => onChangeTwoPlusTwo(e.target.value)}
    >
      <option value="four">4</option>
      <option value="notFour">Not 4</option>
    </select>
  </div>
);
