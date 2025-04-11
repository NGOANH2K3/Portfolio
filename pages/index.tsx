import { Page } from "@/components/Page/page";
import { HeroSection, Resume } from "@/modules/homePage";

export default function Home() {
  return (
    <Page title="ngoanh - web developer">
      <HeroSection/>
      <Resume/>
    </Page>
  );
}
