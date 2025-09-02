import { HeroSection } from '@/components/home/HeroSection';
import { AIChatInterface } from '@/components/ai/AIChatInterface';
import { TraditionalSearchForm } from '@/components/forms/TraditionalSearchForm';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* AI Chat Interface - Main Feature */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Visa Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant answers to your visa questions. Upload documents, ask questions, and receive personalized guidance in seconds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* AI Chat Interface */}
            <div className="order-2 lg:order-1">
              <AIChatInterface />
            </div>
            
            {/* Traditional Search Form */}
            <div className="order-1 lg:order-2">
              <TraditionalSearchForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Call to Action */}
      <CTASection />
    </div>
  );
}
