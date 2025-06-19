/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base">
          Hey there! I&apos;m a web and mobile developer with a real passion for blending creativity with code. I love working with JavaScript as my core tool, and I use frameworks like React.js, Next.js, and React Native to build smooth, engaging, and user-friendly apps for both web and mobile. I&apos;m all about leveraging Jamstack architecture to create websites that are lightning-fast, secure, and ready to scale. With a sharp eye for design and a focus on the little details, I make sure every project I touch is not only intuitive but also looks amazing, delivering experiences that truly connect with users.
          </p>
          <p className="font-semibold mt-4">
            Dive into my projects to see the magic in action. 🧙‍♂️
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Frontend Web & App Devloper
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://drive.google.com/file/d/1kKEqP0Psavv2iuqGxz8hNE8eSGXa3Am3/view?usp=sharing"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">Doux Labs Private Limited</p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Selected for the role of{" "}
                  <b className="font-extrabold">Front-End Developer – Intern</b>{" "}
                  at Doux Labs.
                </li>
                <li>
                  Worked on web development projects focused on optimizing user
                  interfaces and enhancing front-end applications.
                </li>
                <li>
                  Collaborated with back-end developers and participated in code
                  reviews, gaining exposure to industry best practices.
                </li>
                <li>
                  Gained hands-on experience with technologies like{" "}
                  <b className="font-extrabold">React</b> and{" "}
                  <b className="font-extrabold">Next.js</b> and{" "}
                  <b className="font-extrabold">React Native</b> 
                  while building
                  scalable and reusable UI components.
                </li>
                <li>
                  Received mentorship and built a strong foundation in modern
                  front-end development workflows.
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                October 2024 - Present
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=umanggarg&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Umang Garg"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=umanggarg&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Umang Garg"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,ai,babel,bootstrap,css,docker,dart,discord,express,figma,firebase,flutter,git,github,githubactions,graphql,go,html,htmx,js,jquery,kubernetes,linux,mongodb,netlify,nextjs,nodejs,postman,prisma,react,redis,redux,replit,sass,tailwind,threejs,ts,vercel,vite,vscode`}
            alt="Umang Garg"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=umanggarg&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Umang Garg"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=umanggarg&repo=UmangGarg&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
            alt="Umang Garg"
            loading="lazy"
          />
          <Link
            href="/"
            target="_blank"
            className="w-full"
          >
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
