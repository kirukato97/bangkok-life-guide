import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/bangkok-hero.jpg";
import { CtaButton, Eyebrow, InlineCta, Section, TELEGRAM } from "@/components/landing/shared";
import { Packages } from "@/components/landing/packages";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq, FAQ_ITEMS } from "@/components/landing/faq";

const TITLE = "Переезд в Бангкок за 30–60 дней — виза, жильё, быт под ключ";
const DESCRIPTION =
  "Сопровождение релокации в Бангкок: виза, жильё, банк, страховка, школа и поддержка на месте. Фиксированная цена, 120+ переездов, бесплатный разбор ситуации.";

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Сопровождение переезда в Бангкок",
  serviceType: "Relocation consulting",
  areaServed: "Bangkok, Thailand",
  description: DESCRIPTION,
  provider: { "@type": "Organization", name: "Bangkok Relocation" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(SERVICE_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background pb-20 text-foreground md:pb-0">
      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Панорама Бангкока с линией надземного метро на закате"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="mx-auto flex w-full max-w-5xl flex-col px-5 pb-20 pt-10 sm:pb-28 sm:pt-14">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <span className="truncate text-sm font-semibold tracking-wide text-ink-foreground">
              Bangkok Relocation
            </span>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg border border-ink-foreground/30 px-4 py-2 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              Telegram
            </a>
          </div>

          <div className="mt-16 max-w-2xl sm:mt-24">
            <p className="mb-4 inline-block rounded-full border border-ink-foreground/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-ink-foreground/85">
              Только Бангкок
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.08] text-ink-foreground sm:text-6xl">
              Переезд в Бангкок за 30–60 дней — виза, жильё и быт под ключ
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/85">
              Беру на себя весь процесс: визу, поиск квартиры, банковский счёт, страховку и школу.
              Живу в Бангкоке 6 лет, сопроводил 120+ переездов. Цена фиксируется до старта, вы
              просто прилетаете в готовую жизнь.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton>Разобрать мою ситуацию бесплатно</CtaButton>
              <CtaButton variant="ghost" href="#pricing">
                Посмотреть цены
              </CtaButton>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-foreground/75">
              <li>6 лет в Бангкоке</li>
              <li>120+ переездов</li>
              <li>Ответ в течение часа</li>
              <li>Первая консультация — бесплатно</li>
            </ul>
          </div>
        </div>
      </header>

      {/* Why now */}
      <Section>
        <Eyebrow>Почему сейчас</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
          Планировать на три года вперёд стало почти невозможно
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Экономика в России ведёт себя непредсказуемо: цены растут, рубль штормит, доходы и планы
          приходится пересчитывать каждые несколько месяцев. Это не про политику — это про то, что
          сложно строить жизнь семьи, когда горизонт планирования сжался до квартала.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            [
              "Деньги обесцениваются быстрее, чем растут доходы",
              "Накопления теряют вес, ставки и курс меняются рывками, а привычная «подушка» перестаёт казаться подушкой.",
            ],
            [
              "Тревога за будущее детей",
              "Школа, медицина, язык, возможности через 5–10 лет — родителям хочется понимать, что будет, а не гадать.",
            ],
            [
              "Ощущение, что окно сужается",
              "Каждый год визы, платежи и логистика становятся чуть сложнее. Те, кто уехал раньше, проходили путь легче.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-lg font-medium">
          Бангкок — рабочий и недорогой способ вернуть себе предсказуемость: сохранить доход,
          снизить расходы и жить в нормальном большом городе, а не «пережидать».
        </p>
        <InlineCta
          text="Напишите пару слов о своей ситуации — за час отвечу, реально ли это в вашем случае, во сколько обойдётся и с чего начать."
          label="Разобрать мою ситуацию"
        />
      </Section>

      {/* Beach problem */}
      <Section tone="surface">
        <Eyebrow>Частая ошибка</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
          Пляж перестаёт работать через 3–4 месяца
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Пхукет и Паттайя отлично подходят для отпуска. Но при долгой жизни это узкий круг
          общения, одни и те же места и лица, туристический ритм вокруг и ощущение, что жизнь
          поставлена на паузу. Работать и растить детей в таком режиме тяжело — а второй переезд
          стоит денег и нервов.
        </p>
      </Section>

      {/* Solution */}
      <Section>
        <Eyebrow>Решение</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
          Бангкок — обычный большой город, в котором просто жить
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Инфраструктура", "Всё рядом: сервисы, коворкинги, школы, магазины, доставка."],
            ["Транспорт", "BTS и MRT позволяют жить без машины и не стоять в пробках."],
            ["Медицина", "Международные госпитали с понятным сервисом и страховками."],
            ["Еда", "От уличной кухни до любых кухонь мира — в любом бюджете."],
            ["Районы на выбор", "Тихий Ари, деловой Сатхон, семейный Пхромпонг, зелёный Ратчада."],
            ["Анонимность", "Город большой: вас не обсуждают, круг общения вы формируете сами."],
          ].map(([title, text]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cost of living */}
      <Section tone="surface">
        <Eyebrow>Сколько это стоит на самом деле</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
          Бангкок дешевле, чем кажется из Москвы
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Ориентировочный месячный бюджет семьи из трёх человек. Цифры реальные, не витринные —
          на консультации считаем ваш вариант.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-muted-foreground">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Статья расходов
                </th>
                <th scope="col" className="px-5 py-3 font-semibold">
                  В месяц
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-card-foreground">
              {[
                ["Квартира 1–2 спальни в хорошем районе", "45 000 – 75 000 ₽"],
                ["Еда: дом, кафе, уличная кухня", "30 000 – 45 000 ₽"],
                ["Транспорт (BTS/MRT, такси)", "6 000 – 10 000 ₽"],
                ["Медстраховка на семью", "8 000 – 15 000 ₽"],
                ["Школа или детский сад", "от 25 000 ₽"],
              ].map(([item, price]) => (
                <tr key={item}>
                  <td className="px-5 py-3">{item}</td>
                  <td className="px-5 py-3 font-medium">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Итого комфортная жизнь — примерно от 115 000 ₽ в месяц на семью. Для пары без детей —
          заметно меньше.
        </p>
      </Section>

      {/* Why us */}
      <Section>
        <Eyebrow>Почему со мной</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
          Опыт на месте, а не советы из чатов
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Живу в Бангкоке несколько лет", "Знаю город изнутри: районы, цены, бытовые нюансы."],
            ["Разбираюсь в законодательстве", "Понимаю визовые категории, сроки и требования к документам."],
            ["Есть связи и рабочие схемы", "Проверенные агенты, юристы, арендодатели, клиники."],
            ["Поддержка офлайн", "Могу приехать, съездить в офис, позвонить и договориться на тайском."],
          ].map(([title, text]) => (
            <li key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Services */}
      <Section>
        <Eyebrow>Услуги</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">С чем помогаю</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            [
              "Визы",
              "Подбор подходящей визовой категории под вашу ситуацию, подготовка документов, сопровождение процесса и продлений.",
            ],
            [
              "Поиск жилья",
              "Подбор районов и вариантов под бюджет и задачи, просмотры, проверка договора и заселение.",
            ],
            [
              "Банк, страховка, быт",
              "Открытие счёта, оформление страховки, сим-карта, интернет, школы и детские сады, водительские вопросы.",
            ],
            [
              "Координация на месте",
              "Сопровождение в иммиграционный офис, банк и клинику, перевод и связь с местными подрядчиками.",
            ],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Packages />

      {/* How it works */}
      <Section tone="surface">
        <Eyebrow>Как это работает</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">Четыре простых шага</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Знакомство", "Короткий разговор в Telegram: ваша ситуация, сроки, бюджет, состав семьи."],
            ["План переезда", "Подбираем визовый сценарий, район и порядок действий с понятной сметой."],
            ["Подготовка", "Собираем документы, бронируем жильё, планируем прилёт и первые недели."],
            ["Поддержка на месте", "Сопровождаю по всем инстанциям и остаюсь на связи после переезда."],
          ].map(([title, text], i) => (
            <li key={title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent font-bold text-accent-foreground">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
        <InlineCta
          text="Первый шаг занимает 10 минут: вы пишете в Telegram, я задаю несколько вопросов и говорю честно, что реально в вашем случае."
          label="Написать в Telegram"
        />
      </Section>

      <Testimonials />

      <Faq />

      {/* Final CTA */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-5xl rounded-3xl bg-ink px-6 py-14 text-center text-ink-foreground sm:px-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Через два месяца вы можете жить уже здесь
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-foreground/80">
            Напишите в Telegram пару слов о себе: кто едет, когда планируете и что уже пробовали.
            Отвечу в течение часа: реально ли это в вашем случае, сколько будет стоить и какой
            первый шаг. Бесплатно и без обязательств.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton>Разобрать мою ситуацию бесплатно</CtaButton>
          </div>
          <p className="mt-5 text-sm text-ink-foreground/65">
            Беру не больше 5 семей в месяц — чтобы вести каждый переезд лично.
          </p>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto w-full max-w-5xl space-y-3 text-sm text-muted-foreground">
          <p>
            Решения по визам и разрешениям принимают иммиграционные органы Таиланда. Я помогаю
            подготовиться и сопровождаю процесс, но не могу гарантировать результат и не влияю на
            решения государственных органов.
          </p>
          <p>© {new Date().getFullYear()} Bangkok Relocation</p>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          href={TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground"
        >
          Написать в Telegram
        </a>
      </div>
    </main>
  );
}
