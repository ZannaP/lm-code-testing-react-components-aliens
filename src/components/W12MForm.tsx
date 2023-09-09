import { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./species-name";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState("");
  const [twoPlusTwo, setTwoPlusTwo] = useState("");
  const [postContent, setPostContent] = useState("");
  function handleSubmit() {
    console.log(
      speciesName,
      planetName,
      numberOfBeings,
      twoPlusTwo,
      postContent
    );
  }
  return (
    <section className="w12MForm">
      <W12MHeader />
      <form>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(value) => setSpeciesName(value)}
        />

        <div>
          <label htmlFor="planetNameInput">Planet Name</label>
          <input
            type="text"
            name="planetName"
            id="planetNameInput"
            value={planetName}
            onChange={(e) => setPlanetName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="numberOfBeingsInput">Number of beings</label>
          <input
            type="text"
            name="numberOfBeings"
            id="numberOfBeingsInput"
            value={numberOfBeings}
            onChange={(e) => setNumberOfBeings(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="twoPlusTwoSelect">What is 2+2?</label>
          <select
            name="twoPlusTwo"
            id="twoPlusTwoSelect"
            defaultValue="notFour"
            onChange={(e) => setTwoPlusTwo(e.target.value)}
          >
            <option value="four">4</option>
            <option value="notFour">Not 4</option>
          </select>
        </div>

        <div>
          <label htmlFor="reasonForSparing">Reason for sparing</label>
          <textarea
            name="reasonForSparing"
            id="reasonForSparing"
            rows={4}
            cols={50}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
        </div>

        <button type="button" onClick={handleSubmit}>
          Submit form
        </button>
      </form>
    </section>
  );
};

export default W12MForm;
