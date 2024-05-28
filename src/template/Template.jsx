import React, { useEffect } from "react";
// import { Helmet } from 'react-helmet';
// import favicon from 'node_modules/govuk-frontend/dist/govuk/assets/images/favicon.ico';
// import govukMaskIcon from 'govuk-frontend/govuk/assets/images/govuk-mask-icon.svg';
// import appleTouchIcon180 from 'govuk-frontend/govuk/assets/images/govuk-apple-touch-icon-180x180.png';
// import appleTouchIcon167 from 'govuk-frontend/govuk/assets/images/govuk-apple-touch-icon-167x167.png';
// import appleTouchIcon152 from 'govuk-frontend/govuk/assets/images/govuk-apple-touch-icon-152x152.png';
// import appleTouchIcon from 'govuk-frontend/govuk/assets/images/govuk-apple-touch-icon.png';
// import govukOpenGraphImage from 'govuk-frontend/govuk/assets/images/govuk-opengraph-image.png';

// import { SkipLink } from '..';

import { Header } from "../_components/header";
import { Footer } from "../_components/footer";

function Template(props) {
  const {
    children,
    header,
    footer,
    beforeContent,
    mainLang,
    containerClassName,
    mainClassName,
  } = props;

  useEffect(() => {
    document.body.classList.add("js-enabled", "govuk-template__body");
  }, []);

  return (
    <>
      <Header {...header} />

      <div className={`govuk-width-container ${containerClassName || ""}`}>
        {beforeContent}
        <main
          className={`govuk-main-wrapper govuk-!-padding-top-3 ${
            mainClassName || ""
          }`}
          id="main-content"
          role="main"
          lang={mainLang || null}
        >
          {children}
        </main>
      </div>

      <Footer {...footer} />
    </>
  );
}

Template.defaultProps = {
  title: "Ministry of justice - Xhibit portal",
  skipLink: {
    href: "#main-content",
    children: "Skip to main content",
  },
  header: {},
  footer: {},
  beforeContent: "",
};

export { Template };
