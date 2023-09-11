interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (value: string) => void;
}
export const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
}) => (
  <div>
    <label htmlFor="reasonForSparing">Reason for sparing</label>
    <textarea
      id="reasonForSparing"
      rows={4}
      cols={50}
      onChange={(e) => onChangeReasonForSparing(e.target.value)}
    ></textarea>
  </div>
);
