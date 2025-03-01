"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center py-16 px-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
            Code of Conduct
          </h1>
          <h6 className="text-gray-400 mb-5">Last updated March 12, 2024</h6>

          <p className="mb-6">
            hackMCST is an event intended for learning, collaboration, engagement, and fun. 
            We want to ensure that our participants feel welcomed, included, and safe in our environment. 
            All attendees—including staff, participants, and judges—are expected to conform to the following Code of Conduct.
          </p>

          <div className="space-y-6">
            <section>
              <p>
                <strong>All participants are expected to show respect and courtesy to others at our event. </strong> 
                Be kind, thoughtful, and supportive of everyone and their ideas; encourage and help others when they are in need.
              </p>
            </section>

            <section>
              <p>
                <strong>We don’t tolerate any forms of harassment, discrimination, or bullying</strong>: including physical harassment, sexual harassment, 
                and offensive verbal comments related to someone’s gender, sexual orientation, disability, physical appearance, 
                body size, race, age, religion, etc. 
                <strong> Attendees asked to stop any behavior deemed as harassment, discrimination, or bullying are expected to comply immediately. </strong> 
              If an attendee fails to comply, they will be asked to leave the event.
              </p>
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
