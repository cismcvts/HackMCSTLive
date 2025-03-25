"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

export default function CodeOfConduct() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white text-dark">
      <Navbar />

      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container py-4 py-md-5 px-3">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold">
              <br></br>
              <br></br>
              <br></br>

              <span className="text-danger">Code of Conduct</span>
            </h1>
            <h6 className="text-muted mb-4">Last updated March 12, 2024</h6>

            <p className="mb-4">
              hackMCST is an event intended for learning, collaboration, engagement, and fun. We want to ensure that our
              participants feel welcomed, included, and safe in our environment. All attendees—including staff,
              participants, and judges—are expected to conform to the following Code of Conduct.
            </p>
          </div>

          <div className="mb-5">
            <section className="mb-4">
              <p>
                <strong>All participants are expected to show respect and courtesy to others at our event. </strong>
                Be kind, thoughtful, and supportive of everyone and their ideas; encourage and help others when they are
                in need.
              </p>
            </section>

            <section className="mb-4">
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
          </div>

          <section className="mt-5">
            <h2 className="text-danger fw-bold mb-4 text-center">
              AI Policy
            </h2>
            <div className="text-start">
              <div className="mb-4">
                <h3 className="text-danger fw-semibold mb-2">Prohibited AI Use</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    ❌ <strong>AI-Generated Code</strong> – Copy-pasting AI-generated code into your project without
                    significant modification or understanding.
                  </li>
                  <li className="mb-2">
                    ❌ <strong>AI-Generated Project Structures</strong> – Using AI to generate entire files, full
                    project templates, or core algorithmic solutions.
                  </li>
                  <li className="mb-2">
                    ❌ <strong>AI-Based Debugging Without Learning</strong> – If AI fixes errors for you and you don't
                    understand why, that's a problem.
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-success fw-semibold mb-2">Permitted Actions</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    ✔️ <strong>Learning Before the Event</strong> – You can study documentation, tutorials, or concepts
                    beforehand, but not write actual project code.
                  </li>
                  <li className="mb-2">
                    ✔️ <strong>Using Public Libraries & APIs</strong> – You may use third-party libraries, frameworks,
                    and APIs, as long as your implementation is original and done during the event.
                  </li>
                  <li className="mb-2">
                    ✔️ <strong>Code from Official Documentation</strong> – Small snippets (e.g., syntax examples from
                    official docs) are fine, but they cannot form a significant portion of your project.
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-danger fw-semibold mb-2">Prohibited Actions</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    ❌ <strong>Pre-Written Code</strong> – No part of the project's codebase may be written before the
                    hackathon officially begins.
                  </li>
                  <li className="mb-2">
                    ❌ <strong>Pre-Built Projects</strong> – Forking or modifying an existing personal or public
                    project (even your own) is not allowed.
                  </li>
                  <li className="mb-2">
                    ❌ <strong>Reusing Old Code</strong> – You may not copy-paste code from previous projects, whether
                    written by you or someone else.
                  </li>
                  <li className="mb-2">
                    ❌ <strong>Hidden Preparation</strong> – Writing pseudocode that is so detailed it can be quickly
                    converted into working code is prohibited.
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-warning fw-semibold mb-2">Rule Enforcement</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    ⚠️ <strong>Code Audits</strong> – Judges will inspect commit history to ensure all work was done
                    during the hackathon.
                  </li>
                  <li className="mb-2">
                    ⚠️ <strong>Live Coding Checks</strong> – Teams may be asked to demonstrate their project live to
                    confirm functionality.
                  </li>
                  <li className="mb-2">
                    ⚠️ <strong>Technical Questioning</strong> – Judges will ask how specific parts of your code were
                    written. If you can't explain it, penalties will apply.
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-primary fw-semibold mb-2">
                  Essential Software & Hardware Requirements
                </h3>
                <div>
                  <p className="fw-medium mb-1">💻 Development Tools:</p>
                  <ul className="list-unstyled ps-3">
                    <li>✅ Code editor or IDE (VS Code, IntelliJ, PyCharm, etc.)</li>
                    <li>🔹 We recommend VS Code (free & lightweight)</li>
                    <li>✅ Git installed locally</li>
                    <li>✅ GitHub account created and configured</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="fw-medium mb-1">🔌 Hardware:</p>
                  <ul className="list-unstyled ps-3">
                    <li>💻 Laptop with sufficient processing power and memory</li>
                    <li>⚡ 1.6 GHz or faster processor</li>
                    <li>🧠 1 GB of RAM</li>
                    <li>🖥️ Windows or Mac</li>
                    <li>🔋 Charger and possibly extension cords</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-purple fw-semibold mb-2">
                  📊 GitHub Setup Instructions
                </h3>
                <div>
                  <p className="fw-medium mb-1">🚀 Create a new repository:</p>
                  <pre className="bg-light border p-2 rounded overflow-auto small">
                    <code>
                      # Initialize a new repository git init # Add a remote origin (replace with your actual repo
                      URL) git remote add origin https://github.com/username/repo-name.git
                    </code>
                  </pre>
                </div>
                <div className="mt-3">
                  <p className="fw-medium mb-1">🏁 Initial commit setup:</p>
                  <pre className="bg-light border p-2 rounded overflow-auto small">
                    <code>
                      # Create a README echo "# Hackathon Project" {">"} README.md # Add and commit git add
                      README.md git commit -m "Initial commit" # Push to remote git push -u origin main
                    </code>
                  </pre>
                </div>
                <div className="mt-3">
                  <p className="fw-medium mb-1">⏱️ Instructions for periodic commits:</p>
                  <pre className="bg-light border p-2 rounded overflow-auto small">
                    <code>
                      # Add all changes git add . # Commit with timestamp and description git commit -m "Hourly
                      update - [brief description]" # Push to remote git push origin main
                    </code>
                  </pre>
                </div>
                <div className="mt-3">
                  <p className="fw-medium mb-1">💡 Tips for participants:</p>
                  <ul className="list-unstyled ps-3 text-start">
                    <li>📝 Write meaningful commit messages that describe what you've accomplished</li>
                    <li>🕒 Set timer reminders for hourly commits</li>
                    <li>📋 Keep a simple log of your progress alongside commits</li>
                    <li>🔍 Make sure to push after committing to ensure judges can see your work</li>
                    <li>🧩 Commit logical chunks of work rather than all changes at once</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-5 text-center">
            <p>Thank you for making hackMCST a welcoming space for all!</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}