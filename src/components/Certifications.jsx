function Certifications() {
  const certs = [
    {
      name: "IBM Full Stack Software Developer (Professional)",
      link: "https://coursera.org/share/0a3f21fa7c2c6b530f2a4f67ca3570c5"
    },
    {
      name: "Google IT Automation with Python (Professional)",
      link: "https://coursera.org/share/059fc0a9b93b3e9650963f849528eca9"
    },
    {
      name: "Google Cybersecurity (Professional)",
      link: "https://coursera.org/share/2beaafe16f69b28b6ae3b143dd7fbd3f"
    },
    {
      name: "IBM Data Analyst (Professional)",
      link: "https://coursera.org/share/25544bf3b47df9cc10540e95365d2c3f"
    }
  ];

  return (
    <section id="certifications" className="px-8 py-16 bg-gray-100">
      <h3 className="text-3xl font-bold mb-6 text-center">Certifications</h3>
      <ul className="max-w-3xl mx-auto list-disc list-inside space-y-2">
        {certs.map((c, i) => (
          <li key={i}>
            <a 
              href={c.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-blue-600 hover:underline"
            >
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Certifications;
