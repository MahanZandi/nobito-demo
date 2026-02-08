import { ReactNode } from "react";
import AppHeader from "@/components/website/AppHeader";
import Footer from "@/components/website/Footer";

interface Props {
  children: ReactNode;
}

const WebsiteLayout = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      {children}
      <div className="pt-[36px] xl:pt-[72px]">
        <Footer />
      </div>
    </>
  );
};

export default WebsiteLayout;
