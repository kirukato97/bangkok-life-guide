import { CtaButton, Eyebrow, Section } from "./shared";

const PACKAGES = [
  {
    name: "Консультация",
    price: "от 4 900 ₽",
    note: "60 минут, разбор вашей ситуации",
    popular: false,
    items: [
      "Разбираем ваш случай: работа, семья, бюджет, сроки",
      "Подбираем визовый сценарий и реальные альтернативы",
      "Считаем бюджет переезда и первых 3 месяцев",
      "Короткое резюме с планом действий после разговора",
    ],
  },
  {
    name: "Виза + жильё",
    price: "от 59 000 ₽",
    note: "самые частые задачи под ключ",
    popular: true,
    items: [
      "Полное сопровождение по выбранной визе и документам",
      "Подбор района и вариантов жилья под бюджет",
      "Просмотры, торг, проверка договора, заселение",
      "Сопровождение в иммиграционный офис",
      "Связь в Telegram на всём протяжении процесса",
    ],
  },
  {
    name: "Переезд под ключ",
    price: "от 129 000 ₽",
    note: "для семей и тех, кто едет надолго",
    popular: false,
    items: [
      "Всё из пакета «Виза + жильё»",
      "Банковский счёт, страховка, сим-карта, интернет",
      "Подбор школы или детского сада, запись на просмотры",
      "Встреча в аэропорту и первые дни в городе",
      "Поддержка 3 месяца после переезда",
    ],
  },
];

export function Packages() {
  return (
    <Section id="pricing" tone="surface">
      <Eyebrow>Пакеты и цены</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
        Понятная стоимость — без «уточним потом»
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Итоговая цена фиксируется после первого разговора и не меняется по ходу. Государственные
        пошлины и депозиты оплачиваются отдельно и всегда показываются заранее.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {PACKAGES.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col rounded-2xl border bg-card p-6 shadow-soft ${
              p.popular ? "border-primary ring-1 ring-primary" : "border-border"
            }`}
          >
            {p.popular && (
              <span className="mb-3 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                Выбирают чаще всего
              </span>
            )}
            <h3 className="text-lg font-semibold text-card-foreground">{p.name}</h3>
            <p className="mt-2 text-2xl font-extrabold text-card-foreground">{p.price}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
              {p.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-primary">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <CtaButton
              variant={p.popular ? "primary" : "outline"}
              className="mt-6 w-full text-sm"
            >
              Обсудить в Telegram
            </CtaButton>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Беру не больше 5 семей в месяц — чтобы каждым заниматься лично. Ближайшие места обычно
        разбирают за 1–2 недели.
      </p>
    </Section>
  );
}