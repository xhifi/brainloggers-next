"use client";

import Button from "../primitives/Button";
import Link from "../primitives/Link";
import { motion, AnimatePresence } from "framer-motion";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";
import { BsX } from "react-icons/bs";

const CookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useLocalStorage(
    "cookieConsent",
    null,
  );

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    if (typeof window !== undefined) {
      window.gtag =
        window.gtag ||
        function () {
          dataLayer.push(arguments);
        };
      return window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
  }, [cookieConsent]);

  return (
    <AnimatePresence>
      {!cookieConsent && (
        <>
          <motion.div
            initial={{
              y: "100vh",
              opacity: 0.5,
              transition: {
                duration: 0.3,
              },
            }}
            animate={{
              y: 0,
              opacity: 0.5,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              y: "100vh",
              opacity: 0.5,
              transition: {
                duration: 0.3,
              },
            }}
            className="fixed bottom-0 left-0 right-0 top-0 z-[998] h-full w-full bg-black opacity-60"
          />
          <motion.div
            initial={{
              y: "100%",
              opacity: 0,
              transition: {
                duration: 0.6,
              },
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
              },
            }}
            exit={{
              y: "100%",
              opacity: 0,
              transition: {
                duration: 0.6,
              },
            }}
            className="fixed bottom-0 left-0 z-[999] w-full rounded bg-warning p-8"
          >
            <Button
              className="absolute right-8 top-8 px-0 py-0"
              onClick={() => setCookieConsent("granted")}
            >
              <BsX className="size-8" />
            </Button>
            <div className="mb-4 space-y-2">
              <h4>Before continuing on our website</h4>
              <p>Brainloggers uses cookies and data to:</p>
              <ul className="ms-6 list-outside list-disc decoration-dark">
                <li>
                  Provide and manage services, for example to monitor service
                  interruptions and protect you from spam, fraudulent and
                  illegal activities.
                </li>
                <li>
                  Measure audience engagement and site statistics to understand
                  how our services are used
                </li>
              </ul>
              <p>
                If you wish, you can click on Block Cookies to reject cookies
                for personalization and browser-level information
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="space-x-2">
                <Button onClick={() => setCookieConsent("granted")}>
                  I accept
                </Button>
                <Button onClick={() => setCookieConsent("denied")}>
                  Reject Cookies
                </Button>
              </div>
              <div>
                <Link href="/">Privacy</Link>
                <span className="mx-2">|</span>
                <Link href="/">Terms</Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default CookieConsent;
