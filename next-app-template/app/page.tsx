import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { MainArticle } from "@/components/main-article";

export default function Home() {
  return (
    <>
      <div className="m-0 p-0 relative h-screen">
        {/* Wrapper to ensure grid layout has a background video */}
        <div className="absolute inset-0">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221105184949/ezgif.com-gif-maker.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Shadow Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        {/* Grid Layout for Two Sections */}
        <div className="relative grid grid-cols-2 h-full z-10">
          {/* First Section */}
          <section className="flex flex-col items-center justify-center text-center px-8">
            <div className="inline-block max-w-xl">
              <h1 className={title()}>Make&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
              <br />
              <h1 className={title()}>
                websites regardless of your design experience.
              </h1>
              <h2 className={subtitle({ class: "mt-4" })}>
                Beautiful, fast and modern React UI library.
              </h2>
            </div>

            <div className="flex gap-3 mt-6">
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href={siteConfig.links.docs}
              >
                Documentation
              </Link>
              <Link
                isExternal
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={20} />
                GitHub
              </Link>
            </div>

            <div className="mt-8">
              <Snippet hideCopyButton hideSymbol variant="bordered">
                <span>
                  Get started by editing <Code color="primary">app/page.tsx</Code>
                </span>
              </Snippet>
            </div>
          </section>

          {/* Second Section */}
          <section className="flex flex-col items-center justify-center text-center px-8">
            <div className="relative z-10 text-center">
              <h1 className={title({ color: "violet" })}>
                Inspiring Designs for Everyone
              </h1>
              <p className="text-white text-lg mt-4">
                Bring your ideas to life with the power of modern UI libraries and
                intuitive design.
              </p>

              <Link
                isExternal
                className={buttonStyles({
                  color: "secondary",
                  radius: "full",
                  variant: "shadow",
                })}
                href={siteConfig.links.sponsor}
                className="mt-6"
              >
                Try the Demo
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div>
        <MainArticle styles="" />
      </div>
    </>
  );
}
