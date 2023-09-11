import { useState } from "react";
import W12MHeader from "./W12MHeader";
import { SpeciesName } from "./species-name";
import { PlanetName } from "./planet-name";
import { NumberOfBeings } from "./number-of-being";
import { TwoPlusTwo } from "./two-plus-two";
import { ReasonForSparing } from "./reason-for-sparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState("");
  const [twoPlusTwo, setTwoPlusTwo] = useState("notFour");
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
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNumberOfBeings={(value) => setNumberOfBeings(value)}
        />
        <TwoPlusTwo
          twoPlusTwo={twoPlusTwo}
          onChangeTwoPlusTwo={(value) => setTwoPlusTwo(value)}
        />
        <ReasonForSparing
          reasonForSparing="{postContent}"
          onChangeReasonForSparing={(value) => setPostContent(value)}
        />

        <button type="button" onClick={handleSubmit}>
          Submit form
        </button>
      </form>
    </section>
  );
};

export default W12MForm;
