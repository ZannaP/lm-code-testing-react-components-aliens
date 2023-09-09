interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (value: string) => void;
}
export const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => (
  <div>
    <label htmlFor="speciesNameInput">Species Name</label>
    <input
      type="text"
      id="speciesNameInput"
      value={speciesName}
      onChange={(e) => onChangeSpeciesName(e.target.value)}
    ></input>
  </div>
);
