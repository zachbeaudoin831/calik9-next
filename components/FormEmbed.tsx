"use client";

import Script from "next/script";

interface FormEmbedProps {
  formId: string;
  formName: string;
  title: string;
  height?: number;
}

export default function FormEmbed({ formId, formName, title, height = 896 }: FormEmbedProps) {
  return (
    <div className="bg-white/[0.07] border border-white/[0.15] rounded-xl p-7">
      <div className="font-ui text-base font-bold tracking-[2px] uppercase text-white/85 mb-2">
        {title}
      </div>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(height)}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title={formName}
        loading="eager"
        className="w-full border-none rounded-sm block overflow-hidden"
        style={{ height: `${height}px` }}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
