import { AnimatePresence, motion } from "framer-motion";

export default () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        cabinet
      </motion.div>
    </AnimatePresence>
  );
};
