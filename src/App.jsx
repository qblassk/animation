import { motion } from 'framer-motion';

const shapesVariants = [
   // TOP
   {
      scale: [0, 0.5, 1, 0, 1, 0, 1],
      y: [0, 0, -60, 0, -60, 0, -60],
      background: [
         'linear-gradient(rgba(98,246,124,0.6), rgb(38,166,191), rgba(98,246,124,0.6))',
         'linear-gradient(rgba(98,246,124,0.9), rgb(38,166,191), rgba(98,246,124,0.9))',
         'linear-gradient( rgb(38,166,191), rgba(98,246,124,0.8), rgb(38,166,191))',
         'linear-gradient( rgb(38,105,191), rgba(252,201,74,0.9), rgb(38,105,191))',
      ],
   },
   // BOTTOM
   {
      scale: [0, 0.5, 1, 0, 1, 0, 1],
      y: [0, 0, 60, 0, 60, 0, 60],
      background: [
         'linear-gradient(rgba(98,246,124,0.6), rgb(38,166,191), rgba(98,246,124,0.6))',
         'linear-gradient(rgba(98,246,124,0.9), rgb(38,166,191), rgba(98,246,124,0.9))',
         'linear-gradient( rgb(38,166,191), rgba(98,246,124,0.8), rgb(38,166,191))',
         'linear-gradient( rgb(38,105,191), rgba(252,201,74,0.9), rgb(38,105,191))',
      ],
   },
   // LEFT
   {
      scale: [0, 0.5, 1, 1, 0, 1, 0],
      x: [0, 0, -60, -60, 0, -60, 0],
      background: [
         'radial-gradient(circle at left, rgba(98,246,124,0.6) 50%, rgb(38,166,191) 100%, rgb(38,166,191) 100%, rgba(98,246,124,0.6) 100%)',
         'radial-gradient(circle at left, rgba(18,94,129,0.6) 20%, rgb(38,166,191) 30%, rgb(38,166,191) 50%, rgba(98,246,124,0.8) 80%)',
         'radial-gradient(circle at left, rgba(26,18,129,0.8) 20%, rgba(26,18,129) 30%, rgba(161,34,25) 50%, rgb(252,201,74) 80%)',
         'radial-gradient(circle at left, rgba(106,176,124,0.8) 50%, rgb(26,18,129) 100%, rgb(161,34,25) 100%, rgb(252,201,74) 100%)',
      ],
   },
   // RIGHT
   {
      scale: [0, 0.5, 1, 1, 0, 1, 0],
      x: [0, 0, 60, 60, 0, 60, 0],
      background: [
         'radial-gradient(circle at right, rgba(98,246,124,0.6) 50%, rgb(38,166,191) 100%, rgb(38,166,191) 100%, rgba(98,246,124,0.6) 100%)',
         'radial-gradient(circle at right, rgba(18,94,129,0.6) 20%, rgb(38,166,191) 30%, rgb(38,166,191) 50%, rgba(98,246,124,0.8) 80%)',
         'radial-gradient(circle at right, rgba(26,18,129,0.8) 20%, rgba(26,18,129) 30%, rgba(161,34,25) 50%, rgb(252,201,74) 80%)',
         'radial-gradient(circle at right, rgba(106,176,124,0.8) 50%, rgb(26,18,129) 100%, rgb(161,34,25) 100%, rgb(252,201,74) 100%)',
      ],
   },
];

const subShapesVariants = [
   {
      width: [60],
      height: [3, 7],
   },
   {
      width: [140],
      height: [7, 15],
   },
   {
      width: [160],
      height: [10, 20],
   },
   {
      width: [160],
      height: [10, 20],
   },
   {
      width: [140],
      height: [7, 15],
   },
   {
      width: [60],
      height: [3, 7],
   },
];

function getBackground(position) {
   switch (position) {
      case 'top':
         return [
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
         ];
      case 'bottom':
         return [
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
         ];
      case 'left':
         return [
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(farthest-corner at 70px 10px, rgb(0, 0, 0) 65%, rgb(21, 82, 250) 30%)',
            'radial-gradient(farthest-corner at 90px 10px, rgb(0, 0, 0) 65%, rgb(21, 82, 250) 30%)',
            'radial-gradient(farthest-corner at 90px 10px, rgb(0, 0, 0) 65%, rgb(21, 82, 250) 30%)',
            'radial-gradient(farthest-corner at 70px 10px, rgb(0, 0, 0) 65%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
         ];
      case 'right':
         return [
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
            'radial-gradient(farthest-corner at 15px 10px, rgb(0, 0, 0) 65%, rgb(21, 82, 250) 30%)',
            'radial-gradient(farthest-corner at 10px 10px, rgb(0, 0, 0) 65%, rgb(21, 82, 250) 30%)',
            'radial-gradient(farthest-corner at 10px 10px, rgb(0, 0, 0) 65%, rgb(21, 82, 250) 30%)',
            'radial-gradient(farthest-corner at 15px 10px, rgb(0, 0, 0) 65%, rgb(21, 82, 250) 30%)',
            'radial-gradient(rgb(0, 0, 0) 50%, rgb(21, 82, 250) 30%)',
         ];
      default:
         return [];
   }
}

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
               {subShapesVariants.map((subVariant, subIndex) => (
                  <motion.div
                     key={subIndex}
                     className="shadow"
                     animate={subVariant}
                     transition={{
                        ease: 'easeInOut',
                        duration: 3,
                        repeat: Infinity,
                     }}
                     style={{
                        background: getBackground(
                           index === 0 ? 'top' : index === 1 ? 'bottom' : index === 2 ? 'left' : 'right'
                        )[subIndex],
                     }}
                  />
               ))}
            </motion.div>
         ))}
      </motion.div>
   );
}

export default App;
