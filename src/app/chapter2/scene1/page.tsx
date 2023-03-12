'use client';

import { motion } from "framer-motion"
import { useState } from 'react'
import Sequence from './Sequence'
import Telegram from "./Telegram";
import SaveButton from "@/components/SaveButton";
import Modal from "@/components/Modal";
import Recover from "@/components/Recover";
import { perm_marker } from "@/utils/font";

const Chap2s1 = () => {
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [stage, setStage] = useState(0)
    const [modal, setModal] = useState(false)
    const progression = {
        chapter: 2,
        episode: 2,
        scene: 0
    }

    return (
        <>
            <div className={`${perm_marker.className} absolute flex justify-center w-screen h-screen my-auto`}>
                <motion.div
                    className="my-auto"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <motion.h1
                        className="text-center text-7xl"
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', delay: 0.8, duration: 1 }}
                    >
                        Chapter 2
                    </motion.h1>
                    <motion.p
                        className="text-center text-xl"
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', delay: 1.5, duration: 1 }}
                    >
                        Paradigm shift
                    </ motion.p>
                </motion.div>
            </div>
            <div className="flex flex-row">
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-1/6" />
                {/* <div className="absolute top-4 left-80 z-30">
                <Recover />
            </div> */}
                <div className="relative basis-2/3 w-full overflow-hidden">
                    <Sequence setTelegramWindow={setTelegramWindow} telegramWindow={telegramWindow} />
                </div>
                <div className="basis-1/3 p-6 h-screen flex-grow-0">
                    {telegramWindow &&
                        <Telegram stage={stage} setStage={setStage} />
                    }
                </div>
                {
                    stage === 7 &&
                    <motion.div
                        className="fixed bottom-8 right-[33%] animate-pulse"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 19, duration: 1 }}
                    >
                        <SaveButton
                            setModal={setModal}
                            progression={progression}
                            arrow={true}
                        />
                    </motion.div>
                }
                {modal && <Modal route='/construction' />}
            </div>
        </>
    )
}

export default Chap2s1