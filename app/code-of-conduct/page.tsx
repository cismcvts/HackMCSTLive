"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center py-16 px-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Code of Conduct
          </h1>
          <h6 className="text-gray-500 mb-5">Last updated March 12, 2024</h6>

          <p className="mb-6">
            hackMCST is an event intended for learning, collaboration, engagement, and fun. We want to ensure that our
            participants feel welcomed, included, and safe in our environment. All attendees—including staff,
            participants, and judges—are expected to conform to the following Code of Conduct.
          </p>

          <div className="space-y-6">
            <section>
              <p>
                <strong>All participants are expected to show respect and courtesy to others at our event. </strong>
                Be kind, thoughtful, and supportive of everyone and their ideas; encourage and help others when they are
                in need.
              </p>
            </section>

            <section>
              <p>
                <strong>We don't tolerate any forms of harassment, discrimination, or bullying</strong>: including
                physical harassment, sexual harassment, and offensive verbal comments related to someone's gender,
                sexual orientation, disability, physical appearance, body size, race, age, religion, etc.
                <strong>
                  {" "}
                  Attendees asked to stop any behavior deemed as harassment, discrimination, or bullying are expected to
                  comply immediately.{" "}
                </strong>
                If an attendee fails to comply, they will be asked to leave the event.
              </p>
            </section>
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                AI Policy
              </h2>
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-2">Prohibited AI Use</h3>
                  <ul className="list-none space-y-2">
                    <li>
                      ❌ <strong>AI-Generated Code</strong> – Copy-pasting AI-generated code into your project without
                      significant modification or understanding.
                    </li>
                    <li>
                      ❌ <strong>AI-Generated Project Structures</strong> – Using AI to generate entire files, full
                      project templates, or core algorithmic solutions.
                    </li>
                    <li>
                      ❌ <strong>AI-Based Debugging Without Learning</strong> – If AI fixes errors for you and you don't
                      understand why, that's a problem.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Permitted Actions</h3>
                  <ul className="list-none space-y-2">
                    <li>
                      ✔️ <strong>Learning Before the Event</strong> – You can study documentation, tutorials, or concepts
                      beforehand, but not write actual project code.
                    </li>
                    <li>
                      ✔️ <strong>Using Public Libraries & APIs</strong> – You may use third-party libraries, frameworks,
                      and APIs, as long as your implementation is original and done during the event.
                    </li>
                    <li>
                      ✔️ <strong>Code from Official Documentation</strong> – Small snippets (e.g., syntax examples from
                      official docs) are fine, but they cannot form a significant portion of your project.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-2">Prohibited Actions</h3>
                  <ul className="list-none space-y-2">
                    <li>
                      ❌ <strong>Pre-Written Code</strong> – No part of the project's codebase may be written before the
                      hackathon officially begins.
                    </li>
                    <li>
                      ❌ <strong>Pre-Built Projects</strong> – Forking or modifying an existing personal or public
                      project (even your own) is not allowed.
                    </li>
                    <li>
                      ❌ <strong>Reusing Old Code</strong> – You may not copy-paste code from previous projects, whether
                      written by you or someone else.
                    </li>
                    <li>
                      ❌ <strong>Hidden Preparation</strong> – Writing pseudocode that is so detailed it can be quickly
                      converted into working code is prohibited.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-600 mb-2">Rule Enforcement</h3>
                  <ul className="list-none space-y-2">
                    <li>
                      ⚠️ <strong>Code Audits</strong> – Judges will inspect commit history to ensure all work was done
                      during the hackathon.
                    </li>
                    <li>
                      ⚠️ <strong>Live Coding Checks</strong> – Teams may be asked to demonstrate their project live to
                      confirm functionality.
                    </li>
                    <li>
                      ⚠️ <strong>Technical Questioning</strong> – Judges will ask how specific parts of your code were
                      written. If you can't explain it, penalties will apply.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Essential Software & Hardware Requirements
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">💻 Development Tools:</p>
                      <ul className="list-none pl-6 space-y-1">
                        <li>✅ Code editor or IDE (VS Code, IntelliJ, PyCharm, etc.)</li>
                        <li>🔹 We recommend VS Code (free & lightweight)</li>
                        <li>✅ Git installed locally</li>
                        <li>✅ GitHub account created and configured</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">🔌 Hardware:</p>
                      <ul className="list-none pl-6 space-y-1">
                        <li>💻 Laptop with sufficient processing power and memory</li>
                        <li>⚡ 1.6 GHz or faster processor</li>
                        <li>🧠 1 GB of RAM</li>
                        <li>🖥️ Windows or Mac</li>
                        <li>🔋 Charger and possibly extension cords</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">📊 GitHub Setup Instructions</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">🚀 Create a new repository:</p>
                      <pre className="bg-gray-100 border border-gray-300 p-3 rounded-md text-sm overflow-x-auto text-left text-gray-800">
                        <code>
                          # Initialize a new repository git init # Add a remote origin (replace with your actual repo
                          URL) git remote add origin https://github.com/username/repo-name.git
                        </code>
                      </pre>
                    </div>
                    <div>
                      <p className="font-medium">🏁 Initial commit setup:</p>
                      <pre className="bg-gray-100 border border-gray-300 p-3 rounded-md text-sm overflow-x-auto text-left text-gray-800">
                        <code>
                          # Create a README echo "# Hackathon Project" {">"} README.md # Add and commit git add
                          README.md git commit -m "Initial commit" # Push to remote git push -u origin main
                        </code>
                      </pre>
                    </div>
                    <div>
                      <p className="font-medium">⏱️ Instructions for periodic commits:</p>
                      <pre className="bg-gray-100 border border-gray-300 p-3 rounded-md text-sm overflow-x-auto text-left text-gray-800">
                        <code>
                          # Add all changes git add . # Commit with timestamp and description git commit -m "Hourly
                          update - [brief description]" # Push to remote git push origin main
                        </code>
                      </pre>
                    </div>
                    <div>
                      <p className="font-medium">💡 Tips for participants:</p>
                      <ul className="list-none pl-6 space-y-1 text-left">
                        <li>📝 Write meaningful commit messages that describe what you've accomplished</li>
                        <li>🕒 Set timer reminders for hourly commits</li>
                        <li>📋 Keep a simple log of your progress alongside commits</li>
                        <li>🔍 Make sure to push after committing to ensure judges can see your work</li>
                        <li>🧩 Commit logical chunks of work rather than all changes at once</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8">
            <p className="">Thank you for making hackMCST a welcoming space for all!</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

