"use client";

import Script from "next/script";

export default function SurveyEmbed() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/survey/t9ShY3zBZgJUDbqR3P7z"
        id="t9ShY3zBZgJUDbqR3P7z"
        title="survey"
        scrolling="no"
        className="w-full border-none block"
        style={{ minHeight: "560px" }}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
