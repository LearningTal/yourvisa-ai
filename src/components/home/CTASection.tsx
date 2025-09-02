import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-visa-600 via-visa-700 to-visa-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Visa Processing?
        </h2>
        <p className="text-xl text-visa-100 mb-8 max-w-3xl mx-auto">
          Join leading travel agencies and corporations who are already saving hours on every visa application. 
          Start your free trial today and experience the future of visa processing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="primary" size="xl" className="bg-white text-visa-700 hover:bg-gray-100">
            Start Free Trial
          </Button>
          <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-visa-700">
            Schedule Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-visa-200 mb-2">10x</div>
            <div className="text-visa-100">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-visa-200 mb-2">95%</div>
            <div className="text-visa-100">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-visa-200 mb-2">24/7</div>
            <div className="text-visa-100">AI Support</div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-visa-500 border-opacity-30">
          <p className="text-visa-200 text-sm mb-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
          <div className="flex justify-center items-center space-x-6 text-visa-200 text-sm">
            <span>✓ SOC 2 Compliant</span>
            <span>✓ GDPR Ready</span>
            <span>✓ Enterprise Security</span>
          </div>
        </div>
      </div>
    </section>
  );
}
