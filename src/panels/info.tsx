import { initBackButton } from "@telegram-apps/sdk";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default ({
  list,
  typetoilet,
  setpanels,
}: {
  list: Array<{ name: string; img: string }>;
  typetoilet: number;
  setpanels: Function;
}) => {
  const [backButton] = initBackButton();

  useEffect(() => {
    backButton.show();

    backButton.on("click", () => {
      backButton.hide();
      setpanels("constructor");
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "10px" }}
      >
        Доп. инфа:
        {list[typetoilet].name}
      </motion.div>
    </AnimatePresence>
  );
};
