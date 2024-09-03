import { InlineButtons } from "@telegram-apps/telegram-ui";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";
import { AnimatePresence, motion } from "framer-motion";

import { ConstructorWindow } from "../components";
export default () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "10px" }}
      >
        <ConstructorWindow />
        <InlineButtons style={{ marginBottom: "16vh", minWidth: "0" }}>
          <InlineButtonsItem mode={"bezeled"} text="Каркас">
            ?
          </InlineButtonsItem>
          <InlineButtonsItem mode={"bezeled"} text="Душ">
            ?
          </InlineButtonsItem>
          <InlineButtonsItem mode={"bezeled"}></InlineButtonsItem>
          <InlineButtonsItem mode={"bezeled"}></InlineButtonsItem>
          <InlineButtonsItem mode={"bezeled"}></InlineButtonsItem>
        </InlineButtons>
      </motion.div>
    </AnimatePresence>
  );
};
