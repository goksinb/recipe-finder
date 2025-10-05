import PropTypes from "prop-types";
import Header from "../components/header";
import "../styles/about.css";

export default function About({appName, dataSource, contactEmail}) {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="mx-auto max-w-3xl px-4 py-10">
          {/* Title */}
          <h1 className="text-3xl font-semibold tracking-tight">
            About Fridge Feast
          </h1>
          <p className="mt-3 text-neutral-700">
            Fridge Feast is a simple tool that helps you answer one question:
            what can I cook with what I have at home?
          </p>
          {/* How to use */}
          <section aria-labelledby="how" className="mt-10">
            <h2 id="how" className="text-xl font-semibold">
              How it works
            </h2>

            <ul>
              <li>
                <span className="font-medium"></span> Type a few ingredients.
                Tomato, pasta, eggs, and so on.
              </li>
              <li>
                <span className="font-medium"></span> Open a recipe and follow
                the steps.
              </li>
            </ul>
          </section>
          {/* Features */}
          <section aria-labelledby="features" className="mt-10">
            <h2 id="features" className="text-xl font-semibold">
              Features
            </h2>
            <ul className="mt-3 list-inside list-disc text-neutral-700">
              <li>Search by multiple ingredients</li>

              <li>Clean steps with notes and simple measurements</li>
            </ul>
          </section>
          {/* Data and privacy */}
          <section aria-labelledby="data" className="mt-10">
            <h2 id="data" className="text-xl font-semibold">
              Data and privacy
            </h2>
            <p className="mt-3 text-neutral-700">
              All the recipes come from Spoonacular API.
            </p>
          </section>
          {/* Contact */}
          <section aria-labelledby="contact" className="mt-10">
            <h2 id="contact" className="text-xl font-semibold">
              Questions or ideas
            </h2>
            <p className="mt-3 text-neutral-700">
              Send feedback to{" "}
              <a className="underline" href={`mailto:${contactEmail}`}>
                {`info@fridgefeast.com`}
              </a>
              .
            </p>
          </section>

          {/* Small note so users know what to expect */}
          <p className="mt-12 text-sm text-neutral-500">
            This page explains the app at a glance. You can find tips inside
            each recipe.
          </p>
        </div>
      </main>
    </div>
  );
}

About.propTypes = {
  appName: PropTypes.string,
  dataSource: PropTypes.string,
  contactEmail: PropTypes.string,
};

About.defaultProps = {
  appName: "Recipe Finder",
  dataSource: "Spoonacular API",
  contactEmail: "hello@example.com",
};
