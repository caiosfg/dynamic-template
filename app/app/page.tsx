"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ListTask from "@/components/ListTask";
import { Suspense } from "react";
import Loading from "./loading";

async function getElements() {

  const request = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await request.json();

  return data;
}

export default async function Home() {
  const elementos = await getElements()
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
          <Suspense fallback={<Loading />}>
            <div className="flex flex-col">              
              <div className="flex flex-col w-20 h-20 overflow-auto">
                {elementos.map(({id, title, url, thumbnailUrl}) => (
                  <Link href={`/edit?${id}`} key={id}>
                    <Image
                      alt={title}
                      src={thumbnailUrl}
                      height={150}
                      width={150}
                      className="grid-cols-3"
                    />
                  </Link>
                ))}
              </div>
              <ListTask />
            </div>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
