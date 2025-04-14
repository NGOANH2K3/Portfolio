import { Page } from "@/components/Page/page";
import { Contact, Experiencs, HeroSection, Project, Resume } from "@/modules/homePage";

export default function Home() {
  return (
    <Page title="ngoanh - web developer">
      <HeroSection/>
      <Resume/>
      <Experiencs/>
      <Project/>
      <Contact/>
    </Page>
  );
}
