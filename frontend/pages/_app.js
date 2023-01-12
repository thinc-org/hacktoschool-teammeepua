import "../styles/globals.css";
import { Navbar } from "../components/Navbar/Navbar";

import { store } from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
