import { IconButton, Title } from "@telegram-apps/telegram-ui";
import { useState } from "react";

import { Icons } from "./";
import { AnimatePresence, motion } from "framer-motion";

export default () => {
  const list = [
    { name: "Туалет PRO MAX", img: "toilet1.jpg" },
    { name: "Туалет PRO MAX2", img: "toilet2.jpg" },
    { name: "Туалет PRO MAX3", img: "toilet3.jpg" },
  ];

  const [typetoilet, settypetoilet] = useState(0);

  return (
    <div className="constructor">
      <div className="constructor-header">
        <Title weight={"1"}>{list[typetoilet].name}</Title>
        <div className="constructor-info">
          <IconButton mode="plain">{Icons("save")}</IconButton>
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
            src={`${list[typetoilet].img}`}
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
