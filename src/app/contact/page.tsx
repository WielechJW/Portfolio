import Link from "next/link";

export default function TechPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 py-20">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
        Mój <span className="text-blue-600 dark:text-blue-400">kontakt</span>
      </h1>

      <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-xl">
        Frontend Developer z pasją do tworzenia eleganckich, responsywnych i szybkich aplikacji webowych.
      </p>

      <Link
        href="/projects"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Zobacz moje projekty
      </Link>
    </section>
  );
}
