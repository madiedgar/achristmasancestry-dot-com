export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f9fff1] border-b-2 border-[#458352] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-[#458352]">A Christmas Ancestry</h1>
          </div>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#458352] hover:opacity-70 transition-opacity"
            >
              About Me
            </button>
            <a
              href="#buy"
              className="bg-[#458352] text-[#f9fff1] px-6 py-2 rounded hover:opacity-90 transition-opacity"
            >
              Buy the Book
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
