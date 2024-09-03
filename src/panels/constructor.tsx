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
        <InlineButtons style={{ marginTop: "2.5vh", marginBottom: "14vh" }}>
          <InlineButtonsItem
            mode={"bezeled"}
            style={{ minWidth: "0" }}
            text="Облицовка"
          >
            ?
          </InlineButtonsItem>
          <InlineButtonsItem
            mode={"bezeled"}
            style={{ minWidth: "0" }}
            text="Внутренняя отделка"
          >
            ?
          </InlineButtonsItem>
          <InlineButtonsItem
            mode={"bezeled"}
            style={{ minWidth: "0" }}
            text="Душ"
          >
            ?
          </InlineButtonsItem>
          <InlineButtonsItem
            mode={"bezeled"}
            style={{ minWidth: "0" }}
            text="Доп. Опции"
          >
            ?
          </InlineButtonsItem>
        </InlineButtons>
      </motion.div>
    </AnimatePresence>
  );
};
