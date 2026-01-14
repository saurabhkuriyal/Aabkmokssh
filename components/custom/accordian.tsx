"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function accordian() {
    return (
        <div className=" flex justify-center items-center ">
            <div className="w-[60vw] mb-5">
                <p className="text-2xl text-green-700 text-shadow-lg border-b">Frequently asked question...</p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is these stones are authentic?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the Government standard.
                    </AccordionContent>
                    <AccordionTrigger>Is refund available?</AccordionTrigger>
                    <AccordionContent>
                        Yes, with valid reason and following our norms refund is available with 6 business days
                    </AccordionContent>
                    <AccordionTrigger>How much time it will take stone to reach to us?</AccordionTrigger>
                    <AccordionContent>
                        On successful payment it will take 3-4 days to reach to you described location.
                    </AccordionContent>
                    <AccordionTrigger>Is you service available in delhi?</AccordionTrigger>
                    <AccordionContent>
                        Yes, it is.
                    </AccordionContent>
                    
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    )
}
