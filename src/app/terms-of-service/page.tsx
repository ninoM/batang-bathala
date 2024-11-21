import ReactMarkdown from "react-markdown";
export default function PrivacyPolicyPage() {
  return (
    <ReactMarkdown className="prose prose-xl w-full mx-auto place-content-center">
      {`
# TERMS AND CONDITIONS FOR BATANG BATHALA

## Service Description
- Batang Bathala provides yoga classes specifically designed for children
- Classes are conducted by qualified instructors
- Parents/guardians must register children for participation

## User Responsibilities
Parents/guardians must:

- Provide accurate information during registration
- Inform us of any medical conditions that might affect participation
- Ensure children follow instructor guidance
- Maintain up-to-date contact information

## Payment and Cancellation
- Payment must be made in advance for classes
- Cancellations must be made at least 24 hours before scheduled class
- Refund policy applies as per local regulations

## Liability
While we ensure safe practices, we are not liable for:

- Injuries resulting from failure to follow instructor guidance
- Loss of personal belongings during classes
- Incidents outside our reasonable control

## Modification of Terms
- We reserve the right to modify these terms with notice
- Continued use of our services constitutes acceptance of modified terms 

## Termination
We reserve the right to terminate services if:

- Terms are violated
- Payment obligations are not met
- Behavior is deemed inappropriate or unsafe
`}
    </ReactMarkdown>
  );
}
