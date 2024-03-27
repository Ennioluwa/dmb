import { FC, ReactNode } from "react";

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout: FC<LandingPageLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default LandingPageLayout;
