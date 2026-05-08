type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#5A341F] sm:text-base">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
