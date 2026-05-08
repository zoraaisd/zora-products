type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  const alignment = align === "left" ? "max-w-2xl text-left" : "mx-auto max-w-3xl text-center";

  return (
    <div className={alignment}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6C5DD3] sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-2xl font-black tracking-tight text-[#1F3A5F] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[#6B7280] sm:text-base">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
