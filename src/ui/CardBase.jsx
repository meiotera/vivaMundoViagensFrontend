import Heading from "./Heading";

const CardBase = ({
  imageUrl,
  title,
  description,
  footer,
  width = "min-w-60",
}) => {
  return (
    <div
      className={`flex flex-col ${width} rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer max-w-64`}
    >
      {/* Imagem */}
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Conteúdo */}
      <div className="p-4 flex flex-col flex-grow">
        <Heading tag="h3">{title}</Heading>

        {description && (
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        )}

        {/* Rodapé customizável */}
        {footer && <div className="mt-auto">{footer}</div>}
      </div>
    </div>
  );
};

export default CardBase;
