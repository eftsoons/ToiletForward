import { IconButton, Title } from "@telegram-apps/telegram-ui";

import { Icons } from "./";
import { AnimatePresence, motion } from "framer-motion";

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
    <div className="constructor">
      <div className="constructor-header">
        <Title weight={"1"}>{list[typetoilet].name}</Title>
        <div className="constructor-info">
          <IconButton mode="plain" onClick={() => setpanels("info")}>
            {Icons("info")}
          </IconButton>
        </div>
        <div className="constructor-save">
          <IconButton mode="plain">{Icons("save")}</IconButton>
        </div>
      </div>

      <AnimatePresence>
        <div className="constructor-main">
          <motion.img
            key={list[typetoilet].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={list[typetoilet].img}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </AnimatePresence>
      <div className="constructor-bottom">
        <div className="constructor-bottom-arrows">
          <IconButton
            mode="plain"
            onClick={() => {
              if (typetoilet > 0) {
                settypetoilet(typetoilet - 1);
              }
            }}
          >
            {Icons("left")}
          </IconButton>
          <IconButton
            style={{ transform: "rotate(180deg)" }}
            mode="plain"
            onClick={() => {
              if (typetoilet < list.length - 1) {
                settypetoilet(typetoilet + 1);
              }
            }}
          >
            {Icons("left")}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
