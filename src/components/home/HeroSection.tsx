import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-visa-600 via-visa-700 to-visa-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">AI-Powered</span>
            <span className="block text-visa-200">Visa Processing</span>
            <span className="block">in Minutes</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-visa-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform visa processing from hours to minutes with our intelligent automation. 
            ETIAS 2026 ready. Enterprise-grade. 10+ languages supported.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">10x Faster</h3>
              <p className="text-visa-200 text-sm">Reduce processing time from 2-4 hours to minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">95% Accuracy</h3>
              <p className="text-visa-200 text-sm">Lower error rates from 15-20% to under 5%</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-visa-200 text-sm">AI-powered assistance available anytime</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="xl" className="bg-white text-visa-700 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-visa-700">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-visa-500 border-opacity-30">
            <p className="text-visa-200 text-sm mb-4">Trusted by leading travel agencies and corporations</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="text-visa-200 font-semibold">Company A</div>
              <div className="text-visa-200 font-semibold">Company B</div>
              <div className="text-visa-200 font-semibold">Company C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
