import { Eyebrow, Section } from "./shared";

const STATS = [
  ["6 лет", "живу и работаю в Бангкоке"],
  ["120+", "переездов сопровождено"],
  ["до 1 часа", "среднее время ответа"],
];

const STORIES = [
  {
    quote:
      "Полгода откладывали решение: боялись, что не потянем и застрянем без визы. Разложили бюджет по пунктам, оказалось реальнее, чем мы думали. Через семь недель были в Бангкоке с рабочей визой и квартирой в Ари.",
    author: "Дмитрий, разработчик",
  },
  {
    quote:
      "Главный страх был из-за ребёнка: школа, медицина, документы. Нам показали три школы, съездили на просмотры вместе, помогли со страховкой. Сын пошёл в первый класс через месяц после прилёта.",
    author: "Анна и Сергей, семья с ребёнком",
  },
  {
    quote:
      "Нужно было быстро перевести часть сбережений в понятную валюту и открыть счёт. Сделали за две недели, без историй «приходите завтра». Сэкономил месяцы своего времени.",
    author: "Игорь, предприниматель",
  },
];

export function Testimonials() {
  return (
    <Section>
      <Eyebrow>Результаты</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
        Люди с теми же сомнениями уже переехали
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {STATS.map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-6 text-center">
            <p className="text-3xl font-extrabold text-primary">{value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {STORIES.map((s) => (
          <figure key={s.author} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <blockquote className="text-sm leading-relaxed text-card-foreground">
              «{s.quote}»
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
              {s.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}