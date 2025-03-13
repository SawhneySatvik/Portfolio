import Hero from "./components/Home/Hero";
import AboutPreview from "./components/Home/AboutPreview";
import { SkillsPreview } from "./components/Home/SkillsPreview";
import { ProjectsPreview } from "./components/Home/ProjectsPreview";
import AchievementsPreview from "./components/Home/AchievementsPreview";
import ContactPreview from "./components/Home/ContactPreview";

export default function Home() {
  return (
    <div className="max-h-full bg-primary dark:bg-primary-light text-secondary dark:text-secondary-light transition-colors duration-300">
      <Hero />
      <div className="my-1 mx-4 sm:mx-24 border-t border-accent"></div>
      <AboutPreview />
      <div className="my-1 mx-4 sm:mx-24 border-t border-accent"></div>
      <ProjectsPreview />
      <div className="my-1 mx-4 sm:mx-24 border-t border-accent"></div>
      <SkillsPreview />
      <div className="my-1 mx-4 sm:mx-24 border-t border-accent"></div>
      <AchievementsPreview />
      <div className="my-1 mx-4 sm:mx-24 border-t border-accent"></div>
      <ContactPreview />
    </div>
  );
}
