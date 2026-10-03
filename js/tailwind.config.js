/**
 * Hindustan Electricals Winding Works - Tailwind CSS Configuration
 * Configured for Play CDN runtime execution.
 * Aligns 1:1 with the industrial design tokens (Slate Navy, Industrial Amber, Copper Orange).
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          surface: '#334155',
        },
        accent: {
          DEFAULT: '#f59e0b',
          hover: '#d97706',
        },
        copper: {
          DEFAULT: '#ea580c',
          dark: '#c2410c',
        },
        whatsapp: {
          DEFAULT: '#25d366',
          dark: '#128c7e',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f1f5f9',
        },
        industrial: {
          bg: '#f8fafc',
          border: '#e2e8f0',
          'border-dark': '#cbd5e1',
          text: '#0f172a',
          muted: '#475569',
          light: '#94a3b8',
        }
      },
      fontFamily: {
        heading: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
      },
      boxShadow: {
        'industrial-sm': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'industrial-md': '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'industrial-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.06)',
        'industrial-xl': '0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)',
        'accent': '0 4px 14px rgba(245, 158, 11, 0.35)',
        'accent-lg': '0 6px 20px rgba(245, 158, 11, 0.45)',
        'primary': '0 4px 14px rgba(15, 23, 42, 0.25)',
      },
      maxWidth: {
        'container': '1240px',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1240px',
      }
    }
  },
  corePlugins: {
    preflight: false
  }
};
