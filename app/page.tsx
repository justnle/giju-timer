import { Gaegu } from 'next/font/google';
import Countdown from "./Countdown";

const gaegu = Gaegu({
  subsets: ['latin'],
  weight: '700',
});

const Page = () => {
  return (
    <main
      className={gaegu.className}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        background: "#f4ebf5",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: 48, margin: 0 }}>giju timer</h1>
      <h5 style={{ marginTop: 0 }}><i>"these next 100000(000000) hrs belong to you"</i></h5>
      <div
        style={{
          background: "#bc8ac2",
          borderRadius: 12,
          color: "#fff",
          minWidth: 320,
          padding: 32,
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 300 }}>countdown to april 18, 2140</h1>
        <Countdown />
      </div>
      <h5>ily babygorl</h5>
    </main>
  );
};

export default Page;
