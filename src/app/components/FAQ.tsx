import { HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'How does OMAYA ensure compliance with Somalia regulations?',
      answer: 'OMAYA is fully licensed as a money-transfer service in Somalia. We maintain compliance through built-in KYC/AML checks, transaction monitoring, comprehensive audit trails, and automated reporting to regulatory authorities.'
    },
    {
      question: 'What cities and regions do you cover?',
      answer: 'We currently operate in 18 cities across Somalia including Mogadishu, Hargeisa, Garowe, Bossaso, Kismayo, and Beledweyne. Our 234+ verified agents cover major commercial centers and regional hubs.'
    },
    {
      question: 'How quickly are payouts processed?',
      answer: 'Payouts are processed in real-time with an average transaction time of 4.2 seconds. Agents receive instant notifications and funds are immediately available for disbursement with a 98.5% success rate.'
    },
    {
      question: 'What security measures protect our transactions?',
      answer: 'We employ multi-factor authentication, device binding, end-to-end encryption, role-based access control, comprehensive audit trails, and AI-powered fraud detection. Our platform maintains a 99.9% uptime SLA.'
    },
    {
      question: 'Can we integrate OMAYA with our existing systems?',
      answer: 'Yes, we provide a comprehensive REST API with webhooks for real-time updates. Our technical team provides full integration support, documentation, and ongoing assistance.'
    },
    {
      question: 'How do you verify and manage agents?',
      answer: 'All agents undergo thorough KYC verification including business licensing checks, location verification, and background screening. We provide ongoing performance monitoring, training, and certification management.'
    }
  ];

  return (
    <div className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-subtle border border-primary-light mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-xs text-primary uppercase tracking-wider font-sans font-semibold">
              Frequently Asked Questions
            </span>
          </div>
          
          <h2 className="text-4xl text-foreground mb-4 font-heading font-bold">
            Common questions about OMAYA
          </h2>
          
          <p className="text-lg text-foreground-muted font-sans font-medium">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 hover:border-border-hover transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 font-heading font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground-muted leading-relaxed pb-5 font-sans font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-2" style={{fontFamily: 'Inter, sans-serif', fontWeight: 500}}>
            Still have questions?
          </p>
          <a
            href="mailto:support@omaya.io"
            className="text-[#1d8751] hover:text-[#166640] transition-colors"
            style={{fontFamily: 'Inter, sans-serif', fontWeight: 600}}
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </div>
  );
}