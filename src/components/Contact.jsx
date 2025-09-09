function Contact() {
  return (
    <section id="contact" className="px-8 py-16 bg-white text-center">
      <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
      <p className="text-gray-700 mb-6">
        Feel free to reach out via email or connect on social media.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:pranayraj1007@gmail.com" className="text-blue-600 hover:underline">Email</a>
        <a href="https://github.com/PranayRaj1007" className="text-blue-600 hover:underline">GitHub</a>
        <a href="http://www.linkedin.com/in/pranayraj1007" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="https://leetcode.com/u/pranayraj1007/" className="text-blue-600 hover:underline">LeetCode</a>
        <a href="https://www.hackerrank.com/profile/pranayraj1007" className="text-blue-600 hover:underline">HackerRank</a>
        <a href="https://www.coursera.org/account-profile" className="text-blue-600 hover:underline">Coursera</a>
      </div>
    </section>
  );
}
export default Contact;
