"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail } from "lucide-react"

export default function Info3() {
  const faqItems = [
    {
      question: "What is a hackathon?",
      answer:
        'A hackathon is a coding event in which hackers and/or teams of hackers develop a "hack". A hack could be anything... a website, an app, or any other invention. Let your imagination run wild!',
    },
    {
      question: "Who can participate?",
      answer: "Any student currently in grade 7 through 12 can participate!",
    },
    {
      question: "How much does it cost?",
      answer:
        "hackMCST X is 100% free! That's one of the best things about hackathons: there's nothing to lose! Lunch and dinner are provided at no cost, and each hacker will receive a free hackMCST X T-shirt!",
    },
    {
      question: "How long is the event?",
      answer:
        "hackMCST X is a 12-hour event at Morris County School of Technology. The event starts at 9 AM and ends at 9 PM, with check-in at 8 AM, giving each team plenty of time to create an amazing hack!",
    },
    {
      question: "What if I have never been to a hackathon before?",
      answer:
        "You've come to the right place! hackMCST X is the perfect place to get your feet on the ground and dip your toes in the water. There is something for every skills level at hackMCST!",
    },
    {
      question: "Do I need to already have a team beforehand?",
      answer:
        "Totally not! We have a big team-building session in the beginning of the hackathon, so hackers can connect to other hackers with similar interests to form a team of up to 4 members.",
    },
    {
      question: "Do I need to bring anything?",
      answer:
        "You need to bring any technology or personal device that you plan on using, such as a laptop or chromebook. If the hack you plan on making involves any additional peripherals, you need to bring those with you too. Two meals and additional snacks will be provided.",
    },
    {
      question: "Do I need a parent/guardian/teacher chaperone to come with me?",
      answer:
        "Nope! We have chaperones at the event who watch the hackers and make sure everything goes safely. Just drop off the hacker in the morning and pick them up at night!",
    },
    {
      question: "Can I bring a pre-made project?",
      answer:
        "While you can use assets (such as images or music) that you made in advance, you must actually make your hack at the event. All code must be actually produced at the hackathon.",
    },
    {
      question: "Can I use AI in the making of my project?",
      answer:
        "You can use AI assisted tools (such as GitHub Copilot) to assist in the development of your project, but it should still reflect your initial vision. It should not strongly influence the outcome of the project.\n\nYou CAN use AI as part of your project, however (such as for algorithms, backend management, or making something similar to an image detector).",
    },
    {
      question: "What is the Code of Conduct?",
      answer: (
        <span>
          <a href="/code-of-conduct" className="text-primary hover:underline">
            Click here
          </a>{" "}
          to see the hackMCST X Code of Conduct. All attendees are expected to adhere to the Code of Conduct for the
          entire duration of the event.
        </span>
      ),
    },
  ]

  return (
    <section id="faq" className="py-16 px-4 max-w-4xl mx-auto text-black fontarchytype">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
          Frequently-Asked-Questions
        </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 text-center text-sm text-muted-foreground px-4">
      <p className="flex flex-wrap items-center justify-center gap-2 max-w-[90%] mx-auto">
        <Mail className="h-4 w-4 flex-shrink-0" />
        <span>If you have any other questions, feel free to contact us at</span> 
        <a href="mailto:cis@mcvts.org" className="text-primary hover:underline whitespace-nowrap">
          cis@mcvts.org,
        </a>
        <span>and we will be glad to answer.</span>
      </p>
    </div>

    </section>
  )
}

