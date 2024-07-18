import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";

  
  export function AccordionFAQ() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>1. what is devspace?</AccordionTrigger>
          <AccordionContent className='text-sm lg:text-base text-gray-500 dark:text-gray-400 font-normal '>
          devspace is platform designed for developers to find fellow developers, collaborate on projects, and enhance their coding skills through pair programming. it provides tools for video chat, screen sharing, and room creation, making it easier to work together remotely.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2. what is pair programming?</AccordionTrigger>
          <AccordionContent className='text-sm lg:text-base text-gray-500 dark:text-gray-400 font-normal '>
          pair programming is a development technique where two programmers work side-by-side on the same codebase. one acts as the "driver" who writes the code, while the other, the "navigator," reviews each line of code and provides guidance. this collaborative approach helps catch errors early, promotes knowledge sharing, and enhances teamwork skills.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>3. how do I create a room on devspace?</AccordionTrigger>
          <AccordionContent className='text-sm lg:text-base  text-gray-500 dark:text-gray-400  font-normal '>
          creating a room on devspace is simple. after logging in, navigate to the "create room" section, fill in the necessary details such as room name, description, and tags, and click "create." you can then invite other developers to join your room and start collaborating.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>4. how can I find developers to collaborate with on devspace?</AccordionTrigger>
          <AccordionContent className='text-sm lg:text-base text-gray-500 dark:text-gray-400 font-normal '>
          you can find developers to collaborate with by browsing through the available rooms and spaces on devspace. use tags and filters to find rooms that match your interests and skills. you can also create your own room and invite others to join.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>5. is devspace free to use?</AccordionTrigger>
          <AccordionContent className='text-sm lg:text-base text-gray-500 dark:text-gray-400 font-normal '>
          yes!, devspace is completely free to use for anyone. you can enjoy all the features and benefits of the platform without any cost.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  