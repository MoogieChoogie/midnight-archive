import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Archive, BookOpen, Feather, Search, Sparkles } from "lucide-react";

const images = {
  hero: "/images/hero-colllage.png",
  midnightThoughts: "/images/midnight-thoughts.png",
  lettersNeverSent: "/images/letters-never-sent.png",
  rainArchives: "/images/rain-archives.png",
  unfinishedThings: "/images/unfinished-things.png",
  quoteDivider: "/images/quote-divider.png",
  readerTexture: "/images/reader-texture.png",
};
const featuredPoem = {
  collectionImageOne: images.midnightThoughts,
  collectionImageTwo: images.lettersNeverSent,
  label: "featured poem",
  title: "Relapsing the \"perfect\" I had",
  body: `I had a heaven built of fire,
a gentle hand, a sharpened thorn,
the kind of love I would desire,
the kind I wish was never born.

We laughed through nights the world forgot,
with games that stole the clock away,
your stupid jokes—God, I laughed a lot—
still haunt the quiet parts of day.

You gave me warmth, you gave me ache,
a kiss that felt like coming home,
a love so sweet it had to break,
a garden grown around a bone.

...`,
};

// EDIT HERE: Add your own poem collections.
// You only need to change the title, subtitle, mood, and poems.
const archiveCollections = [
  {
    id: "midnight-thoughts",
    title: "Midnight Thoughts",
    subtitle: "poems for the hours no one sees.",
    mood: "quiet / intimate / sleepless",
    image: images.midnightThoughts,
    poems: [
      {
        title: "Relapsing the \"perfect\" I had",
        body: `I had a heaven built of fire,
a gentle hand, a sharpened thorn,
the kind of love I would desire,
the kind I wish was never born.

We laughed through nights the world forgot,
with games that stole the clock away,
your stupid jokes—God, I laughed a lot—
still haunt the quiet parts of day.

You gave me warmth, you gave me ache,
a kiss that felt like coming home,
a love so sweet it had to break,
a garden grown around a bone.

There was enough of lust to burn,
but more than love enough to drown,
and though I knew I should not turn,
I kept on falling, further down.

You were the dream I begged to keep,
the nightmare dressed in soft perfume,
the prayer I whispered half-asleep,
the candle dying in my room.

I’m glad the door has finally closed,
I breathe more freely than before,
but still, my foolish heart supposed
it might have stayed a little more.

So here I stand with empty hands,
relieved, regretful, torn in two—
the worst thing I could understand
was also everything I knew.

I do not want the wound again,
I do not miss the poison that grew,
but God, I miss the person then—
the one I was — the one I knew.

- wala talaga e2 pinaghuhugutan I swear <3`,
      },
      {
        title: "Almost",
        body: `Some stories do not end the same
        or so I thought... that's what I knew.
        Was I the one to blame?
        Could I have saved what we once knew?
        
        I always thought we were the "end",
        I was mistaken — you weren't godsent.
        As rules work, you too bend.
        A temporary love, as if lent.
        `,
      },
    ],
  },
  {
    id: "letters-never-sent",
    title: "Letters Never Sent",
    subtitle: "the words we meant to give, but never did.",
    mood: "distant / unsaid / tender",
    image: images.lettersNeverSent, 
    poems: [
      {
        title: "Unposted",
        body: `I folded the letter
until it became smaller
than the courage
I never had.`,
      },
    ],
  },
  {
    id: "rain-archives",
    title: "Rain Archives",
    subtitle: "written in drops, kept in pages.",
    mood: "cold / reflective / cinematic",
    image: images.rainArchives,
    poems: [
      {
        title: "Window Weather",
        body: `The rain kept speaking
in a language
only lonely rooms
seem to understand.`,
      },
    ],
  },
  {
    id: "unfinished-things",
    title: "Unfinished Things",
    subtitle: "drafts, fragments, and almost-poems.",
    mood: "fragmented / raw / found",
    image: images.unfinishedThings,
    poems: [
      {
        title: "Fragment I",
        body: `Not every ending arrives loudly.

Sometimes it simply stops
replying.`,
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function OrnateFrame({ variant = "library" }) {
  const shapes = useMemo(() => {
    const library = [
      "left-[8%] top-[14%] h-48 w-24 rounded-t-full border border-[#8c6c49]/40 bg-[#211811]",
      "left-[22%] top-[8%] h-64 w-24 border border-[#8c6c49]/30 bg-[#150f0c]",
      "left-[37%] top-[18%] h-52 w-24 rounded-t-full border border-[#8c6c49]/40 bg-[#271c13]",
      "right-[26%] top-[10%] h-64 w-24 border border-[#8c6c49]/30 bg-[#17100c]",
      "right-[9%] top-[16%] h-48 w-24 rounded-t-full border border-[#8c6c49]/40 bg-[#211811]",
    ];
    const moon = [
      "left-[12%] top-[22%] h-40 w-40 rounded-full border border-[#b99a6b]/20 bg-[#d1b78d]/10 blur-[1px]",
      "left-[26%] top-[34%] h-24 w-16 rounded-t-full border border-[#8c6c49]/40 bg-[#211811]",
      "right-[18%] top-[18%] h-56 w-32 rounded-t-full border border-[#8c6c49]/30 bg-[#150f0c]",
      "right-[34%] top-[42%] h-28 w-20 border border-[#8c6c49]/30 bg-[#271c13]",
    ];
    return variant === "moon" ? moon : library;
  }, [variant]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(171,126,76,.24),transparent_35%),linear-gradient(180deg,rgba(0,0,0,.25),#0d0b09_88%)]" />
      {shapes.map((s, i) => (
        <div key={i} className={`absolute ${s} shadow-2xl`} />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0b09] to-transparent" />
    </div>
  );
}

function Dust() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden opacity-40">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#d6bd90]/40"
          initial={{
            x: `${(i * 37) % 100}vw`,
            y: `${(i * 53) % 100}vh`,
            opacity: 0.1,
          }}
          animate={{
            y: [`${(i * 53) % 100}vh`, `${((i * 53) % 100) - 18}vh`],
            opacity: [0.1, 0.55, 0.1],
          }}
          transition={{ duration: 9 + (i % 7), repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function ArchiveCard({ collection, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -8 }}
      className={`group relative min-h-[340px] md:min-h-[450px] overflow-hidden border p-5 text-left transition ${
        active
          ? "border-[#b99a6b] bg-[#20170f]"
          : "border-[#3d2f23] bg-[#15110e] hover:border-[#8b6a48]"
      }`}
    >
      <img
        src={collection.image}
        alt={collection.title}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/90 via-[#0d0b09]/35 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-[#b99a6b]">
          {collection.mood}
        </p>
        <h3 className="font-serif text-3xl text-[#ead8bd]">
          {collection.title}
        </h3>
        <p className="mt-3 font-serif text-lg leading-relaxed text-[#c8b394]">
          {collection.subtitle}
        </p>
      </div>
    </motion.button>
  );
}

export default function TheMidnightArchive() {
  const [activeCollectionId, setActiveCollectionId] = useState(archiveCollections[0].id);
  const [activePoemIndex, setActivePoemIndex] = useState(0);

  const activeCollection = archiveCollections.find((item) => item.id === activeCollectionId) || archiveCollections[0];
  const activePoem = activeCollection.poems[activePoemIndex] || activeCollection.poems[0];

  function chooseCollection(id) {
    setActiveCollectionId(id);
    setActivePoemIndex(0);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0b09] text-[#d8c6ad] selection:bg-[#7d6246] selection:text-white">
      <Dust />
      <div className="grain-overlay" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.12] bg-[radial-gradient(circle_at_20%_10%,#9d7a52_0,transparent_25%),radial-gradient(circle_at_80%_30%,#5a3d2c_0,transparent_28%),radial-gradient(circle_at_50%_90%,#8b6a48_0,transparent_20%)]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:44px_44px]" />

      <nav className="sticky top-0 z-50 border-b border-[#3d2f23]/70 bg-[#0d0b09]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs tracking-[0.28em] text-[#c9b79e]">
          <a href="#home" className="flex items-center gap-3 font-serif uppercase hover:text-white">
            <Archive size={16} /> The Midnight Archive
          </a>
          <div className="hidden items-center gap-10 md:flex">
            <a href="#before" className="hover:text-white">Before</a>
            <a href="#collections" className="hover:text-white">Collections</a>
            <a href="#reader" className="hover:text-white">Reader</a>
            <a href="#keeper" className="hover:text-white">Keeper</a>
          </div>
          <Search size={18} className="text-[#c9b79e]" />
        </div>
      </nav>

      <header id="home" className="relative min-h-[94vh] overflow-hidden border-b border-[#2c221a]">
        <img
  src={images.hero}
  alt=""
  className="absolute inset-0 h-full w-full object-cover opacity-65"
/>
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_34%,transparent_0,rgba(13,11,9,.1)_28%,#0d0b09_88%)]" />
        <div className="relative z-20 mx-auto flex min-h-[94vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.9 }} className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-[#b89f7b]">
            <Sparkles size={15} /> Vibe coded poetry archive for fun <Sparkles size={15} />
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1, delay: 0.1 }} className="max-w-5xl font-serif text-6xl leading-[0.9] text-[#ead8bd] md:text-9xl">
            The Midnight<br />Archive
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1, delay: 0.25 }} className="mt-8 max-w-2xl font-serif text-2xl italic leading-relaxed text-[#cbb89c]">
            a collection of unsent things, quiet feelings, and almost-stories
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1, delay: 0.4 }} className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
            <a href="#reader" className="rounded-full border border-[#806447] px-7 py-4 text-xs uppercase tracking-[0.28em] text-[#e2cfb4] transition hover:bg-[#e2cfb4] hover:text-[#0d0b09]">
              Open the Reader
            </a>
            <a href="#collections" className="rounded-full border border-[#3d2f23] px-7 py-4 text-xs uppercase tracking-[0.28em] text-[#c9b79e] transition hover:border-[#806447] hover:text-white">
              View Collections
            </a>
          </motion.div>
        </div>
      </header>

      <main className="relative z-20">
        <section id="before" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="relative overflow-hidden border border-[#4c3929] bg-[#14100d]/90 p-8 shadow-2xl md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#8c6c49]/20 bg-[#b99a6b]/5" />
            <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#b89f7b]">entry note</p>
                <h2 className="font-serif text-5xl text-[#dfccb1]">Before You Read</h2>
                <div className="mt-7 h-px w-40 bg-[#6f553b]" />
              </div>
              <div className="space-y-7 font-serif text-xl leading-relaxed text-[#d5c2a8]">
                <p>These are thoughts, not confessions.</p>
                <p>None of these poems are dedicated to anyone in particular.</p>
                <p>Some are imagined.<br />Some emotional.<br />Some simply written because the feeling existed.</p>
                <p className="pt-4 italic text-[#e2cfb4]">This space is simply a collection of feelings.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="relative min-h-[520px] overflow-hidden border-y border-[#2c221a]">
          <img
  src={images.quoteDivider}
  alt=""
  className="absolute inset-0 h-full w-full object-cover opacity-80"
/>
          <div className="absolute inset-0 bg-[#0d0b09]/75" />
          <div className="relative z-20 flex min-h-[520px] items-center justify-center px-6 text-center">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="max-w-2xl font-serif text-4xl leading-tight text-[#dcc8ab] md:text-6xl">
              Some feelings arrive<br />too late to become anything.
            </motion.p>
          </div>
        </section>

<section id="featured" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
  <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <p className="text-xs uppercase tracking-[0.35em] text-[#b89f7b]">
          {featuredPoem.label}
        </p>
        <div className="h-px flex-1 bg-[#4c3929]" />
      </div>

      <h2 className="font-serif text-5xl text-[#e1d0b6]">
        {featuredPoem.title}
      </h2>

      <div className="max-w-md whitespace-pre-line font-serif text-xl leading-relaxed text-[#d5c2a8]">
        {featuredPoem.body}
      </div>

      <a
        href="#reader"
        className="inline-flex items-center gap-3 pt-4 text-xs uppercase tracking-[0.28em] text-[#b89f7b] transition hover:text-white"
      >
        Read more →
      </a>
    </motion.div>

    <div className="grid gap-6 md:grid-cols-2">
      <div className="relative min-h-[340px] overflow-hidden border border-[#4c3929] bg-[#15110e]">
        <img
          src={featuredPoem.collectionImageOne}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/70 via-transparent to-transparent" />
      </div>

      <div className="relative min-h-[340px] overflow-hidden border border-[#4c3929] bg-[#15110e] md:translate-y-10">
        <img
          src={featuredPoem.collectionImageTwo}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/70 via-transparent to-transparent" />
      </div>
    </div>
  </div>
</section>

        <section id="collections" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b89f7b]">choose a drawer</p>
            <h2 className="mt-3 font-serif text-5xl text-[#e1d0b6]">Collections</h2>
            <p className="mx-auto mt-5 max-w-2xl font-serif text-lg leading-relaxed text-[#bca88d]">
              Click a collection to change the poem reader below. Replace the sample poems in the data section with your own writing anytime.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {archiveCollections.map((collection) => (
              <ArchiveCard
                key={collection.id}
                collection={collection}
                active={collection.id === activeCollectionId}
                onClick={() => chooseCollection(collection.id)}
              />
            ))}
          </div>
        </section>

        <section id="reader" className="border-y border-[#2c221a] bg-[#100d0b]/80 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#b89f7b]"><BookOpen size={16} /> now reading</p>
              <h2 className="font-serif text-5xl text-[#e1d0b6]">{activeCollection.title}</h2>
              <p className="mt-4 font-serif text-xl italic text-[#bca88d]">{activeCollection.subtitle}</p>
              <div className="mt-10 space-y-3">
                {activeCollection.poems.map((poem, index) => (
                  <button
                    key={poem.title}
                    onClick={() => setActivePoemIndex(index)}
                    className={`block w-full border px-5 py-4 text-left font-serif text-lg transition ${
                      activePoemIndex === index
                        ? "border-[#b99a6b] bg-[#211811] text-[#ead8bd]"
                        : "border-[#3d2f23] bg-[#15110e] text-[#bca88d] hover:border-[#8b6a48] hover:text-white"
                    }`}
                  >
                    {poem.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden border border-[#6b5138] bg-[#15110e] p-8 shadow-2xl shadow-black/50 md:p-16">
  <img
    src={images.readerTexture}
    alt=""
    className="absolute inset-0 h-full w-full object-cover opacity-15"
  />

  <div className="absolute inset-0 bg-[#15110e]/75" />

  <div className="absolute right-8 top-8 text-[#8c6c49]/30">
    <Feather size={80} />
  </div>
              <AnimatePresence mode="wait">
                <motion.article
                  key={`${activeCollection.id}-${activePoem.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45 }}
                  className="relative z-10"
                >
                  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#b89f7b]">selected piece</p>
                  <h3 className="font-serif text-5xl leading-tight text-[#ead8bd] md:text-6xl">
  {activePoem.title}
</h3>

<div className="mt-10 max-w-2xl whitespace-pre-line font-serif text-xl leading-loose text-[#d5c2a8] md:text-2xl">
  {activePoem.body}
</div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="keeper" className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b89f7b]">archive keeper</p>
          <h2 className="mt-4 font-serif text-5xl text-[#e1d0b6]">for the feelings that needed a room</h2>
          <p className="mt-8 font-serif text-xl leading-relaxed text-[#cdb99e]">
            This archive is intentionally anonymous: less biography, more atmosphere. Less explanation, more silence. The writing can change. The rooms can change. The feeling remains.
          </p>
        </section>
      </main>
    </div>
  );
}
