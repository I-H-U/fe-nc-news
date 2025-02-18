import Articles from "./Articles";
export default function Home() {
  return (
    <>
      <h1 className="title">Welcome to Northcoders News</h1>
      <p className="intro-text">
        Browse articles below or chose by topic above... Have fun!
      </p>
      <Articles />
    </>
  );
}
