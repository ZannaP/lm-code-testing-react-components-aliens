interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
}
export const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => (
  <div>
    <label htmlFor="planetNameInput">Planet Name</label>
    <input
      type="text"
      name="planetName"
      id="planetNameInput"
      value={planetName}
      onChange={(e) => onChangePlanetName(e.target.value)}
    ></input>
  </div>
);
