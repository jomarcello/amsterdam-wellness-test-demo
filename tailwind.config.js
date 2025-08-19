/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Gradients for backgrounds
    'from-emerald-600', 'to-green-600', 'from-blue-600', 'to-indigo-600', 
    'from-pink-600', 'to-rose-600', 'from-purple-600', 'to-violet-600',
    'bg-gradient-to-br', 'bg-gradient-to-r',
    'from-blue-50', 'via-indigo-50', 'to-blue-100',
    'from-emerald-50', 'via-green-50', 'to-emerald-100',
    'from-pink-50', 'via-rose-50', 'to-pink-100',
    'from-purple-50', 'via-violet-50', 'to-purple-100',
    
    // Hover states
    'hover:from-blue-700', 'hover:to-indigo-700',
    'hover:from-emerald-700', 'hover:to-green-700',
    'hover:from-pink-700', 'hover:to-rose-700',
    'hover:from-purple-700', 'hover:to-violet-700',
    
    // Card styling
    'shadow-lg', 'rounded-xl', 'px-8', 'py-4', 'hover:shadow-xl',
    'p-6', 'border', 'border-blue-100', 'border-emerald-100',
    'border-pink-100', 'border-purple-100',
    
    // Button styling
    'font-semibold', 'transition-all', 'duration-300',
    
    // Text colors
    'text-blue-600', 'text-emerald-600', 'text-pink-600', 'text-purple-600'
  ]
}