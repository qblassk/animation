import { motion } from 'framer-motion';

const shapesVariants = [
   // TOP
   {
      scale: [0, 0.5, 1, 0, 1, 0, 1],
      y: [0, 0, -60, 0, -60, 0, -60],
      background: [
         'radial-gradient( rgb(38,166,191) 5%, rgba(98,246,124,1), rgba(252,201,74,0.1))',
         'radial-gradient( rgb(38,166,191) 10%, rgba(98,246,124,0.9), rgba(252,201,74,0.9))',
         'radial-gradient( rgb(38,166,191) 40%, rgba(98,246,124,0.8), rgba(252,201,74,0.8))',
         'radial-gradient( rgb(38,166,191) 10%, rgba(98,246,124,0.9), rgba(252,201,74,0.9))',
         'radial-gradient( rgb(38,166,191) 40%, rgba(98,246,124,0.8), rgba(252,201,74,0.8))',
         'linear-gradient( rgb(38,166,191), rgb(252,201,74), rgb(38,166,191))',
         'linear-gradient( rgb(38,166,191), rgb(252,201,74), rgb(38,166,191))',
      ],
   },
   // BOTTOM
   {
      scale: [0, 0.5, 1, 0, 1, 0, 1],
      y: [0, 0, 60, 0, 60, 0, 60],
      background: [
         'radial-gradient( rgb(38,166,191) 5%, rgba(98,246,124,1), rgba(252,201,74,0.1))',
         'radial-gradient( rgb(38,166,191) 10%, rgba(98,246,124,0.9), rgba(252,201,74,0.9))',
         'radial-gradient( rgb(38,166,191) 40%, rgba(98,246,124,0.8), rgba(252,201,74,0.8))',
         'radial-gradient( rgb(38,166,191) 10%, rgba(98,246,124,0.9), rgba(252,201,74,0.9))',
         'radial-gradient( rgb(38,166,191) 40%, rgba(98,246,124,0.8), rgba(252,201,74,0.8))',
         'linear-gradient( rgb(38,166,191), rgb(252,201,74), rgb(38,166,191))',
         'linear-gradient( rgb(38,166,191), rgb(252,201,74), rgb(38,166,191))',
      ],
   },
   // LEFT
   {
      scale: [0, 0.5, 1, 1, 0, 1, 0],
      x: [0, 0, -60, -60, 0, -60, 0],
      background: [
         'radial-gradient( rgba(38,166,191,1) 5%, rgba(98,246,124,1), rgba(252,201,74,0.6))',
         'radial-gradient( rgba(38,166,191,1) 10%, rgba(98,246,124,1), rgba(252,201,74,0.8))',
         'radial-gradient( rgba(38,166,191,1) 40%, rgba(98,246,124,1), rgba(252,201,74,0.8))',
         'radial-gradient(circle at right, rgba(252,201,74,0.8) 50%, rgb(161,34,25) 100%, rgb(26,18,129) 100%, rgb(106,176,124) 100%)',
         'radial-gradient(circle at right, rgba(252,201,74,0.6) 20%, rgb(161,34,25) 30%, rgb(26,18,129) 50%, rgb(106,176,124) 80%)',
         'radial-gradient(circle at right, rgba(252,201,74,0.8) 50%, rgb(26,18,129) 100%, rgb(255,0,230) 100%)',
         'radial-gradient(circle at right, rgba(252,201,74,0.6) 20%, rgb(26,18,129) 50%, rgb(255,0,230) 80%)',
      ],
   },
   // RIGHT
   {
      scale: [0, 0.5, 1, 1, 0, 1, 0],
      x: [0, 0, 60, 60, 0, 60, 0],
      background: [
         'radial-gradient( rgba(38,166,191,1) 5%, rgba(98,246,124,1), rgba(252,201,74,0.6))',
         'radial-gradient( rgba(38,166,191,1) 10%, rgba(98,246,124,1), rgba(252,201,74,0.8))',
         'radial-gradient( rgba(38,166,191,1) 40%, rgba(98,246,124,1), rgba(252,201,74,0.8))',
         'radial-gradient(circle at left, rgba(252,201,74,0.8) 50%, rgb(161,34,25) 100%, rgb(26,18,129) 100%, rgb(106,176,124) 100%)',
         'radial-gradient(circle at left, rgba(252,201,74,0.6) 20%, rgb(161,34,25) 30%, rgb(26,18,129) 50%, rgb(106,176,124) 80%)',
         'radial-gradient(circle at left, rgba(252,201,74,0.8) 50%, rgb(26,18,129) 100%, rgb(255,0,230) 100%)',
         'radial-gradient(circle at left, rgba(252,201,74,0.6) 20%, rgb(26,18,129) 50%, rgb(255,0,230) 80%)',
      ],
   },
];

const subShapesVariants = [
   {
      width: [60, 70, 60, 50, 60, 70, 80],
      height: [3, 4, 3, 2, 3, 3, 5],
   },
   {
      width: [100, 90, 100, 80, 90, 90, 80],
      height: [5, 7, 6, 5, 7, 5, 6],
   },
   {
      width: [150, 160, 180, 190, 180, 180, 170],
      height: [8, 9, 6, 6, 7, 7, 6],
   },
   {
      width: [180, 180, 160, 180, 190, 180, 160],
      height: [7, 8, 9, 6, 6, 7, 6],
   },
   {
      width: [90, 80, 90, 90, 100, 90, 90],
      height: [5, 8, 6, 5, 7, 5, 7],
   },
   {
      width: [60, 70, 60, 50, 60, 70],
      height: [3, 4, 3, 2, 3, 3, 3],
   },
];

function App() {
   return (
      <motion.div className="shapes-container">
         {shapesVariants.map((variant, index) => (
            <motion.div
               key={index}
               className="shape"
               animate={variant}
               transition={{
                  ease: 'easeInOut',
                  duration: 3,
                  repeat: Infinity,
               }}
            >
               {subShapesVariants.map((variant, index) => (
                  <motion.div
                     key={index}
                     className="shadow"
                     animate={variant}
                     transition={{
                        ease: 'easeInOut',
                        duration: 9,
                        repeat: Infinity,
                     }}
                  />
               ))}
            </motion.div>
         ))}
      </motion.div>
   );
}

export default App;
