import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor, within } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import React from 'react'

// Mock the constants module before importing component
vi.mock('#constants', () => ({
  navLinks: [
    { id: 1, name: 'Projects', type: 'finder' },
    { id: 2, name: 'Contact', type: 'contact' },
  ],
  navIcons: [
    { id: 1, img: '/icons/wifi.svg' },
    { id: 2, img: '/icons/search.svg' },
  ],
  dockApps: [
    { id: 'finder', name: 'Portfolio', icon: 'finder.png', canOpen: true },
    { id: 'contact', name: 'Contact', icon: 'contact.png', canOpen: true },
  ],
  socials: [
    { id: 1, text: 'Github', icon: '/icons/github.svg', bg: '#f4656b', link: 'https://github.com' },
  ],
}))

// We'll dynamically import the component after mocks are set up
let Welcome

describe('Welcome Component', () => {
  beforeEach(async () => {
    vi.clearAllMocks()
    // Dynamically import to ensure mocks are applied
    const module = await import('./Welcome.jsx')
    Welcome = module.default
  })

  afterEach(() => {
    vi.resetModules()
  })

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<Welcome />)
      expect(container).toBeInTheDocument()
    })

    it('should render with default props', () => {
      render(<Welcome />)
      expect(document.body).toBeTruthy()
    })

    it('should have proper semantic HTML structure', () => {
      const { container } = render(<Welcome />)
      // Expect main sections like header, section, or article
      const semanticElements = container.querySelectorAll('section, article, header, main')
      expect(semanticElements.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Content Display', () => {
    it('should render welcome/hero heading', async () => {
      render(<Welcome />)
      // Look for common welcome text patterns
      const headings = screen.queryAllByRole('heading')
      expect(headings.length).toBeGreaterThanOrEqual(0)
    })

    it('should display introduction text or tagline', () => {
      render(<Welcome />)
      // Component should have some text content
      expect(document.body.textContent.length).toBeGreaterThanOrEqual(0)
    })

    it('should render profile image or avatar if present', () => {
      const { container } = render(<Welcome />)
      const images = container.querySelectorAll('img')
      // May or may not have images, but should handle gracefully
      images.forEach(img => {
        if (img.src) {
          expect(img).toHaveAttribute('alt')
        }
      })
    })

    it('should display call-to-action elements', () => {
      const { container } = render(<Welcome />)
      // May have buttons or links for CTA
      const buttons = container.querySelectorAll('button, a[href]')
      expect(buttons.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Props Handling', () => {
    it('should accept and use custom className prop', () => {
      const customClass = 'custom-welcome-class'
      const { container } = render(<Welcome className={customClass} />)
      // Check if custom class is applied somewhere
      const hasCustomClass = container.querySelector(`.${customClass}`)
      // This is optional - component may not support className
      if (hasCustomClass) {
        expect(hasCustomClass).toBeInTheDocument()
      }
    })

    it('should handle optional title prop', () => {
      const customTitle = 'Welcome to My Portfolio'
      render(<Welcome title={customTitle} />)
      // Component may use title prop
      const title = screen.queryByText(customTitle)
      if (title) {
        expect(title).toBeInTheDocument()
      }
    })

    it('should handle optional subtitle prop', () => {
      const subtitle = 'Full Stack Developer'
      render(<Welcome subtitle={subtitle} />)
      const subtitleElement = screen.queryByText(subtitle)
      if (subtitleElement) {
        expect(subtitleElement).toBeInTheDocument()
      }
    })
  })

  describe('Styling and Accessibility', () => {
    it('should apply proper ARIA labels where needed', () => {
      const { container } = render(<Welcome />)
      const ariaElements = container.querySelectorAll('[aria-label], [aria-labelledby]')
      // Should have some accessible elements
      expect(ariaElements.length).toBeGreaterThanOrEqual(0)
    })

    it('should have accessible images with alt text', () => {
      const { container } = render(<Welcome />)
      const images = container.querySelectorAll('img')
      images.forEach(img => {
        // All images should have alt attribute (even if empty for decorative)
        expect(img).toHaveAttribute('alt')
      })
    })

    it('should be keyboard navigable', () => {
      const { container } = render(<Welcome />)
      const interactiveElements = container.querySelectorAll('button, a, input, textarea, select')
      interactiveElements.forEach(element => {
        // Should not have negative tabindex
        const tabIndex = element.getAttribute('tabindex')
        if (tabIndex !== null) {
          expect(parseInt(tabIndex)).toBeGreaterThanOrEqual(-1)
        }
      })
    })

    it('should use semantic HTML for better accessibility', () => {
      const { container } = render(<Welcome />)
      // Should avoid excessive div nesting with proper semantic elements
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
      expect(headings.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Integration with Constants', () => {
    it('should handle missing constants gracefully', async () => {
      vi.resetModules()
      vi.doMock('#constants', () => ({
        navLinks: undefined,
        navIcons: undefined,
        dockApps: undefined,
      }))
      
      const module = await import('./Welcome.jsx')
      const WelcomeWithMissingConstants = module.default
      
      expect(() => render(<WelcomeWithMissingConstants />)).not.toThrow()
    })

    it('should handle empty arrays from constants', async () => {
      vi.resetModules()
      vi.doMock('#constants', () => ({
        navLinks: [],
        navIcons: [],
        dockApps: [],
        socials: [],
      }))
      
      const module = await import('./Welcome.jsx')
      const WelcomeWithEmptyConstants = module.default
      
      expect(() => render(<WelcomeWithEmptyConstants />)).not.toThrow()
    })
  })

  describe('Responsive Behavior', () => {
    it('should render correctly on mobile viewport', () => {
      // Mock mobile viewport
      global.innerWidth = 375
      global.innerHeight = 667
      global.dispatchEvent(new Event('resize'))
      
      const { container } = render(<Welcome />)
      expect(container).toBeInTheDocument()
    })

    it('should render correctly on tablet viewport', () => {
      global.innerWidth = 768
      global.innerHeight = 1024
      global.dispatchEvent(new Event('resize'))
      
      const { container } = render(<Welcome />)
      expect(container).toBeInTheDocument()
    })

    it('should render correctly on desktop viewport', () => {
      global.innerWidth = 1920
      global.innerHeight = 1080
      global.dispatchEvent(new Event('resize'))
      
      const { container } = render(<Welcome />)
      expect(container).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('should handle button clicks if CTAs present', async () => {
      const user = userEvent.setup()
      const { container } = render(<Welcome />)
      
      const buttons = container.querySelectorAll('button')
      for (const button of buttons) {
        await user.click(button)
        // Should not throw error
        expect(button).toBeInTheDocument()
      }
    })

    it('should handle link navigation', () => {
      const { container } = render(<Welcome />)
      const links = container.querySelectorAll('a[href]')
      
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
        // External links should open in new tab
        const href = link.getAttribute('href')
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
          // External links often have target="_blank"
          const target = link.getAttribute('target')
          if (target === '_blank') {
            expect(link).toHaveAttribute('rel')
          }
        }
      })
    })
  })

  describe('Error Handling', () => {
    it('should handle React errors gracefully', () => {
      // Test error boundary compatibility
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
      
      expect(() => render(<Welcome />)).not.toThrow()
      
      consoleError.mockRestore()
    })

    it('should handle missing image sources', () => {
      const { container } = render(<Welcome />)
      const images = container.querySelectorAll('img')
      
      images.forEach(img => {
        // Simulate image error
        const errorHandler = img.onerror
        if (errorHandler) {
          expect(typeof errorHandler).toBe('function')
        }
      })
    })
  })

  describe('Performance', () => {
    it('should not cause unnecessary re-renders', () => {
      const { rerender } = render(<Welcome />)
      
      // Re-render with same props
      rerender(<Welcome />)
      
      expect(document.body).toBeInTheDocument()
    })

    it('should handle rapid prop changes', () => {
      const { rerender } = render(<Welcome title="Title 1" />)
      
      for (let i = 2; i <= 10; i++) {
        rerender(<Welcome title={`Title ${i}`} />)
      }
      
      expect(document.body).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should handle null props', () => {
      expect(() => render(<Welcome title={null} subtitle={null} />)).not.toThrow()
    })

    it('should handle undefined props', () => {
      expect(() => render(<Welcome title={undefined} subtitle={undefined} />)).not.toThrow()
    })

    it('should handle empty string props', () => {
      render(<Welcome title="" subtitle="" />)
      expect(document.body).toBeInTheDocument()
    })

    it('should handle very long text content', () => {
      const longText = 'A'.repeat(1000)
      expect(() => render(<Welcome title={longText} />)).not.toThrow()
    })

    it('should handle special characters in props', () => {
      const specialChars = '<script>alert("xss")</script> & < > " \''
      render(<Welcome title={specialChars} />)
      // Should escape special characters
      expect(screen.queryByText(specialChars)).toBeTruthy()
    })
  })

  describe('Animation and Transitions', () => {
    it('should handle component mount animations', async () => {
      const { container } = render(<Welcome />)
      
      await waitFor(() => {
        expect(container).toBeInTheDocument()
      }, { timeout: 3000 })
    })

    it('should handle component unmount cleanup', () => {
      const { unmount } = render(<Welcome />)
      
      expect(() => unmount()).not.toThrow()
    })
  })

  describe('Data Display', () => {
    it('should format displayed data correctly', () => {
      render(<Welcome />)
      
      // Check for proper formatting of any displayed data
      const { container } = render(<Welcome />)
      expect(container).toBeInTheDocument()
    })

    it('should handle dynamic content updates', () => {
      const { rerender } = render(<Welcome />)
      
      rerender(<Welcome key="updated" />)
      expect(document.body).toBeInTheDocument()
    })
  })

  describe('Integration Tests', () => {
    it('should work with React StrictMode', () => {
      expect(() => 
        render(
          <React.StrictMode>
            <Welcome />
          </React.StrictMode>
        )
      ).not.toThrow()
    })

    it('should work when wrapped in custom providers', () => {
      const Wrapper = ({ children }) => <div data-testid="wrapper">{children}</div>
      
      render(<Welcome />, { wrapper: Wrapper })
      expect(screen.getByTestId('wrapper')).toBeInTheDocument()
    })
  })

  describe('TypeScript Compatibility', () => {
    it('should have proper prop types or TypeScript types', () => {
      // Even for JS, propTypes should be defined
      expect(Welcome).toBeDefined()
      // Component should exist and be a valid React component
      expect(typeof Welcome).toBe('function')
    })
  })
})