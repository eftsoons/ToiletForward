import { InlineButtons } from "@telegram-apps/telegram-ui";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";
import { AnimatePresence, motion } from "framer-motion";

import { ConstructorWindow } from "../components";
export default ({
  list,
  typetoilet,
  settypetoilet,
  setpanels,
}: {
  list: Array<{ name: string; img: string }>;
  typetoilet: number;
  settypetoilet: Function;
  setpanels: Function;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "10px" }}
      >
        <ConstructorWindow
          list={list}
          typetoilet={typetoilet}
          settypetoilet={settypetoilet}
          setpanels={setpanels}
        />
        <InlineButtons style={{ marginTop: "2.5vh", marginBottom: "15vh" }}>
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
