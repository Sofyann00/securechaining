import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Website Vulnerability Assessment",
    description: "Comprehensive security audit of your website to identify vulnerabilities. We analyze your current security posture, detect potential entry points, and provide a detailed remediation plan.",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    category: "Web Security"
  },
  {
    id: 2,
    name: "Web Application Penetration Testing",
    description: "In-depth penetration testing of your web applications to uncover security flaws. Includes testing for OWASP Top 10 vulnerabilities, business logic flaws, and custom security issues.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de",
    category: "Penetration Testing"
  },
  {
    id: 3,
    name: "Mobile App Security Assessment",
    description: "Comprehensive security testing for iOS and Android applications. We identify vulnerabilities in your mobile app's code, data storage, and communication channels.",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
    category: "Mobile Security"
  },
  {
    id: 4,
    name: "Network Infrastructure Penetration Testing",
    description: "Thorough assessment of your network infrastructure security. We identify vulnerabilities in your network devices, servers, and overall architecture.",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    category: "Network Security"
  },
  {
    id: 5,
    name: "Cloud Security Assessment",
    description: "Comprehensive security evaluation of your cloud infrastructure. Includes assessment of AWS, Azure, or Google Cloud configurations, IAM policies, and security controls.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    category: "Cloud Security"
  },
  {
    id: 6,
    name: "E-commerce Security Package",
    description: "Specialized security testing for online stores. Includes payment gateway security, PCI DSS compliance checks, and e-commerce specific vulnerability assessment.",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    category: "E-commerce Security"
  },
  {
    id: 7,
    name: "API Security Testing",
    description: "In-depth security analysis of your APIs. We identify authentication flaws, authorization issues, and data exposure vulnerabilities in your API endpoints.",
    price: 4000000,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    category: "API Security"
  },
  {
    id: 8,
    name: "Security Monitoring & Incident Response",
    description: "Ongoing security monitoring and incident response planning. Includes setting up monitoring tools, creating response procedures, and regular security status reporting.",
    price: 2000000,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    category: "Security Operations"
  },
  {
    id: 9,
    name: "Social Engineering Assessment",
    description: "Evaluation of your organization's resilience against social engineering attacks. Includes phishing simulations, physical security tests, and employee security awareness.",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    category: "Human Security"
  },
  {
    id: 10,
    name: "IoT Device Security Testing",
    description: "Comprehensive security testing for Internet of Things devices. We identify vulnerabilities in firmware, communication protocols, and hardware interfaces.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "IoT Security"
  },
  {
    id: 11,
    name: "Basic Security Audit",
    description: "Essential security audit package for small businesses. Includes identification of common vulnerabilities and basic security recommendations.",
    price: 150000,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    category: "Security Audit"
  },
  {
    id: 12,
    name: "Security Compliance Check",
    description: "Quick assessment of your compliance with security standards like ISO 27001, GDPR, or HIPAA. Perfect for organizations needing to understand their compliance status.",
    price: 199000,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    category: "Compliance"
  }
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
