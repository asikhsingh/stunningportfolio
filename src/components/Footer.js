import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-sm dark:text-light dark:border-light sm:text-base ">
      <Layout className="py-2 flex items-center justify-between lg:flex-col lg:py-4">
        
        <div className="flex items-center px-10 lg:py-2">
          Designed {" "}
          {/* <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "} */}
          by&nbsp;
          <Link
            href="http://linkedin.com/in/sikhamritpalsingh/"
            className="underline underline-offset-2"
          >
            Amritpal Singh
          </Link>
        </div>

        
        <spanc className=" ">{new Date().getFullYear()} &copy;All Rights Reserved.</spanc>
        <Link
          href="http://linkedin.com/in/sikhamritpalsingh/"
          target={"_blank"}
          className="underline underline-offset-2 pl-4"
        >
          Privacy Policy & Terms of Service
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
