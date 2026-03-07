"use client";
// import Img from '../../public/assets/work.svg';

export default function WorkWithUsPage() {
  return (
    <>
      <div className="min-h-screen bg-white flex text-black">
        <div className="w-1/2 flex flex-col  items-center justify-center text-left p-10">
          <h1 className="text-4xl font-bold text-center mt-10 text-accent">
            Join Our Team at Graze & Grain!
          </h1>
          <h1>We're Preparing Something Exciting!</h1>
          <p>
            In the meantime, if you're interested in joining our team or have
            questions about career opportunities.
          </p>
          <h2>Please reach out to us via email.</h2>
          <p className="mt-4 text-blue-400 font-semibold">
            Email:{" "}
            <a
              href="mailto:careers@grazeandgrain.com"
              className="text-accent underline"
            >
              careers@grazeandgrain.com
            </a>
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/assets/work.svg"
            alt="Work With Us"
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
