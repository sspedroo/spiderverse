"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react"

import HeroPicture from "../HeroPicture";

import styles from "./heroesList.module.scss";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes"


interface IProps {
    heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps){
    return (
        <Fragment>
            <motion.h1 
                className={`${spidermanFont.className} ${styles.title}`}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 2, delay: 1.5}}
            >
                Personagens
            </motion.h1>
            <motion.section 
                className={styles.heroes}
                initial={{ opacity: 0, y: -75}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1.5, delay: 0.1 ,ease: "easeIn"}}
            >
                {heroes.map((hero) => (
                    <motion.div 
                    key={hero.id} className={`${styles.imageContainer} ${styles[hero.id]}`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.8 }}
                    whileTap={{ scale: 0.9 }}
                    >
                        <Link href={`/hero/${hero.id}`}>
                            <HeroPicture hero={hero} />
                        </Link>
                    </motion.div>
                ))}
            </motion.section>
        </Fragment>  
    );
}