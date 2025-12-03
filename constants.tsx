import { Home, Building2, Sparkles, Truck, Key, Armchair, ShieldCheck, Clock, Award, MapPin } from 'lucide-react';
import { ServiceItem, Testimonial, PricingPlan } from './types';

export const COLORS = {
  darkBlue: '#0F2C59',
  lightBlue: '#84A7D8',
  softGrey: '#f8f8f8',
  accent: '#F4A261' // Adding a warm accent color for contrast
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Standard cleaning for houses, condos, and apartments. We keep your living space fresh and inviting.',
    icon: Home
  },
  {
    id: 'commercial',
    title: 'Commercial & Office',
    description: 'Professional cleaning for offices and retail spaces. Create a productive environment for your team.',
    icon: Building2
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    description: 'Thorough top-to-bottom clean. Perfect for spring cleaning or homes that haven\'t been cleaned professionally in a while.',
    icon: Sparkles
  },
  {
    id: 'move',
    title: 'Move-In / Move-Out',
    description: 'Ensure a fresh start or get your deposit back. We handle the heavy scrubbing for empty homes.',
    icon: Truck
  },
  {
    id: 'airbnb',
    title: 'Airbnb & Short Term',
    description: 'Reliable turnover service for hosts. 5-star standard cleaning, linen changing, and restocking.',
    icon: Key
  },
  {
    id: 'furniture',
    title: 'Upholstery & Carpet',
    description: 'Revitalize your furniture and carpets with our specialized steam cleaning services.',
    icon: Armchair
  }
];

export const FEATURES = [
  {
    title: 'Trusted & Vetted',
    description: 'All cleaners are background checked and fully insured.',
    icon: ShieldCheck
  },
  {
    title: 'On Time, Every Time',
    description: 'Reliable scheduling and real-time arrival updates.',
    icon: Clock
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'If you aren\'t happy, we will come back and fix it for free.',
    icon: Award
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Mississauga',
    text: 'Absolutely amazing service! The team arrived on time and left my condo sparkling clean. The deep clean package is worth every penny.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Downtown Toronto',
    text: 'We use GTA Pristine Clean for our office twice a week. Professional, unobtrusive, and very thorough.',
    rating: 5
  },
  {
    id: '3',
    name: 'Priya Patel',
    location: 'Brampton',
    text: 'Hired them for a move-out clean. My landlord was impressed and I got my full deposit back. Highly recommended!',
    rating: 5
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'basic',
    title: 'The Essentials',
    price: 'From $120',
    features: [
      'Kitchen & Bathroom sanitization',
      'Dusting all surfaces',
      'Vacuuming & Mopping',
      'Trash removal',
      'Ideal for weekly maintenance'
    ]
  },
  {
    id: 'deep',
    title: 'Deep Clean',
    price: 'From $250',
    features: [
      'Includes all Essentials',
      'Inside cabinets & appliances',
      'Baseboards & Door frames',
      'Light fixtures & Fans',
      'Ideal for first-time visits'
    ],
    recommended: true
  },
  {
    id: 'move',
    title: 'Move In/Out',
    price: 'From $350',
    features: [
      'Includes Deep Clean',
      'Inside windows',
      'Heavy stain removal',
      'Wall spot cleaning',
      'Garage sweeping'
    ]
  }
];

export const SERVICE_AREAS = [
  'Toronto', 'Mississauga', 'Brampton', 'Oakville', 'Burlington', 'Milton', 'Etobicoke', 'Scarborough', 'North York', 'Vaughan', 'Richmond Hill', 'Markham'
];
