type ComingSoonPanelProps = {
  title: string;
  description: string;
  steps: string[];
};

export function ComingSoonPanel({
  title,
  description,
  steps,
}: ComingSoonPanelProps) {
  return (
    <div className="card-modern">
      <div className="mb-4 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
        Veritabanı bağlantısı gerekli
      </div>
      <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
      <p className="mt-2 text-sm text-ink-muted">{description}</p>
      <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-ink-muted">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="mt-6 text-xs text-ink-faint">
        Detaylı karşılaştırma: proje kökündeki{" "}
        <code className="text-sky-600">ADMIN.md</code>
      </p>
    </div>
  );
}
