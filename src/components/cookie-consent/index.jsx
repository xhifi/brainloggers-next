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
            className="fixed bottom-0 left-0 z-[999] w-full rounded-t-xl bg-warning p-8"
          >
            <div className="mb-4 space-y-2">
              <h4>Before continuing on our website</h4>
              <p>Brainloggers uses cookies and data to:</p>
              <ul className="list-inside list-disc decoration-dark">
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
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-y-2 md:flex-row md:gap-y-0">
              <div className="flex w-full space-x-2 md:w-auto">
                <Button
                  onClick={() => setCookieConsent("granted")}
                  className={"w-full"}
                >
                  Accept
                </Button>
                <Button
                  onClick={() => setCookieConsent("denied")}
                  className={"w-full"}
                >
                  Reject
                </Button>
              </div>
              <div className="divide-x-2 divide-primary/25">
                <Link href="/" className="px-2">
                  Privacy Policy
                </Link>
                <Link href="/" className="px-2">
                  GDPR Acknowledgement
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default CookieConsent;
