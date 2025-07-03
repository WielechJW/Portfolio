export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Jakub Wielechowski. Wszelkie prawa zastrzeżone.
    </footer>
  );
}
