export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              InterviewX 🚀
            </h2>
            <p className="text-gray-400">
              AI-powered interview preparation platform for students and professionals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Resume Builder</li>
              <li>Mock Interviews</li>
              <li>Coding Practice</li>
              <li>Aptitude Tests</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 InterviewX. All rights reserved.
        </p>

      </div>
    </footer>
  );
}