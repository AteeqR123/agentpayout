import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Compliance } from "./pages/Compliance";
import { AboutUs } from "./pages/AboutUs";
import { Developers } from "./pages/Developers";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { MethodUSDT } from "./pages/MethodUSDT";
import { MethodMobileMoney } from "./pages/MethodMobileMoney";
import { MethodLocalBanks } from "./pages/MethodLocalBanks";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "compliance", Component: Compliance },
      { path: "about", Component: AboutUs },
      { path: "developers", Component: Developers },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "methods/usdt", Component: MethodUSDT },
      { path: "methods/mobile-money", Component: MethodMobileMoney },
      { path: "methods/local-banks", Component: MethodLocalBanks },
      { path: "*", Component: () => <div className="p-20 text-center text-2xl font-medium text-slate-800">404 - Page Not Found</div> },
    ],
  },
  {
    path: "/login",
    Component: Login,
  }
]);