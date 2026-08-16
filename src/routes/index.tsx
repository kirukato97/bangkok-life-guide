import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/bangkok-hero.jpg";

const TELEGRAM = "https://t.me/bangkok_relocation";

const TITLE = "Переезд в Бангкок — сопровождение релокации под ключ";
const DESCRIPTION =
  "Помощь с переездом в Бангкок: визы, жильё, банк, страховка и поддержка на месте. Город для жизни, а не бесконечный отпуск.";

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
  }),
  component: Index,
});

function CtaButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
      : "border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10";
  return (
    <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Section({
  id,
  children,
  tone = "default",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "default" | "surface";
}) {
  return (
    <section
      id={id}
      className={`px-5 py-16 sm:py-24 ${tone === "surface" ? "bg-surface text-surface-foreground" : ""}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </p>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
              Переезд в Бангкок — спокойно, по шагам и без сюрпризов
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/85">
              Помогаю переехать в город, где можно жить долго: виза, жильё, банк, страховка и
              поддержка на месте. Живу в Бангкоке не первый год, знаю процессы, язык и людей,
              которые нужны для решения вопросов.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton>Написать в Telegram</CtaButton>
              <CtaButton variant="ghost">Оставить заявку</CtaButton>
            </div>
            <p className="mt-5 text-sm text-ink-foreground/70">
              Первая консультация — короткий разговор о вашей ситуации, без обязательств.
            </p>
          </div>
        </div>
      </header>

      {/* Problem */}
      <Section>
        <Eyebrow>Почему об этом думают сейчас</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
          Многие спокойно пересматривают горизонт планирования
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Хочется предсказуемости</h3>
            <p className="mt-3 text-muted-foreground">
              Экономическая нестабильность, общее напряжение и неопределённость заставляют
              трезво считать варианты на несколько лет вперёд. Это не побег и не эмоция — это
              рациональный поиск более устойчивых условий для себя и семьи.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Пляж перестаёт работать через 3–4 месяца</h3>
            <p className="mt-3 text-muted-foreground">
              Пхукет и Паттайя отлично подходят для отпуска. Но при долгой жизни это узкий круг
              общения, одни и те же места и лица, туристический ритм вокруг и ощущение, что жизнь
              поставлена на паузу. Работать и растить детей в таком режиме тяжело.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section tone="surface">
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
      <Section tone="surface">
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

      {/* How it works */}
      <Section>
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
      </Section>

      {/* Final CTA */}
      <section className="px-5 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-5xl rounded-3xl bg-ink px-6 py-14 text-center text-ink-foreground sm:px-14">
          <h2 className="text-3xl font-bold sm:text-4xl">Расскажите о своей ситуации</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-foreground/80">
            Напишите в Telegram пару слов о себе: кто едет, когда планируете и что уже пробовали.
            Отвечу честно, реально ли это в вашем случае и что для этого нужно.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton>Написать в Telegram</CtaButton>
          </div>
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
    </main>
  );
}
