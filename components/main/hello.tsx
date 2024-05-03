"use client";

import H1 from "../typography/h1";
import H5 from "../typography/h5";
import P1 from "../typography/p1";
import { Button } from "../ui/button";
import Section from "../ui/section";

export default function Hello() {
  return (
    <Section className="h-screen bg-navy px-4">
      <div className="w-3/4 flex flex-col gap-6">
        <H5 className="text-green ">안녕하세요, 저는</H5>
        <H1 className="text-white">
          인상깊고 재미있는 UI/UX를 만드는
          <br />
          <span className="text-slate">프론트엔드 엔지니어 이성헌입니다.</span>
        </H1>
        <P1 className="text-slate">
          I’m a software engineer specializing in building (and occasionally{" "}
          <br />
          designing) exceptional digital experiences. Currently, I’m focused on{" "}
          <br />
          building accessible, human-centered products at Upstatement.
        </P1>
        <div>
          <Button className="mt-4" variant="career" size="lg">
            Check out my career!
          </Button>
        </div>
      </div>
    </Section>
  );
}
