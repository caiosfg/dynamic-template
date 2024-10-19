"use client";

import { motion, AnimatePresence } from "framer-motion";

export default async function Home() {

  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <>
      <AnimatePresence>    
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <h1 className="text-black z-50">Oi testabdi i oa tneihjaijdn akbnejbains</h1>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
