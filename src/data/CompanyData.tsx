export interface CompanyInfo {
  name: string
  cin: string
  registeredOffice: string
  gstNumber: string
  year: number
  description: string
  services: string[]
  contact: {
    email: string
    phone: string
    address: string
  }
}

export interface LocationInfo {
  city: string
  country: string
  image: string
  description: string
}

export const COMPANY_DATA: CompanyInfo = {
  name: "AAlex Chartered Accountant",
  cin: "L74999DL2023PTC123456",
  registeredOffice: "New Delhi, India",
  gstNumber: "07AABCA1234B1Z5",
  year: 2024,
  description: "Professional accounting and financial services firm providing comprehensive business solutions.",
  services: [
    "Tax Planning & Compliance",
    "Financial Auditing",
    "Business Consulting",
    "GST Registration & Filing",
    "Company Registration",
    "Investment Advisory"
  ],
  contact: {
    email: "info@aalexca.com",
    phone: "+91-11-1234-5678",
    address: "123 Business District, New Delhi, India - 110001"
  }
}

export const LOCATIONS_DATA: LocationInfo[] = [
  {
    city: "New York",
    country: "USA",
    image: "/src/assets/homeAssets/nyc.jpg",
    description: "Professional Accounting Services in New York"
  },
  {
    city: "Mumbai",
    country: "India",
    image: "/src/assets/homeAssets/mumbai.jpg",
    description: "Expert Financial Solutions in Mumbai"
  },
  {
    city: "Kochi",
    country: "India",
    image: "/src/assets/homeAssets/kochi.jpg",
    description: "Trusted Business Consulting in Kochi"
  }
]

export const HOME_CONTENT = {
  title: "Ready to lead in the new economy?",
  paragraphs: [
    "Dive into AAlex services new economy report, featuring five guiding principles designed to help your business thrive amid the complex sustainability polycrisis we face today.",
    "AAlex teams give you the confidence to shape the future and create new value by reimagining and realizing transformations across the entire enterprise."
  ]
}

export const SERVICES_CONTENT = {
  title: "Our Services",
  description: "We offer comprehensive financial and business solutions to help your organization grow and succeed."
}

export const ABOUT_CONTENT = {
  title: "About AALEX",
  description: "We support companies with everything from financial services to strategic consulting, and business development to create sustainable growth. Regardless of whether it is an audit, salary services, VAT accounting or acquisitions - we help companies and entrepreneurs to develop their businesses."
}

export const CONTACT_CONTENT = {
  title: "Contact Us",
  description: "Get in touch with our financial services team for support and inquiries."
}

export const NAVIGATION_DATA = {
  routes: {
    home: "/",
    about: "/about",
    accounting: "/accounting",
    resources: "/resources",
    contact: "/contact"
  },
  menuItems: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Accounting", path: "/accounting" },
    { label: "Resources", path: "/resources" },
    { label: "Contact Us", path: "/contact" }
  ]
}

export default {
  COMPANY_DATA,
  LOCATIONS_DATA,
  HOME_CONTENT,
  SERVICES_CONTENT,
  ABOUT_CONTENT,
  CONTACT_CONTENT,
  NAVIGATION_DATA
}