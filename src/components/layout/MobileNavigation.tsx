'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Slide-out Menu */}
      <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-visa-500 to-visa-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">YourVisa.ai</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-6 space-y-4">
            <Link
              href="/visas"
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              Visa Types
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
            <Link
              href="/help"
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              Help Center
            </Link>
          </nav>

          {/* Authentication Section */}
          <div className="p-6 border-t border-gray-200 space-y-4">
            <Button variant="secondary" className="w-full" onClick={onClose}>
              Sign In
            </Button>
            <Button variant="primary" className="w-full" onClick={onClose}>
              Get Started
            </Button>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2024 YourVisa.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
