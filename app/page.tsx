import Countdown from "./Countdown";

const Page = () => {
  return (
    <main
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f4ebf5"
      }}
    >
      <h1 style={{ margin: 0 }}>giju timer</h1>
      <h5><i>"these next 100000000000 hrs belong to you"</i></h5>
      <div
        style={{
          background: "#bc8ac2",
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(2,6,23,0.6)",
          color: "#fff",
          minWidth: 320,
          padding: 32,
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 20 }}>countdown to april 18, 2140</h1>
        <Countdown />
      </div>
    </main>
  );
};

export default Page;
