"use client";
import Feed from "@components/Feed";

function Home() {
  const setGG = async () => {
    const data = await fetch(
      "https://sbx.totalview.healthos.elevancehealth.com/resources/registered/Sandbox/api/v1/fhir/ExplanationOfBenefit?patient=e79bd16514d7e6a2a56faa1a37e23e3c",
      {
        headers: {
          Authorization:
            "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NieC50b3RhbHZpZXcuaGVhbHRob3MuZWxldmFuY2VoZWFsdGguY29tIiwic3ViIjoiVE9UQUxWSUVXTUlERExFV0FSRS9IRUFMVEhPUyIsImF1ZCI6IjllNTIyYzk4LTViOTAtNDQ5Mi1iZWMyLWE1YmE4MDQ2YTEyNCIsImNvZGUiOiJOVE00WXpRd1kyTXRZemd4TmkwME0yTmlMVGt6WW1VdE5EY3hOV0k0WTJZNU1qazUiLCJlbnRpdHlfbmFtZSI6IlRvdGFsVmlld1Rlc3QiLCJlbnRpdHlUeXBlIjoiVGhpcmQgUGFydHkgQXBwIiwic2NvcGUiOiJwYXRpZW50LyoucmVhZCBsYXVuY2gvcGF0aWVudCBvcGVuaWQgZmhpclVzZXIgb3BlbmlkIHByb2ZpbGUgb2ZmbGluZV9hY2Nlc3MiLCJ0a25faWQiOiI2QkFCdnAvYVdwWUZSZ3BhbDBWUi9BPT0iLCJleHAiOjE3MzEzMzg3ODUsImlhdCI6MTczMTMzNTE4NX0.TIx7fkS__FrzPoCAxtDh46AnOAiN-xpM5LefWKw_Ze9xi7vWwEgVPlKlm1dLlkcySjGnJgmJB5ym0kpJEmCYd7qRo_M4DgKCAcplJDRPWDHaoJnXVqn7z4sjc2Bd9YDnB7dRFOjoHBSA-BRpQDErFr4rpAzmy6t-Dk7MQWS5O4Pvll2FqCv_tVmvGuGC-TGsq18c8a7i-NW2rrm1JeI2VOcKh_MQySez3t2gkPWYBawMYQ5ocC2v-Pohxscg20sZwkhcZFlfVm7dDtDIk0FgrVE7EoZOQOzxL1A18CORFackmbrJT8y-TNcA2XiUCHXFKfetOPUVk9OQ2BvbBfkQWQ",
        },
      }
    );
    console.log(data);
  };

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center">AI-Poweres Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
      <button onClick={setGG}>Click</button>
    </section>
  );
}

export default Home;
