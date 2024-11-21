import ReactMarkdown from "react-markdown";
export default function PrivacyPolicyPage() {
  return (
    <ReactMarkdown className="prose prose-xl w-full mx-auto place-content-center">
      {`
# Data Collection and Use
We collect personal information about you and your child when you register for our services, including:
- Parent/guardian name and contact information
- Child's name and age
- Emergency contact details
- Relevant health information about your child 

## Data Protection
- We are committed to protecting your privacy and your child's personal information
- We never share your personal data with third parties without your explicit consent
- Our services are not directed at children under 13 without parental consent 
## Data Storage and Security
- All collected information is stored securely
- We implement appropriate technical measures to protect your data
- We retain your information only as long as necessary to provide our services
`}
    </ReactMarkdown>
  );
}
