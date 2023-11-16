import type { Metadata } from "next";

import MainWrapper from "../_components/main-wrapper";
import Notification from "../_components/notification";

export const metadata: Metadata = {
  title: "Razer Clone Online Store",
  description: "Buy Unrivalled Gaming Gear online.",
};

export default function StoreLayout({ children }: React.PropsWithChildren) {
  return (
    <MainWrapper>
      <Notification />
      {children}
    </MainWrapper>
  );
}
