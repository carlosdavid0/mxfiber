// "use client";

// import { useState, useEffect } from "react";
// import { XIcon } from "lucide-react";

// export default function DevBanner() {
//   const [isVisible, setIsVisible] = useState(false);

//   if (!process.env.MODE) return null;

//   return (
//     <div className="fixed top-0 left-0 right-0 bg-yellow-400 text-black p-2 text-center z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         <span className="font-bold">Ambiente de Desenvolvimento</span>
//         <button
//           onClick={() => setIsVisible(false)}
//           className="text-black hover:text-gray-700 focus:outline-none"
//           aria-label="Fechar banner"
//         >
//           <XIcon className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   );
// }
