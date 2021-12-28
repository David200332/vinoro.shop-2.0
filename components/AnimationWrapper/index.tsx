import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimationWrapper = ({ router, children }: any) => (
    // <AnimatePresence exitBeforeEnter>
    //     <motion.div
    //         key={router.route}
    //         initial="pageInitial"
    //         animate="pageAnimate"
    //         exit="pageExit"
    //         variants={{
    //             pageInitial: {
    //                 opacity: 0,
    //             },
    //             pageAnimate: {
    //                 opacity: 1,
    //             },
    //             pageExit: {
    //                 backgroundColor: "black",
    //                 // filter: `invert()`,
    //                 opacity: 0,
    //             }
    //         }}>
            
    //     </motion.div>
    // </AnimatePresence>
    <>
    {children}
    </>
)

export default AnimationWrapper