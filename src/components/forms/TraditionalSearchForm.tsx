'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface SearchFormData {
  fromCountry: string;
  toCountry: string;
  visaType: string;
  purpose: string;
  duration: string;
}

const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
];

const visaTypes = [
  { value: 'tourist', label: 'Tourist Visa' },
  { value: 'business', label: 'Business Visa' },
  { value: 'student', label: 'Student Visa' },
  { value: 'work', label: 'Work Visa' },
  { value: 'family', label: 'Family Visa' },
  { value: 'transit', label: 'Transit Visa' },
  { value: 'medical', label: 'Medical Visa' },
  { value: 'diplomatic', label: 'Diplomatic Visa' },
];

const purposes = [
  { value: 'tourism', label: 'Tourism & Leisure' },
  { value: 'business', label: 'Business & Work' },
  { value: 'education', label: 'Education & Study' },
  { value: 'family', label: 'Family Visit' },
  { value: 'medical', label: 'Medical Treatment' },
  { value: 'conference', label: 'Conference & Events' },
];

const durations = [
  { value: '30', label: 'Up to 30 days' },
  { value: '90', label: 'Up to 90 days' },
  { value: '180', label: 'Up to 180 days' },
  { value: '365', label: 'Up to 1 year' },
  { value: 'multiple', label: 'Multiple entry' },
];

export function TraditionalSearchForm() {
  const [formData, setFormData] = useState<SearchFormData>({
    fromCountry: '',
    toCountry: '',
    visaType: '',
    purpose: '',
    duration: '',
  });

  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (field: keyof SearchFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      // TODO: Implement actual search functionality
      console.log('Search form submitted:', formData);
      alert('Search functionality coming soon!');
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Traditional Visa Search
        </h3>
        <p className="text-gray-600">
          Search for visa requirements and processing times
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* From Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From Country *
          </label>
          <select
            value={formData.fromCountry}
            onChange={(e) => handleInputChange('fromCountry', e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-visa-500 focus:border-transparent"
          >
            <option value="">Select your country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* To Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To Country *
          </label>
          <select
            value={formData.toCountry}
            onChange={(e) => handleInputChange('toCountry', e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-visa-500 focus:border-transparent"
          >
            <option value="">Select destination country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Visa Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Visa Type *
          </label>
          <select
            value={formData.visaType}
            onChange={(e) => handleInputChange('visaType', e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-visa-500 focus:border-transparent"
          >
            <option value="">Select visa type</option>
            {visaTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Purpose */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Purpose of Visit *
          </label>
          <select
            value={formData.purpose}
            onChange={(e) => handleInputChange('purpose', e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-visa-500 focus:border-transparent"
          >
            <option value="">Select purpose</option>
            {purposes.map((purpose) => (
              <option key={purpose.value} value={purpose.value}>
                {purpose.label}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration of Stay *
          </label>
          <select
            value={formData.duration}
            onChange={(e) => handleInputChange('duration', e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-visa-500 focus:border-transparent"
          >
            <option value="">Select duration</option>
            {durations.map((duration) => (
              <option key={duration.value} value={duration.value}>
                {duration.label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isSearching}
          disabled={isSearching}
        >
          {isSearching ? 'Searching...' : 'Search Visa Requirements'}
        </Button>
      </form>

      {/* Quick Links */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3">Quick access:</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            onClick={() => setFormData({
              fromCountry: 'US',
              toCountry: 'FR',
              visaType: 'tourist',
              purpose: 'tourism',
              duration: '90',
            })}
          >
            US → France (Tourist)
          </button>
          <button
            type="button"
            className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            onClick={() => setFormData({
              fromCountry: 'GB',
              toCountry: 'DE',
              visaType: 'business',
              purpose: 'business',
              duration: '90',
            })}
          >
            UK → Germany (Business)
          </button>
        </div>
      </div>
    </div>
  );
}
