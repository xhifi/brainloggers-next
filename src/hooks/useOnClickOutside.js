import { useEffect } from "react";

/**
 * @param {React.RefObject} ref - The ref of the element to detect clicks outside of
 * @param {function} handler - The function to call when a click is detected outside the element
 * @returns {void}
 *
 * @description
 * This hook allows you to detect clicks outside of a specified element.
 * It is useful for handling events such as closing a modal when the user clicks outside of it.
 *
 * @example
 * const ref = useRef(null);
 * const [showModal, setShowModal] = useState(false);
 * useOnClickOutside(ref, () => setState(false));
 *
 * <div.Modal ref={ref}>Element</div.Modal>
 */
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        document?.querySelector("button#nav-toggle") &&
        document?.querySelector("button#nav-toggle").contains(event.target)
      ) {
        return;
      }
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
