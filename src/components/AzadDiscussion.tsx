'use client';

import { motion } from "framer-motion"

const AzadDiscussion = ({ azadText, delay, duration }: {
    azadText: string,
    delay: number,
    duration: number,
}) => {
    return (
        <div className="w-3/4 my-1 self-end">
            {azadText !== "(say nothing)" &&
                <motion.div
                    className="my-2 p-2 text-sm bg-lime-200 rounded-t-lg rounded-l-lg shadow shadow-lime-200 text-slate-900 overflow-x-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay, duration: duration }}
                >
                    {azadText}
                </motion.div>
            }
        </div>
    )
}

export default AzadDiscussion;