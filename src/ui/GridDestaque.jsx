// import Heading from "./Heading";

// const GridDestaque = ({ destino, index }) => {
//   const { Imagem, Destino } = destino;

//   const imageUrl = Imagem?.url
//     ? `http://localhost:1337${Imagem.url}`
//     : "https://via.placeholder.com/400x300";

//   const altText = Destino || "Imagem do destino";

//   // Spans SOMENTE a partir do md
//   const gridClasses = [
//     "md:col-span-1 md:row-span-3", // Card 1
//     "md:col-span-1 md:row-span-1", // Card 2
//     "md:col-span-1 md:row-span-2 lg:col-span-2", // Card 3 ✅
//     "md:col-span-1 md:row-span-2", // Card 4
//     "md:col-span-1 md:row-span-1", // Card 5
//     "md:col-span-1 md:row-span-1", // Card 6
//     "md:col-span-1 md:row-span-1", // Card 7
//   ];

//   const spanClass = gridClasses[index] ?? "md:col-span-1 md:row-span-1";

//   return (
//     <div
//       className={`
//         relative overflow-hidden rounded-lg group
//         ${spanClass}
//       `}
//     >
//       {/* Overlay */}
//       <div
//         className="
//           absolute inset-0 z-10
//           bg-gradient-to-t from-black/80 via-black/40 to-transparent
//         "
//       />

//       {/* Conteúdo */}
//       <div className="absolute bottom-4 left-4 right-4 z-20">
//         <h3 className="md:text-4xl lg:text-3xl font-bold text-4xl text-white drop-shadow-md capitalize">
//           {Destino}
//         </h3>

//         <p className="mt-1 text-xs sm:text-sm text-orange-300 font-semibold tracking-wide">
//           Confira o destino
//         </p>
//       </div>

//       {/* Imagem */}
//       <img
//         src={imageUrl}
//         alt={altText}
//         loading="lazy"
//         className="
//           w-full h-full object-cover
//           transition-transform duration-500 ease-out
//           group-hover:scale-110
//         "
//       />
//     </div>
//   );
// };

// export default GridDestaque;
const GridDestaque = ({ destino, index }) => {
  const { Imagem, Destino } = destino;

  const imageUrl = Imagem?.url
    ? `http://localhost:1337${Imagem.url}`
    : "https://via.placeholder.com/400x300";

  const altText = Destino || "Imagem do destino";

  // Spans SOMENTE a partir do md
  const gridClasses = [
    "md:col-span-1 md:row-span-3",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-2 lg:col-span-2",
    "md:col-span-1 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
  ];

  const spanClass = gridClasses[index] ?? "md:col-span-1 md:row-span-1";

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl group
        h-48 sm:h-56 md:h-auto
        cursor-pointer
        ${spanClass}
      `}
    >
      {/* Overlay */}
      <div
        className="
          absolute inset-0 z-10
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
        "
      />

      {/* Conteúdo */}
      <div className="absolute bottom-3 left-3 right-3 z-20">
        <h3
          className="
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            font-bold
            text-white
            drop-shadow-md
            capitalize
            leading-tight
          "
        >
          {Destino}
        </h3>

        <p className="mt-1 text-xs sm:text-sm text-orange-300 font-semibold tracking-wide">
          Confira o destino
        </p>
      </div>

      {/* Imagem */}
      <img
        src={imageUrl}
        alt={altText}
        loading="lazy"
        className="
          w-full h-full object-cover
          transition-transform duration-500 ease-out
          group-hover:scale-110
        "
      />
    </div>
  );
};

export default GridDestaque;
