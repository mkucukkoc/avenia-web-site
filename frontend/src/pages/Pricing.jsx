import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, X } from 'lucide-react';
import { pricingPlans } from '../data/mock';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-[#232323] pt-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00c896]/20 border border-[#00c896]/30 mb-8">
            <span className="text-[#00c896] text-sm font-medium">💰 Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose the <span className="text-[#00c896]">Plan</span> That Fits You
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Flexible pricing that adapts to your needs
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-all duration-200 ${
                isYearly ? 'bg-[#00c896]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform duration-200 ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-[#00c896]/20 text-[#00c896] border-[#00c896]/30">
                2 Months Free
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gray-800/50 border-gray-700/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-[#00c896] shadow-xl shadow-[#00c896]/10' 
                  : 'hover:border-[#00c896]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#00c896] text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">
                    {isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-gray-400 text-lg ml-2">
                    {isYearly && plan.yearlyPeriod ? plan.yearlyPeriod : plan.period}
                  </span>
                </div>

                <Button 
                  asChild={plan.name === 'Premium'}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-[#00c896] hover:bg-[#00b085] text-white hover:shadow-lg hover:shadow-[#00c896]/25'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.name === 'Premium' ? (
                    <a
                      href="https://play.google.com/store/apps/details?id=com.aveniaichat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      {plan.buttonText}
                    </a>
                  ) : (
                    plan.buttonText
                  )}
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-6">
                <h4 className="text-white font-semibold mb-3">Included features:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#00c896] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Limitations */}
              {plan.limitations.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-gray-700">
                  <h4 className="text-gray-400 font-semibold mb-3">Limitations:</h4>
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start">
                      <X className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{limitation}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Feature <span className="text-[#00c896]">Comparison</span>
          </h2>
          
          <Card className="bg-gray-800/30 border-gray-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-6 text-white font-semibold">Feature</th>
                    <th className="text-center p-6 text-white font-semibold">Free</th>
                    <th className="text-center p-6 text-white font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700/50">
                    <td className="p-6">Document summarization</td>
                    <td className="text-center p-6">10/day</td>
                    <td className="text-center p-6">
                      <Check className="w-5 h-5 text-[#00c896] mx-auto" />
                      <span className="text-xs text-gray-400 block">Unlimited</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-6">Image analysis</td>
                    <td className="text-center p-6">5/day</td>
                    <td className="text-center p-6">
                      <Check className="w-5 h-5 text-[#00c896] mx-auto" />
                      <span className="text-xs text-gray-400 block">Unlimited</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-6">TTS/STT</td>
                    <td className="text-center p-6">5 min/day</td>
                    <td className="text-center p-6">
                      <Check className="w-5 h-5 text-[#00c896] mx-auto" />
                      <span className="text-xs text-gray-400 block">Unlimited</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-6">File size</td>
                    <td className="text-center p-6">10MB</td>
                    <td className="text-center p-6">100MB</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-6">Priority processing</td>
                    <td className="text-center p-6">
                      <X className="w-5 h-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <Check className="w-5 h-5 text-[#00c896] mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-6">API access</td>
                    <td className="text-center p-6">
                      <X className="w-5 h-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <Check className="w-5 h-5 text-[#00c896] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6">Support</td>
                    <td className="text-center p-6">Community</td>
                    <td className="text-center p-6">24/7 live support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* FAQ */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Frequently Asked <span className="text-[#00c896]">Questions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-left">
              <h3 className="text-white font-semibold mb-3">How much can I use on the free plan?</h3>
              <p className="text-gray-300">You get 10 document summaries, 5 image analyses, and 5 minutes of TTS/STT per day.</p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-left">
              <h3 className="text-white font-semibold mb-3">Can I cancel the Premium subscription?</h3>
              <p className="text-gray-300">Yes. Cancel anytime and keep access until the end of your current billing period.</p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-left">
              <h3 className="text-white font-semibold mb-3">How much do I save on the yearly plan?</h3>
              <p className="text-gray-300">Paying yearly saves you 17%—effectively two months for free.</p>
            </Card>
            
            <Card className="bg-gray-800/30 border-gray-700/50 p-6 text-left">
              <h3 className="text-white font-semibold mb-3">How is my data kept secure?</h3>
              <p className="text-gray-300">We protect your data with secure Firebase storage and 256-bit SSL encryption.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}